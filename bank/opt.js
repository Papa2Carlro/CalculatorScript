export default {
    body: [
        {
            title: 'Старт*',
            cost: 0,
            maintenance: 500,
            outgoing: 100,
            freePayments: 3,
            percent: null
        },
        {
            title: ' 0,99% за всё**',
            cost: 0,
            maintenance: 0,
            outgoing: 0,
            freePayments: 0,
            percent: null
        },
        {
            title: 'Базовый',
            cost: 0,
            maintenance: 2200,
            outgoing: 0,
            freePayments: 12,
            percent: null
        },
        {
            title: 'Платежный',
            cost: 0,
            maintenance: 3000,
            outgoing: 0,
            freePayments: 20,
            percent: null
        },
        {
            title: 'Торговый',
            cost: 0,
            maintenance: 3300,
            outgoing: 0,
            freePayments: 40,
            percent: null
        },
        {
            title: 'Максимальный',
            cost: 0,
            maintenance: 5000,
            outgoing: 100,
            freePayments: 10,
            percent: null
        },
        {
            title: 'ВЭД',
            cost: 0,
            maintenance: 4500,
            outgoing: 0,
            freePayments: 120,
            percent: null
        },
        {
            title: ' Все включено',
            cost: 0,
            maintenance: 8000,
            outgoing: 0,
            freePayments: 0,
            percent: null
        },
    ],
    general: {
        image: 'images/banks/opt.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'ОТП',
        acquiring: 0
    },
    macros: {
        cash: {
            300_000: [0, 0, 0, 1, 1, 1, 1],
            600_000: [2, 2, 4, 3, 3, 3, 3],
            1_000_000: [6, 3, 5, 4, 4, 4, 4],
            1_100_000: [5, 4, 6, 5, 5, 5, 5],
            1_200_000: [5, 4, 5, 5, 5, 5, 5],
            1_300_000: [6, 4, 6, 5, 5, 5, 5],
            1_400_000: [6, 4, 6, 5, 5, 5, 5],
            2_000_000: [8, 4, 8, 9, 9, 9, 9],
        },

        fiz: {
            300_000: [0, 0, 0, 1, 1, 1, 1],
            600_000: [2, 2, 4, 3, 3, 3, 3],
            1_000_000: [6, 3, 5, 4, 4, 4, 4],
            1_100_000: [6, 4, 6, 5, 5, 5, 5],
            1_200_000: [6, 4, 6, 5, 5, 5, 5],
            1_300_000: [6, 4, 6, 5, 5, 5, 5],
            1_400_000: [6, 4, 6, 5, 5, 5, 5],
            2_000_000: [9, 4, 8, 9, 9, 9, 9],
        },

        repl: {
            300_000: [0, 0, 0, 1, 1, 1, 1],
            600_000: [2, 2, 4, 3, 3, 3, 3],
            1_000_000: [6, 3, 5, 4, 4, 4, 4],
            1_100_000: [6, 4, 6, 5, 5, 5, 5],
            1_200_000: [6, 4, 6, 5, 5, 5, 5],
            1_300_000: [6, 4, 6, 5, 5, 5, 5],
            1_400_000: [6, 4, 6, 5, 5, 5, 5],
            2_000_000: [9, 4, 8, 9, 9, 9, 9],
        },
    },
    link: 'https://www.otpbank.ru/business/sme/'
}