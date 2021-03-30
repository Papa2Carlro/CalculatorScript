export default {
    body: [
        {
            title: 'Бизнес оптимальный',
            cost: 0,
            maintenance: 2000,
            outgoing: 30,
            freePayments: 0,
            percent: 0
        },
        {
            title: 'Бизнес без границ',
            cost: 0,
            maintenance: 5500,
            outgoing: 0,
            freePayments: 0,
            percent: 0
        },
        {
            title: 'ВЭД оптимальный',
            cost: 0,
            maintenance: 6000,
            outgoing: 0,
            freePayments: 0,
            percent: 0
        },
    ],
    general: {
        image: 'images/banks/uni.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Юникредит',
        acquiring: 0
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
        },
    },
    link: 'http://goto.cpahub.ru/aff_c?offer_id=1055&aff_id=2341'
}