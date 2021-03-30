export default {
    body: [
        {
            title: 'Первый шаг',
            cost: 0,
            maintenance: 0,
            outgoing: 100,
            freePayments: 3,
            percent: null
        },
        {
            title: 'Быстрый рост',
            cost: 0,
            maintenance: 490,
            outgoing: 100,
            freePayments: 5,
            percent: null
        },
        {
            title: 'Свой бизнес',
            cost: 0,
            maintenance: 1290,
            outgoing: 25,
            freePayments: 15,
            percent: null
        },
        {
            title: 'Весь мир',
            cost: 0,
            maintenance: 1990,
            outgoing: 25,
            freePayments: 15,
            percent: null
        },
        {
            title: 'Большие планы',
            cost: 0,
            maintenance: 2700,
            outgoing: 17,
            freePayments: 30,
            percent: null
        }
    ],
    general: {
        image: 'images/banks/otk.png',
        accounting : 'no',
        discovery: 'no',
        bank: 'Открытие',
        acquiring: 1.49
    },
    macros: {
        cash: {
            300_000: [0, 0, 0, 1, 1],
            600_000: [2, 2, 4, 3, 3],
            1_000_000: [6, 3, 5, 4, 4],
            1_100_000: [5, 4, 6, 5, 5],
            1_200_000: [5, 4, 5, 5, 5],
            1_300_000: [6, 4, 6, 5, 5],
            1_400_000: [6, 4, 6, 5, 5],
            2_000_000: [8, 4, 8, 9, 9],
        },

        fiz: {
            300_000: [0, 0, 0, 1, 1],
            600_000: [2, 2, 4, 3, 3],
            1_000_000: [6, 3, 5, 4, 4],
            1_100_000: [6, 4, 6, 5, 5],
            1_200_000: [6, 4, 6, 5, 5],
            1_300_000: [6, 4, 6, 5, 5],
            1_400_000: [6, 4, 6, 5, 5],
            2_000_000: [9, 4, 8, 9, 9],
        },

        repl: {
            300_000: [0, 0, 0, 1, 1],
            600_000: [2, 2, 4, 3, 3],
            1_000_000: [6, 3, 5, 4, 4],
            1_100_000: [6, 4, 6, 5, 5],
            1_200_000: [6, 4, 6, 5, 5],
            1_300_000: [6, 4, 6, 5, 5],
            1_400_000: [6, 4, 6, 5, 5],
            2_000_000: [9, 4, 8, 9, 9],
        },
    },
    link: 'https://go.cityclub.finance/click-IQTVGY6Z-KIGQCJLC?bt=25&tl=1'
}