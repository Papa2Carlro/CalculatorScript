export default {
    body: [
        {
            title: 'Старт',
            cost: 0,
            maintenance: 190,
            outgoing: 50,
            freePayments: 0,
            percent: 0
        },
        {
            title: 'Бизнес старт',
            cost: 0,
            maintenance: 490,
            outgoing: 29,
            freePayments: 3,
            percent: 0
        },
        {
            title: 'Успех',
            cost: 0,
            maintenance: 1490,
            outgoing: 19,
            freePayments: 5,
            percent: 0
        },
        {
            title: 'Доходный',
            cost: 0,
            maintenance: 2990,
            outgoing: 15,
            freePayments: 10,
            percent: 0
        },
    ],
    general: {
        image: 'images/banks/sov.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Совком',
        acquiring: 2
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
    link: 'https://go.cityclub.finance/click-GQTVG1AT-ECAQCO9R?bt=25&tl=1&'
}