export default {
    body: [
        {
            title: 'Просто 1%',
            cost: 0,
            maintenance: 0,
            outgoing: 0,
            freePayments: 0,
            percent: null
        },
        {
            title: 'Лучший старт',
            cost: 0,
            maintenance: 490,
            outgoing: 50,
            freePayments: 3,
            percent: null
        },
        {
            title: 'Удачный выбор',
            cost: 0,
            maintenance: 1690,
            outgoing: 25,
            freePayments: 10,
            percent: null
        },
        {
            title: 'Всё, что надо',
            cost: 0,
            maintenance: 9900,
            outgoing: 0,
            freePayments: 0,
            percent: null
        }
    ],
    general: {
        image: 'images/banks/alf.png',
        accounting : 'yes',
        discovery: 'yes',
        bank: 'Альфа-Банк',
        acquiring: 1
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
        }
    },
    link: 'https://go.cityclub.finance/click-FQTVGYNV-KIGQCHPM?bt=25&tl=1'
}