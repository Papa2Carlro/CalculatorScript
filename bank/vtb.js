export default {
    body: [
        {
            title: 'На старте',
            cost: 0,
            maintenance: 0,
            outgoing: 100,
            freePayments: 5,
            percent: null
        },
        {
            title: 'Самое важное',
            cost: 0,
            maintenance: 1200,
            outgoing: 50,
            freePayments: 30,
            percent: null
        },
        {
            title: 'Все включено',
            cost: 0,
            maintenance: 1900,
            outgoing: 50,
            freePayments: 60,
            percent: null
        },
        {
            title: 'Большие обороты',
            cost: 0,
            maintenance: 7000,
            outgoing: 32,
            freePayments: 150,
            percent: null
        }
    ],
    general: {
        image: 'images/banks/vtb.png',
        accounting : 'no',
        discovery: 'no',
        bank: 'ВТБ',
        acquiring: 1.6
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
    link: 'https://go.cityclub.finance/click-DQTVGZWA-KHEQCL92?bt=25&tl=1'
}