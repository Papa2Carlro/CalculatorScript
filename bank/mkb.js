export default {
    body: [
        {
            title: 'Легкий',
            cost: 0,
            maintenance: 0,
            outgoing: 99,
            freePayments: 5,
            percent: null
        },
        {
            title: 'Стартовый',
            cost: 0,
            maintenance: 1290,
            outgoing: 39,
            freePayments: 15,
            percent: 1
        },
        {
            title: 'Оптимальный',
            cost: 0,
            maintenance: 3990,
            outgoing: 19,
            freePayments: 100,
            percent: 2
        },
        {
            title: 'Бизнес',
            cost: 0,
            maintenance: 9990,
            outgoing: 9,
            freePayments: 500,
            percent: 3
        }
    ],
    general: {
        image: 'images/banks/mkb.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'МКБ',
        acquiring: 1.49
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
        },
    },
    link: 'https://mkb.ru/business/smb'
}