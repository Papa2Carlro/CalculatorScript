export default {
    body: [
        {
            title: 'Начальный',
            cost: 0,
            maintenance: 0,
            outgoing: 75,
            freePayments: 0,
            percent: 0
        },
        {
            title: 'Оптимальный',
            cost: 0,
            maintenance: 890,
            outgoing: 55,
            freePayments: 30,
            percent: 0
        },
        {
            title: 'Профессиональный',
            cost: 0,
            maintenance: 2990,
            outgoing: 35,
            freePayments: 50,
            percent: 0
        },
        {
            title: 'Премиальный',
            cost: 0,
            maintenance: 6990,
            outgoing: 0,
            freePayments: 0,
            percent: 0
        },
    ],
    general: {
        image: 'images/banks/for.png',
        accounting : 'no',
        discovery: 'no',
        bank: 'Форбанк',
        acquiring: 1.15
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
    link: 'https://go.cityclub.finance/click-IQTVGZCL-NKHQCJ9M?bt=25&tl=1'
}