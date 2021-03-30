export default {
    body: [
        {
            title: 'Просто|Торговый',
            cost: 0,
            maintenance: 1990,
            outgoing: 0,
            freePayments: 0,
            percent: 0
        },
        {
            title: 'Просто|Хороший',
            cost: 0,
            maintenance: 490,
            outgoing: 19,
            freePayments: 0,
            percent: 0
        },
        {
            title: 'Просто|Экономный',
            cost: 0,
            maintenance: 0,
            outgoing: 0,
            freePayments: 0,
            percent: 0
        },
    ],
    general: {
        image: 'images/banks/prosto.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Просто',
        acquiring: 0
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
        },
    },
    link: 'https://prostobank.online/'
}