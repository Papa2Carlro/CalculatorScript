import bank from './bank/index'

// DOM
const $form = document.body.querySelector('.main-calc-form')
const $cards = document.body.querySelector('[data-js="cards"]')
// Data
const checkbox = ['who', 'eq', 'dist', 'on', 'per']
const bankList = ['tochka', 'tinkoff', 'modules', 'sber', 'vtb', 'loco', 'alfa', 'raif', 'otkr', 'ros', 'sfera', 'delo',
    'ural', 'sovk', 'mts', 'ubril', 'forbank', 'metall', 'prosto', 'forabank', 'morskoy', 'zayber', 'yunicredit', 'opt', 'mkb']
// Form
const data = {
    who: 'ip',
    payments: 0,
    card: 400_000,
    translations: 400_000,
    replenishment: 400_000,
    eq: 'no',
    dist: 'no',
    on: 'no',
    per: 'no'
}
// Mounted
const mounted = () => {
    const setData = (variable, value) => data[variable] = parseInt(value)

    $(document).on('input', 'input[type="range"]', (e) => setData(e.target.dataset.variable, e.currentTarget.value))
}
mounted()
// Methods
const methods = {
    submitHandler() {
        checkbox.map(variable => data[variable] = $(`input[name="${variable}"]:checked`, '.main-calc-form').val())

        this.createData()
    },

    calculate(variable, value, index, summa) {
        let commision = 0

        const commList = Object.entries(value.macros[variable])
        const lastRow = commList.length - 1

        for (let i = lastRow; i >= 0; i--) {
            const [active, comis] = commList[i]

            const percent = comis[index]
            const point = parseInt(active)
            const prePoint = parseInt(commList[i === 0 ? 0 : i - 1][0])

            if (i === lastRow && summa >= point)
                commision += (summa - point) * (percent / 100)

            if (i > 0 && summa >= point) {
                commision += (point - prePoint) * (percent / 100)
                commision = commision < 0 ? 0 : commision
            } else if (i > 0) {
                commision += (summa - prePoint) * (percent / 100)
                commision = commision < 0 ? 0 : commision
            } else if (i === 0 && summa >= point) {
                commision += point * (percent / 100)
                commision = commision < 0 ? 0 : commision
            } else if (i === 0 && summa < point) {
                commision += point * (percent / 100)
                commision = commision < 0 ? 0 : commision
            }
        }

        return commision
    },

    createData() {
        let result = []

        bankList.map(item => {
            const value = bank[item]

            value.body.map((tarif, index) => {
                const cart = {
                    link: value.link,
                    bank: value.general.bank,
                    logo: value.general.image,
                    acquiring: value.general.acquiring,
                    discovery: value.general.discovery,
                    accounting: value.general.accounting,

                    cost: tarif.cost,
                    tarif: tarif.title,
                    percent: tarif.percent,
                    maintenance: tarif.maintenance,
                    urFace: (data.payments - tarif.freePayments) * tarif.outgoing,

                    cash: this.calculate('cash', value, index, data.card),
                    fiz: this.calculate('fiz', value, index, data.translations),
                    repl: this.calculate('repl', value, index, data.replenishment),

                    summ() {
                        return this.cost + this.maintenance + (this.urFace > 0 ? this.urFace : 0) + this.cash + this.fiz
                    }
                }

                if (data.per === 'no') {
                    result.push(cart)
                } else if (data.per === 'yes' && tarif.percent) {
                    result.push(cart)
                }
            })
        })

        result = data.on === 'yes' ? result.filter(item => item.acquiring) : result
        result = data.eq === 'yes' ? result.filter(item => item.accounting === 'yes') : result
        result = data.dist === 'yes' ? result.filter(item => item.discovery === 'yes') : result

        $cards.innerHTML = ''
        result.map(card => $cards.insertAdjacentHTML('beforeend', this.card(card)))
    },

    card(options) {
        return `
              <div class="main-calc-card">
                <div class="main-calc-card__close js-removeCard">
                  <svg class="icon icon-close ">
                    <use xlink:href="images/sprites.svg#close"></use>
                  </svg>
                </div>
                <div class="main-calc-card__more js-moreCard"><span>
                    <svg class="icon icon-down ">
                      <use xlink:href="images/sprites.svg#down"></use>
                    </svg></span></div>
                <div class="main-calc-card__top">
                  <div class="main-calc-card__logo"><a href="#"><img src="${options.logo}" alt=""></a></div>
                  <div class="main-calc-card__tarif"><span>Тариф</span> ${options.tarif}</div>
                  <div class="main-calc-card__expenses"><span>Расходы составят</span> ${options.summ().toLocaleString('ru')} р/мес</div>
                  <div class="main-calc-card__link"><a href="${options.link}">Официальный сайт банка</a></div>
                  <div class="main-calc-card__but"><a class="but but_blue" href="${options.link}"><span>Открыть счет</span></a></div>
                </div>
                <div class="main-calc-card__bottom" style="display: block">
                  <div class="main-calc-card__content">
                    <div class="main-calc-card__info">
                      <div class="main-calc-card__row row">
                        <div class="col-lg-6">
                          <div class="main-calc-card__table">
                            <div class="main-calc-card__heading">Ваш расчет:</div>
                            <table class="main-calc-card__table">
                              <tr>
                                <td>Открытие счета</td>
                                <td>${options.cost} р/мес</td>
                              </tr>
                              <tr>
                                <td>Стоимость обслуживания счета</td>
                                <td>${options.maintenance} р/мес</td>
                              </tr>
                              <tr>
                                <td>Пополнение счет на ${data.replenishment} р.</td>
                                <td>${options.repl} р/мес</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="main-calc-card__table">
                            <table class="main-calc-card__table">
                              <tr>
                                <td>За платежи юр. лицам и ИП ${data.payments} шт.</td>
                                <td>${options.urFace > 0 ? options.urFace : 0} р/мес</td>
                              </tr>
                              <tr>
                                <td>За переводы физическим лицам ${data.translations.toLocaleString('ru')} р/мес </td>
                                <td>${options.cash} р/мес</td>
                              </tr>
                              <tr>
                                <td>За снятие наличны ${data.card.toLocaleString('ru')} р.</td>
                                <td>${options.fiz} р/мес</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="main-calc-card__total">
                      <div class="main-calc-card__sign">итого расходы в мес.</div>
                      <div class="main-calc-card__price">${options.summ().toLocaleString('ru')} р/мес</div>
                    </div>
                  </div>
                  <div class="main-calc-card__extra">
                    <div class="main-calc-card__subtitle">Дополнительно:</div>
                    <ul class="main-calc-card__options">
                      ${options.percent ? `<li>до ${options.percent}% на остаток</li>` : ''}
                      ${options.acquiring ? `<li>Эквайринг от ${options.acquiring} %</li>` : ''}
                      ${options.discovery ? '<li>Дистанционное открытие</li>' : ''}
                      ${options.accounting ? '<li>Онглайн-бухгалтерия</li>' : ''}
                    </ul>
                    <div class="main-calc-card__tarifs"><a href="#">Все тарифы ${options.bank}</a></div>
                  </div>
                </div>
              </div>
            `
    }
}
// Submit
$form.addEventListener('submit', (e) => {
    e.preventDefault()
    methods.submitHandler()
})