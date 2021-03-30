export default {
    body: [
        {
            title: 'Фора-Старт',
            cost: 0,
            maintenance: 0,
            outgoing: 25,
            freePayments: 5,
            percent: 0
        },
        {
            title: 'Фора-Электронный',
            cost: 0,
            maintenance: 1700,
            outgoing: 25,
            freePayments: 20,
            percent: 1
        },
        {
            title: 'Фора-ВЭД',
            cost: 0,
            maintenance: 3500,
            outgoing: 25,
            freePayments: 20,
            percent: 2.5
        },
        {
            title: 'Фора-Все включено',
            cost: 0,
            maintenance: 7900,
            outgoing: 0,
            freePayments: 0,
            percent: 2.5
        },
    ],
    general: {
        image: 'images/banks/fora.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Форабанк',
        acquiring: 1.75
    },
    macros: {
        cash: {
            300_000: [0, 0, 0, 1],
            600_000: [2, 2, 4, 2],
            1_000_000: [6, 3, 5, 4],
            1_100_000: [5, 4, 6, 5],
            1_200_000: [5, 4, 5, 5],
            1_300_000: [6, 4, 6, 5],
            1_400_000: [6, 4, 6, 5],
            2_000_000: [8, 4, 8, 5],
        },

        fiz: {
            300_000: [0, 0, 0, 1],
            600_000: [2, 2, 4, 4],
            1_000_000: [6, 3, 5, 5],
            1_100_000: [6, 4, 6, 6],
            1_200_000: [6, 4, 6, 6],
            1_300_000: [6, 4, 6, 6],
            1_400_000: [6, 4, 6, 6],
            2_000_000: [9, 4, 8, 8],
        },

        repl: {
            300_000: [0, 0, 0, 1],
            600_000: [2, 2, 4, 4],
            1_000_000: [6, 3, 5, 5],
            1_100_000: [6, 4, 6, 6],
            1_200_000: [6, 4, 6, 6],
            1_300_000: [6, 4, 6, 6],
            1_400_000: [6, 4, 6, 6],
            2_000_000: [9, 4, 8, 8],
        },
    },
    link: 'https://www.forabank.ru/business/'
}