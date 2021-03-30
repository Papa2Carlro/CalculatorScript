export default {
    body: [
        {
            title: 'Максимум',
            cost: 0,
            maintenance: 990,
            outgoing: 25,
            freePayments: 0,
            percent: null
        },
        {
            title: 'Оптимум',
            cost: 0,
            maintenance: 2900,
            outgoing: 25,
            freePayments: 60,
            percent: null
        },
        {
            title: 'Старт',
            cost: 0,
            maintenance: 7500,
            outgoing: 25,
            freePayments: 300,
            percent: null
        }
    ],
    general: {
        image: 'images/banks/raf.png',
        accounting : 'yes',
        discovery: 'yes',
        bank: 'Райффайзенбанк',
        acquiring: 1.89
    },
    macros: {
        cash: {
            300_000: [0, 0, 0],
            600_000: [2, 2, 4],
            1_000_000: [6, 3, 5],
            1_100_000: [5, 4, 6],
            1_200_000: [5, 4, 5],
            1_300_000: [6, 4, 6],
            1_400_000: [6, 4, 6],
            2_000_000: [8, 4, 8],
        },

        fiz: {
            300_000: [0, 0, 0],
            600_000: [2, 2, 4],
            1_000_000: [6, 3, 5],
            1_100_000: [6, 4, 6],
            1_200_000: [6, 4, 6],
            1_300_000: [6, 4, 6],
            1_400_000: [6, 4, 6],
            2_000_000: [9, 4, 8],
        },

        repl: {
            300_000: [0, 0, 0],
            600_000: [2, 2, 4],
            1_000_000: [6, 3, 5],
            1_100_000: [6, 4, 6],
            1_200_000: [6, 4, 6],
            1_300_000: [6, 4, 6],
            1_400_000: [6, 4, 6],
            2_000_000: [9, 4, 8],
        }
    },
    link: 'https://go.cityclub.finance/click-AQTVG0K5-RMIQCNYH?bt=25&tl=1'
}