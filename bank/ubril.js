export default {
    body: [
        {
            title: 'Проще',
            cost: 0,
            maintenance: 0,
            outgoing: 89,
            freePayments: 0,
            percent: 1
        },
        {
            title: 'Промо Лайт',
            cost: 0,
            maintenance: 0,
            outgoing: 0,
            freePayments: 3,
            percent: .75
        },
        {
            title: 'Комфорт',
            cost: 0,
            maintenance: 1400,
            outgoing: 30,
            freePayments: 0,
            percent: 1.25
        },
        {
            title: 'Эконом',
            cost: 0,
            maintenance: 1000,
            outgoing: 30,
            freePayments: 10,
            percent: 1.75
        },
        {
            title: 'Бизнес-Класс',
            cost: 0,
            maintenance: 6590,
            outgoing: 30,
            freePayments: 100,
            percent: 2.2
        },
        {
            title: 'Премиум-класс',
            cost: 0,
            maintenance: 16_200,
            outgoing: 0,
            freePayments: 0,
            percent: 2.5
        },
    ],
    general: {
        image: 'images/banks/uri.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'УБРиР',
        acquiring: 1.69
    },
    macros: {
        cash: {
            300_000: [0, 0, 0, 1, 1, 1],
            600_000: [2, 2, 4, 2, 2, 2],
            1_000_000: [6, 3, 5, 4, 4, 4],
            1_100_000: [5, 4, 6, 5, 5, 5],
            1_200_000: [5, 4, 5, 5, 5, 5],
            1_300_000: [6, 4, 6, 5, 5, 5],
            1_400_000: [6, 4, 6, 5, 5, 5],
            2_000_000: [8, 4, 8, 5, 5, 5],
        },

        fiz: {
            300_000: [0, 0, 0, 1, 1, 1],
            600_000: [2, 2, 4, 4, 4, 4],
            1_000_000: [6, 3, 5, 5, 5, 5],
            1_100_000: [6, 4, 6, 6, 5, 5],
            1_200_000: [6, 4, 6, 6, 5, 5],
            1_300_000: [6, 4, 6, 6, 5, 5],
            1_400_000: [6, 4, 6, 6, 5, 5],
            2_000_000: [9, 4, 8, 8, 5, 5],
        },

        repl: {
            300_000: [0, 0, 0, 1, 1, 1],
            600_000: [2, 2, 4, 4, 4, 4],
            1_000_000: [6, 3, 5, 5, 5, 5],
            1_100_000: [6, 4, 6, 6, 5, 5],
            1_200_000: [6, 4, 6, 6, 5, 5],
            1_300_000: [6, 4, 6, 6, 5, 5],
            1_400_000: [6, 4, 6, 6, 5, 5],
            2_000_000: [9, 4, 8, 8, 5, 5],
        },
    },
    link: 'https://go.cityclub.finance/click-GQTVGZB4-KGCQCJ70?bt=25&tl=1'
}