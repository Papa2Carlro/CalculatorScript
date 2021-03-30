export default {
    body: [
        {
            title: 'Проще простого',
            cost: 0,
            maintenance: 0,
            outgoing: 0,
            freePayments: 0,
            percent: 0
        },
        {
            title: 'Минимум',
            cost: 0,
            maintenance: 450,
            outgoing: 89,
            freePayments: 3,
            percent: 0
        },
        {
            title: 'Точный*',
            cost: 0,
            maintenance: 1450,
            outgoing: 19,
            freePayments: 0,
            percent: 0
        },
        {
            title: 'Выгодный',
            cost: 0,
            maintenance: 3450,
            outgoing: 29,
            freePayments: 50,
            percent: 0
        },
        {
            title: 'Стабильный',
            cost: 0,
            maintenance: 5450,
            outgoing: 0,
            freePayments: 0,
            percent: 0
        },
    ],
    general: {
        image: 'images/banks/mts.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'МТС',
        acquiring: 1.99
    },
    macros: {
        cash: {
            300_000: [0, 0, 0, 1, 1],
            600_000: [2, 2, 4, 2, 2],
            1_000_000: [6, 3, 5, 4, 4],
            1_100_000: [5, 4, 6, 5, 5],
            1_200_000: [5, 4, 5, 5, 5],
            1_300_000: [6, 4, 6, 5, 5],
            1_400_000: [6, 4, 6, 5, 5],
            2_000_000: [8, 4, 8, 5, 5],
        },

        fiz: {
            300_000: [0, 0, 0, 1, 1],
            600_000: [2, 2, 4, 4, 4],
            1_000_000: [6, 3, 5, 5, 5],
            1_100_000: [6, 4, 6, 6, 5],
            1_200_000: [6, 4, 6, 6, 5],
            1_400_000: [6, 4, 6, 6, 5],
            1_300_000: [6, 4, 6, 6, 5],
            2_000_000: [9, 4, 8, 8, 5],
        },

        repl: {
            300_000: [0, 0, 0, 1, 1],
            600_000: [2, 2, 4, 4, 4],
            1_000_000: [6, 3, 5, 5, 5],
            1_100_000: [6, 4, 6, 6, 5],
            1_200_000: [6, 4, 6, 6, 5],
            1_400_000: [6, 4, 6, 6, 5],
            1_300_000: [6, 4, 6, 6, 5],
            2_000_000: [9, 4, 8, 8, 5],
        },
    },
    link: 'https://go.cityclub.finance/click-EQTVGYNR-NKHQCHP0?bt=25&tl=1'
}