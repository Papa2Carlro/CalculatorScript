export default {
    body: [
        {
            title: 'Лайт',
            cost: 1250,
            maintenance: 0,
            outgoing: 0,
            freePayments: 0,
            percent: 0
        },
        {
            title: 'Бизнес',
            cost: 1250,
            maintenance: 3500,
            outgoing: 0,
            freePayments: 0,
            percent: 6
        },
    ],
    general: {
        image: 'images/banks/sauber.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Заубер',
        acquiring: 1
    },
    macros: {
        cash: {
            300_000: [0, 0],
            600_000: [2, 2],
            1_000_000: [6, 3],
            1_100_000: [5, 4],
            1_200_000: [5, 4],
            1_300_000: [6, 4],
            1_400_000: [6, 4],
            2_000_000: [8, 4],
        },

        fiz: {
            300_000: [0, 0],
            600_000: [2, 2],
            1_000_000: [6, 3],
            1_100_000: [6, 4],
            1_200_000: [6, 4],
            1_300_000: [6, 4],
            1_400_000: [6, 4],
            2_000_000: [9, 4],
        },

        repl: {
            300_000: [0, 0],
            600_000: [2, 2],
            1_000_000: [6, 3],
            1_100_000: [6, 4],
            1_200_000: [6, 4],
            1_300_000: [6, 4],
            1_400_000: [6, 4],
            2_000_000: [9, 4],
        },
    },
    link: 'https://www.sauberbank.com/'
}