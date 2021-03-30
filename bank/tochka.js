export default {
    body: [
        {
            title: 'Ноль',
            cost: 0,
            maintenance: 0,
            outgoing: 0,
            freePayments: 0,
            percent: null
        },
        {
            title: 'Начало',
            cost: 0,
            maintenance: 700,
            outgoing: 0,
            freePayments: 0,
            percent: 1.75
        },
        {
            title: 'Развитие',
            cost: 0,
            maintenance: 3500,
            outgoing: 0,
            freePayments: 0,
            percent: 3.75
        }
    ],
    general: {
        image: 'images/banks/toc.png',
        accounting : 'yes',
        discovery: 'yes',
        bank: 'Точка',
        acquiring: 1.4
    },
    macros: {
        cash: {
            300_000: [6, 0, 0],
            600_000: [2, 2, 4],
            1_000_000: [0, 3, 5],
            1_100_000: [0, 4, 6],
            1_200_000: [0, 4, 6],
            1_300_000: [0, 4, 6],
            1_400_000: [0, 4, 6],
            2_000_000: [0, 6, 8],
        },

        fiz: {
            400_000: [1.5, 1, 1],
            800_000: [5, 5, 1],
            1_000_000: [5, 5, 5],
            1_999_999: [15, 5, 5],
            2_000_000: [15, 15, 15],
        },

        repl: {
            300_000: [6, 0, 0],
            600_000: [2, 2, 4],
            1_000_000: [0, 3, 5],
            1_100_000: [0, 4, 6],
            1_200_000: [0, 4, 6],
            1_300_000: [0, 4, 6],
            1_400_000: [0, 4, 6],
            2_000_000: [0, 6, 8],
        }
    },
    link: 'https://go.cityclub.finance/click-AQTVGX2H-HFDQCGMO?bt=25&tl=1'
}