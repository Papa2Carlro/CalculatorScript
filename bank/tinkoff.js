export default {
    body: [
        {
            title: 'Простой',
            cost: 0,
            maintenance: 490,
            outgoing: 49,
            freePayments: 0,
            percent: .5
        },
        {
            title: 'Продвинутый',
            cost: 0,
            maintenance: 1990,
            outgoing: 29,
            freePayments: 0,
            percent: 1
        },
        {
            title: 'Профессиональный',
            cost: 0,
            maintenance: 4990,
            outgoing: 19,
            freePayments: 0,
            percent: 2
        }
    ],
    general: {
        image: 'images/banks/tin.png',
        accounting : 'yes',
        discovery: 'yes',
        bank: 'Тинькофф',
        acquiring: 1.79
    },
    macros: {
        cash: {
            400_000: [1.5, 1, 1],
            800_000: [5, 5, 1],
            1_000_000: [5, 5, 5],
            1_999_999: [15, 5, 5],
            2_000_000: [15, 15, 15]
        },

        fiz: {
            400_000: [1.5, 1, 1],
            800_000: [5, 5, 1],
            1_000_000: [5, 5, 5],
            1_999_999: [15, 5, 5],
            2_000_000: [15, 15, 15]
        },

        repl: {
            400_000: [1.5, 1, 1],
            800_000: [5, 5, 1],
            1_000_000: [5, 5, 5],
            1_999_999: [15, 5, 5],
            2_000_000: [15, 15, 15]
        },
    },
    link: 'https://go.cityclub.finance/click-EQTVGXLI-KGCQCEH4?bt=25&tl=1'
}