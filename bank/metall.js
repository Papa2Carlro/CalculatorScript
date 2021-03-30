export default {
    body: [
        {
            title: 'Стартовый',
            cost: 0,
            maintenance: 490,
            outgoing: 90,
            freePayments: 0,
            percent: 0
        },
        {
            title: 'Оптимальный',
            cost: 0,
            maintenance: 1500,
            outgoing: 20,
            freePayments: 0,
            percent: 1
        },
        {
            title: 'Корпоративный',
            cost: 0,
            maintenance: 3000,
            outgoing: 0,
            freePayments: 0,
            percent: 2.5
        },
    ],
    general: {
        image: 'images/banks/metal.svg',
        accounting : 'no',
        discovery: 'no',
        bank: 'Металлинвест',
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
    link: 'https://metallinvestbank.ru/commerce/'
}