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
                  <div class="main-calc-card__tarif"><span>??????????</span> ${options.tarif}</div>
                  <div class="main-calc-card__expenses"><span>?????????????? ????????????????</span> ${options.summ().toLocaleString('ru')} ??/??????</div>
                  <div class="main-calc-card__link"><a href="${options.link}">?????????????????????? ???????? ??????????</a></div>
                  <div class="main-calc-card__but"><a class="but but_blue" href="${options.link}"><span>?????????????? ????????</span></a></div>
                </div>
                <div class="main-calc-card__bottom" style="display: block">
                  <div class="main-calc-card__content">
                    <div class="main-calc-card__info">
                      <div class="main-calc-card__row row">
                        <div class="col-lg-6">
                          <div class="main-calc-card__table">
                            <div class="main-calc-card__heading">?????? ????????????:</div>
                            <table class="main-calc-card__table">
                              <tr>
                                <td>???????????????? ??????????</td>
                                <td>${options.cost} ??/??????</td>
                              </tr>
                              <tr>
                                <td>?????????????????? ???????????????????????? ??????????</td>
                                <td>${options.maintenance} ??/??????</td>
                              </tr>
                              <tr>
                                <td>???????????????????? ???????? ???? ${data.replenishment} ??.</td>
                                <td>${options.repl} ??/??????</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="main-calc-card__table">
                            <table class="main-calc-card__table">
                              <tr>
                                <td>???? ?????????????? ????. ?????????? ?? ???? ${data.payments} ????.</td>
                                <td>${options.urFace > 0 ? options.urFace : 0} ??/??????</td>
                              </tr>
                              <tr>
                                <td>???? ???????????????? ???????????????????? ?????????? ${data.translations.toLocaleString('ru')} ??/?????? </td>
                                <td>${options.cash} ??/??????</td>
                              </tr>
                              <tr>
                                <td>???? ???????????? ?????????????? ${data.card.toLocaleString('ru')} ??.</td>
                                <td>${options.fiz} ??/??????</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="main-calc-card__total">
                      <div class="main-calc-card__sign">?????????? ?????????????? ?? ??????.</div>
                      <div class="main-calc-card__price">${options.summ().toLocaleString('ru')} ??/??????</div>
                    </div>
                  </div>
                  <div class="main-calc-card__extra">
                    <div class="main-calc-card__subtitle">??????????????????????????:</div>
                    <ul class="main-calc-card__options">
                      ${options.percent ? `<li>???? ${options.percent}% ???? ??????????????</li>` : ''}
                      ${options.acquiring ? `<li>?????????????????? ???? ${options.acquiring} %</li>` : ''}
                      ${options.discovery ? '<li>?????????????????????????? ????????????????</li>' : ''}
                      ${options.accounting ? '<li>??????????????-??????????????????????</li>' : ''}
                    </ul>
                    <div class="main-calc-card__tarifs"><a href="#">?????? ???????????? ${options.bank}</a></div>
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