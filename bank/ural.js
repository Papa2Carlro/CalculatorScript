export default {
    body: [
        {
            title: 'Начни с нуля',
            cost: 0,
            maintenance: 0,
            outgoing: 120,
            freePayments: 5,
            percent: 3
        },
        {
            title: 'Бизнес старт',
            cost: 0,
            maintenance: 1200,
            outgoing: 90,
            freePayments: 5,
            percent: 3
        },
        {
            title: 'Кассовый',
            cost: 0,
            maintenance: 2400,
            outgoing: 40,
            freePayments: 20,
            percent: 3
        },
        {
            title: 'Платежный',
            cost: 0,
            maintenance: 2800,
            outgoing: 30,
            freePayments: 100,
            percent: 3
        },
    ],
    general: {
        image: 'images/banks/ura.png',
        accounting : 'no',
        discovery: 'yes',
        bank: 'Уралсиб',
        acquiring: 2
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
        }
    },
    link: 'https://go.cityclub.finance/click-GQTVG1AT-ECAQCO9R?bt=25&tl=1&'
}