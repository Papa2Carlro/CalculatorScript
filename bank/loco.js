export default {
    body: [
        {
            title: 'Свой бизнес',
            cost: 0,
            maintenance: 0,
            outgoing: 89,
            freePayments: 0,
            percent: null
        },
        {
            title: 'Новый старт',
            cost: 0,
            maintenance: 490,
            outgoing: 59,
            freePayments: 0,
            percent: null
        },
        {
            title: 'Оптима',
            cost: 0,
            maintenance: 990,
            outgoing: 29,
            freePayments: 0,
            percent: null
        },
        {
            title: 'Безлимит',
            cost: 0,
            maintenance: 4990,
            outgoing: 19,
            freePayments: 50,
            percent: null
        }
    ],
    general: {
        image: 'images/banks/lok.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Локо-Банк',
        acquiring: 1.15
    },
    macros: {
        cash: {
            300_000: [0, 0, 0, 1],
            600_000: [2, 2, 4, 3],
            1_000_000: [6, 3, 5, 4],
            1_100_000: [5, 4, 6, 5],
            1_200_000: [5, 4, 5, 5],
            1_300_000: [6, 4, 6, 5],
            1_400_000: [6, 4, 6, 5],
            2_000_000: [8, 4, 8, 9],
        },

        fiz: {
            300_000: [0, 0, 0, 1],
            600_000: [2, 2, 4, 3],
            1_000_000: [6, 3, 5, 4],
            1_100_000: [6, 4, 6, 5],
            1_200_000: [6, 4, 6, 5],
            1_300_000: [6, 4, 6, 5],
            1_400_000: [6, 4, 6, 5],
            2_000_000: [9, 4, 8, 9],
        },

        repl: {
            300_000: [0, 0, 0, 1],
            600_000: [2, 2, 4, 3],
            1_000_000: [6, 3, 5, 4],
            1_100_000: [6, 4, 6, 5],
            1_200_000: [6, 4, 6, 5],
            1_300_000: [6, 4, 6, 5],
            1_400_000: [6, 4, 6, 5],
            2_000_000: [9, 4, 8, 9],
        }
    },
    link: 'https://go.cityclub.finance/click-DQTVGZWA-KHEQCL92?bt=25&tl=1'
}