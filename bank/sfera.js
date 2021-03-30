export default {
    body: [
        {
            title: 'S',
            cost: 0,
            maintenance: 99,
            outgoing: 99,
            freePayments: 0,
            percent: null
        },
        {
            title: 'M',
            cost: 0,
            maintenance: 990,
            outgoing: 25,
            freePayments: 10,
            percent: null
        },
        {
            title: 'L',
            cost: 0,
            maintenance: 4990,
            outgoing: 0,
            freePayments: 0,
            percent: null
        }
    ],
    general: {
        image: 'images/banks/sfe.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Сфера',
        acquiring: 1
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
    link: 'https://go.cityclub.finance/click-IQTVGYOT-RMIQCIG1?bt=25&tl=1'
}