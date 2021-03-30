export default {
    body: [
        {
            title: 'Лёгкий старт',
            cost: 0,
            maintenance: 0,
            outgoing: 199,
            freePayments: 3,
            percent: null
        },
        {
            title: 'Набирая обороты',
            cost: 0,
            maintenance: 990,
            outgoing: 100,
            freePayments: 10,
            percent: null
        },
        {
            title: 'Полным ходом',
            cost: 0,
            maintenance: 3490,
            outgoing: 100,
            freePayments: 50,
            percent: null
        }
    ],
    general: {
        image: 'images/banks/sbe.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Сбер',
        acquiring: 1.6
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
    link: 'https://pxl.leads.su/click/7e87118dd123a8355fd0b09bdcbcfa3a'
}