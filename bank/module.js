export default {
    body: [
        {
            title: 'Ничего лишнего',
            cost: 0,
            maintenance: 0,
            outgoing: 0,
            freePayments: 0,
            percent: 5
        },
        {
            title: 'Оптимальный',
            cost: 0,
            maintenance: 690,
            outgoing: 19,
            freePayments: 0,
            percent: 5
        },
        {
            title: 'Безлимитный',
            cost: 0,
            maintenance: 4900,
            outgoing: 0,
            freePayments: 0,
            percent: 5
        }
    ],
    general: {
        image: 'images/banks/mod.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Модульбанк',
        acquiring: 1
    },
    macros: {
        cash: {
            50_000: [2.5, 0, 0],
            100_000: [2.5, 2.5, 0],
            300_000: [5, 2.5, 2.5],
            500_000: [6, 5, 2.5],
            1_000_000: [6, 6, 6]
        },

        fiz: {
            300_000: [0, 0, 0],
            500_000: [0, 1, 0],
            1_000_000: [0, 3, 1],
        },

        repl: {
            300_000: [0, 0, 0],
            500_000: [0, 1, 0],
            1_000_000: [0, 3, 1],
        }
    },
    link: 'https://go.cityclub.finance/click-JQTVGVOD-HFDQBSJV?bt=25&tl=1'
}