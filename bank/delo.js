export default {
    body: [
        {
            title: 'ДелоЛайт',
            cost: 0,
            maintenance: 690,
            outgoing: 39,
            freePayments: 5,
            percent: 1.5
        },
        {
            title: 'ДелоПро',
            cost: 0,
            maintenance: 2590,
            outgoing: 29,
            freePayments: 50,
            percent: 2.5
        },
        {
            title: 'ДелоУльтра',
            cost: 0,
            maintenance: 7990,
            outgoing: 19,
            freePayments: 500,
            percent: 3.5
        }
    ],
    general: {
        image: 'images/banks/delo.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Дело',
        acquiring: 2
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
    link: 'https://go.cityclub.finance/click-JQTVGYSY-KGCQCIFA?bt=25&tl=1'
}