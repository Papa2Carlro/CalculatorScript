export default {
    body: [
        {
            title: 'Доступный старт',
            cost: 0,
            maintenance: 490,
            outgoing: 75,
            freePayments: 0,
            percent: null
        },
        {
            title: 'Ничего лишнего',
            cost: 0,
            maintenance: 990,
            outgoing: 25,
            freePayments: 0,
            percent: null
        },
        {
            title: 'Серьезный подход',
            cost: 0,
            maintenance: 1990,
            outgoing: 25,
            freePayments: 30,
            percent: null
        },
        {
            title: 'Широкие возможности',
            cost: 0,
            maintenance: 5990,
            outgoing: 25,
            freePayments: 100,
            percent: null
        },
        {
            title: 'Максимальные возможности',
            cost: 0,
            maintenance: 19900,
            outgoing: 19,
            freePayments: 1000,
            percent: null
        }
    ],
    general: {
        image: 'images/banks/ros.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Росбанк',
        acquiring: 1.4
    },
    macros: {
        cash: {
            300_000: [0, 0, 0, 1, 1],
            600_000: [2, 2, 4, 3, 3],
            1_000_000: [6, 3, 5, 4, 4],
            1_100_000: [5, 4, 6, 5, 5],
            1_200_000: [5, 4, 5, 5, 5],
            1_300_000: [6, 4, 6, 5, 5],
            1_400_000: [6, 4, 6, 5, 5],
            2_000_000: [8, 4, 8, 9, 9],
        },

        fiz: {
            300_000: [0, 0, 0, 1, 1],
            600_000: [2, 2, 4, 3, 3],
            1_000_000: [6, 3, 5, 4, 4],
            1_100_000: [6, 4, 6, 5, 5],
            1_200_000: [6, 4, 6, 5, 5],
            1_300_000: [6, 4, 6, 5, 5],
            1_400_000: [6, 4, 6, 5, 5],
            2_000_000: [9, 4, 8, 9, 9],
        },

        repl: {
            300_000: [0, 0, 0, 1, 1],
            600_000: [2, 2, 4, 3, 3],
            1_000_000: [6, 3, 5, 4, 4],
            1_100_000: [6, 4, 6, 5, 5],
            1_200_000: [6, 4, 6, 5, 5],
            1_300_000: [6, 4, 6, 5, 5],
            1_400_000: [6, 4, 6, 5, 5],
            2_000_000: [9, 4, 8, 9, 9],
        }
    },
    link: 'https://go.cityclub.finance/click-GQTVG0BB-NLJQCNAY?bt=25&tl=1'
}