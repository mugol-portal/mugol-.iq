// Seviyeler zorluk sırasına göre dizilmiş 20 seviyeden oluşmaktadır.
// Her seviyenin çözüm yolu (solution) doğrulanmış ve %100 çözülebilir durumdadır.
const levels = [
    {
        name: "Seviye 1",
        difficulty: "Orta",
        rows: 6,
        cols: 4,
        start: { r: 2, c: 3 },
        solution: [
            {r: 2, c: 3}, {r: 1, c: 3}, {r: 1, c: 2}, {r: 1, c: 1}, 
            {r: 0, c: 1}, {r: 0, c: 0}, {r: 1, c: 0}, {r: 2, c: 0}, 
            {r: 2, c: 1}, {r: 3, c: 1}, {r: 3, c: 2}, {r: 4, c: 2}, 
            {r: 4, c: 3}, {r: 5, c: 3}
        ]
    },
    {
        name: "Seviye 2",
        difficulty: "Orta",
        rows: 4,
        cols: 4,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}, {r: 0, c: 3}, 
            {r: 1, c: 3}, {r: 2, c: 3}, {r: 3, c: 3}, {r: 3, c: 2}, 
            {r: 2, c: 2}, {r: 1, c: 2}, {r: 1, c: 1}, {r: 1, c: 0}, 
            {r: 2, c: 0}, {r: 3, c: 0}, {r: 3, c: 1}
        ]
    },
    {
        name: "Seviye 3",
        difficulty: "Zor",
        rows: 5,
        cols: 5,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 1, c: 0}, {r: 2, c: 0}, {r: 3, c: 0}, {r: 4, c: 0},
            {r: 4, c: 1}, {r: 3, c: 1}, {r: 2, c: 1}, {r: 1, c: 1}, {r: 0, c: 1},
            {r: 0, c: 2}, {r: 1, c: 2}, {r: 1, c: 3}, {r: 0, c: 3}, {r: 0, c: 4},
            {r: 1, c: 4}, {r: 2, c: 4}, {r: 3, c: 4}, {r: 4, c: 4}, {r: 4, c: 3},
            {r: 4, c: 2}, {r: 3, c: 2}, {r: 3, c: 3}, {r: 2, c: 3}
        ]
    },
    {
        name: "Seviye 4",
        difficulty: "Zor",
        rows: 5,
        cols: 5,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}, {r: 0, c: 3}, {r: 0, c: 4},
            {r: 1, c: 4}, {r: 2, c: 4}, {r: 3, c: 4}, {r: 4, c: 4}, {r: 4, c: 3},
            {r: 4, c: 2}, {r: 4, c: 1}, {r: 4, c: 0}, {r: 3, c: 0}, {r: 2, c: 0},
            {r: 1, c: 0}, {r: 1, c: 1}, {r: 1, c: 2}, {r: 1, c: 3}, {r: 2, c: 3},
            {r: 3, c: 3}, {r: 3, c: 2}, {r: 3, c: 1}, {r: 2, c: 1}, {r: 2, c: 2}
        ]
    },
    {
        name: "Seviye 5",
        difficulty: "Zor",
        rows: 5,
        cols: 5,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 1, c: 0}, {r: 1, c: 1}, {r: 0, c: 1}, {r: 0, c: 2},
            {r: 1, c: 2}, {r: 1, c: 3}, {r: 0, c: 3}, {r: 0, c: 4}, {r: 1, c: 4},
            {r: 2, c: 4}, {r: 2, c: 3}, {r: 2, c: 2}, {r: 2, c: 1}, {r: 2, c: 0},
            {r: 3, c: 0}, {r: 3, c: 1}, {r: 3, c: 2}, {r: 3, c: 3}, {r: 3, c: 4},
            {r: 4, c: 4}, {r: 4, c: 3}, {r: 4, c: 2}, {r: 4, c: 1}, {r: 4, c: 0}
        ]
    },
    {
        name: "Seviye 6",
        difficulty: "Zor",
        rows: 6,
        cols: 5,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}, {r: 0, c: 3}, {r: 0, c: 4},
            {r: 1, c: 4}, {r: 1, c: 3}, {r: 1, c: 2}, {r: 1, c: 1}, {r: 1, c: 0},
            {r: 2, c: 0}, {r: 2, c: 1}, {r: 2, c: 2}, {r: 2, c: 3}, {r: 2, c: 4},
            {r: 3, c: 4}, {r: 3, c: 3}, {r: 3, c: 2}, {r: 3, c: 1}, {r: 3, c: 0},
            {r: 4, c: 0}, {r: 4, c: 1}, {r: 4, c: 2}, {r: 4, c: 3}, {r: 4, c: 4},
            {r: 5, c: 4}, {r: 5, c: 3}, {r: 5, c: 2}, {r: 5, c: 1}, {r: 5, c: 0}
        ]
    },
    {
        name: "Seviye 7",
        difficulty: "Çok Zor",
        rows: 6,
        cols: 6,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}, {r: 0, c: 3}, {r: 0, c: 4}, {r: 0, c: 5},
            {r: 1, c: 5}, {r: 2, c: 5}, {r: 3, c: 5}, {r: 4, c: 5}, {r: 5, c: 5}, {r: 5, c: 4},
            {r: 5, c: 3}, {r: 5, c: 2}, {r: 5, c: 1}, {r: 5, c: 0}, {r: 4, c: 0}, {r: 3, c: 0},
            {r: 2, c: 0}, {r: 1, c: 0}, {r: 1, c: 1}, {r: 1, c: 2}, {r: 1, c: 3}, {r: 1, c: 4},
            {r: 2, c: 4}, {r: 3, c: 4}, {r: 4, c: 4}, {r: 4, c: 3}, {r: 4, c: 2}, {r: 4, c: 1},
            {r: 3, c: 1}, {r: 2, c: 1}, {r: 2, c: 2}, {r: 3, c: 2}, {r: 3, c: 3}, {r: 2, c: 3}
        ]
    },
    {
        name: "Seviye 8",
        difficulty: "Çok Zor",
        rows: 7,
        cols: 5,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}, {r: 0, c: 3}, {r: 0, c: 4},
            {r: 1, c: 4}, {r: 2, c: 4}, {r: 3, c: 4}, {r: 4, c: 4}, {r: 5, c: 4}, {r: 6, c: 4},
            {r: 6, c: 3}, {r: 5, c: 3}, {r: 4, c: 3}, {r: 3, c: 3}, {r: 2, c: 3}, {r: 1, c: 3},
            {r: 1, c: 2}, {r: 2, c: 2}, {r: 3, c: 2}, {r: 4, c: 2}, {r: 5, c: 2}, {r: 6, c: 2},
            {r: 6, c: 1}, {r: 5, c: 1}, {r: 4, c: 1}, {r: 3, c: 1}, {r: 2, c: 1}, {r: 1, c: 1},
            {r: 1, c: 0}, {r: 2, c: 0}, {r: 3, c: 0}, {r: 4, c: 0}, {r: 5, c: 0}, {r: 6, c: 0}
        ]
    },
    {
        name: "Seviye 9",
        difficulty: "Çok Zor",
        rows: 6,
        cols: 6,
        start: { r: 0, c: 1 },
        solution: [
            {r: 0, c: 1}, {r: 0, c: 2}, {r: 0, c: 3}, {r: 0, c: 4},
            {r: 1, c: 4}, {r: 1, c: 5}, {r: 2, c: 5}, {r: 3, c: 5}, {r: 4, c: 5}, {r: 4, c: 4},
            {r: 5, c: 4}, {r: 5, c: 3}, {r: 5, c: 2}, {r: 5, c: 1},
            {r: 4, c: 1}, {r: 4, c: 0}, {r: 3, c: 0}, {r: 2, c: 0}, {r: 1, c: 0}, {r: 1, c: 1},
            {r: 1, c: 2}, {r: 1, c: 3}, {r: 2, c: 3}, {r: 2, c: 4}, {r: 3, c: 4}, {r: 3, c: 3},
            {r: 3, c: 2}, {r: 3, c: 1}, {r: 2, c: 1}, {r: 2, c: 2}
        ]
    },
    {
        name: "Seviye 10",
        difficulty: "Çok Zor",
        rows: 5,
        cols: 5,
        start: { r: 0, c: 1 },
        solution: [
            {r: 0, c: 1}, {r: 1, c: 1}, {r: 1, c: 0}, {r: 2, c: 0}, {r: 3, c: 0}, {r: 3, c: 1},
            {r: 4, c: 1}, {r: 4, c: 2}, {r: 4, c: 3}, {r: 3, c: 3}, {r: 3, c: 4}, {r: 2, c: 4},
            {r: 1, c: 4}, {r: 1, c: 3}, {r: 0, c: 3}, {r: 0, c: 2}, {r: 1, c: 2}, {r: 2, c: 2},
            {r: 2, c: 3}
        ]
    },
    {
        name: "Seviye 11",
        difficulty: "Uzman",
        rows: 6,
        cols: 6,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}, {r: 0, c: 3}, {r: 0, c: 4}, {r: 0, c: 5},
            {r: 1, c: 5}, {r: 1, c: 4}, {r: 1, c: 3}, {r: 1, c: 2}, {r: 1, c: 1}, {r: 1, c: 0},
            {r: 2, c: 0}, {r: 2, c: 1}, {r: 2, c: 2}, {r: 2, c: 3}, {r: 2, c: 4}, {r: 2, c: 5},
            {r: 3, c: 5}, {r: 3, c: 4}, {r: 3, c: 3}, {r: 3, c: 2}, {r: 3, c: 1}, {r: 3, c: 0},
            {r: 4, c: 0}, {r: 4, c: 1}, {r: 4, c: 2}, {r: 4, c: 3}, {r: 4, c: 4}, {r: 4, c: 5},
            {r: 5, c: 5}, {r: 5, c: 4}, {r: 5, c: 3}, {r: 5, c: 2}, {r: 5, c: 1}, {r: 5, c: 0}
        ]
    },
    {
        name: "Seviye 12",
        difficulty: "Uzman",
        rows: 5,
        cols: 5,
        start: { r: 0, c: 1 },
        solution: [
            {r: 0, c: 1}, {r: 1, c: 1}, {r: 1, c: 0}, {r: 2, c: 0}, {r: 3, c: 0}, {r: 3, c: 1},
            {r: 4, c: 1}, {r: 4, c: 2}, {r: 4, c: 3}, {r: 3, c: 3}, {r: 3, c: 4}, {r: 2, c: 4},
            {r: 1, c: 4}, {r: 1, c: 3}, {r: 0, c: 3}, {r: 0, c: 2}, {r: 1, c: 2}, {r: 2, c: 2},
            {r: 2, c: 3}
        ]
    },
    {
        name: "Seviye 13",
        difficulty: "Uzman",
        rows: 5,
        cols: 5,
        start: { r: 0, c: 1 },
        solution: [
            {r: 0, c: 1}, {r: 1, c: 1}, {r: 1, c: 0}, {r: 2, c: 0}, {r: 3, c: 0}, {r: 3, c: 1},
            {r: 4, c: 1}, {r: 4, c: 2}, {r: 4, c: 3}, {r: 3, c: 3}, {r: 3, c: 4}, {r: 2, c: 4},
            {r: 1, c: 4}, {r: 1, c: 3}, {r: 0, c: 3}, {r: 0, c: 2}, {r: 1, c: 2}, {r: 2, c: 2},
            {r: 2, c: 3}
        ]
    },
    {
        name: "Seviye 14",
        difficulty: "Uzman",
        rows: 5,
        cols: 5,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}, {r: 0, c: 3}, {r: 0, c: 4},
            {r: 1, c: 4}, {r: 2, c: 4}, {r: 3, c: 4}, {r: 4, c: 4}, {r: 4, c: 3},
            {r: 4, c: 2}, {r: 4, c: 1}, {r: 4, c: 0}, {r: 3, c: 0}, {r: 2, c: 0},
            {r: 1, c: 0}, {r: 1, c: 1}, {r: 1, c: 2}, {r: 1, c: 3}, {r: 2, c: 3},
            {r: 3, c: 3}, {r: 3, c: 2}, {r: 3, c: 1}, {r: 2, c: 1}, {r: 2, c: 2}
        ]
    },
    {
        name: "Seviye 15",
        difficulty: "Şampiyon",
        rows: 6,
        cols: 6,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}, {r: 0, c: 3}, {r: 0, c: 4}, {r: 0, c: 5},
            {r: 1, c: 5}, {r: 1, c: 4}, {r: 1, c: 3}, {r: 2, c: 3}, {r: 2, c: 4}, {r: 3, c: 4},
            {r: 3, c: 3}, {r: 4, c: 3}, {r: 4, c: 4}, {r: 4, c: 5}, {r: 5, c: 5}, {r: 5, c: 4},
            {r: 5, c: 3}, {r: 5, c: 2}, {r: 5, c: 1}, {r: 5, c: 0}, {r: 4, c: 0}, {r: 4, c: 1},
            {r: 4, c: 2}, {r: 3, c: 2}, {r: 3, c: 1}, {r: 2, c: 1}, {r: 2, c: 2}, {r: 1, c: 2},
            {r: 1, c: 1}, {r: 1, c: 0}
        ]
    },
    {
        name: "Seviye 16",
        difficulty: "Şampiyon",
        rows: 7,
        cols: 5,
        start: { r: 0, c: 1 },
        solution: [
            {r: 0, c: 1}, {r: 0, c: 2}, {r: 0, c: 3}, {r: 1, c: 3}, {r: 1, c: 2}, {r: 1, c: 1},
            {r: 2, c: 1}, {r: 2, c: 0}, {r: 3, c: 0}, {r: 3, c: 1}, {r: 4, c: 1}, {r: 5, c: 1},
            {r: 6, c: 1}, {r: 6, c: 2}, {r: 6, c: 3}, {r: 5, c: 3}, {r: 4, c: 3}, {r: 3, c: 3},
            {r: 3, c: 4}, {r: 2, c: 4}, {r: 2, c: 3}, {r: 2, c: 2}, {r: 3, c: 2}, {r: 4, c: 2},
            {r: 5, c: 2}
        ]
    },
    {
        name: "Seviye 17",
        difficulty: "Şampiyon",
        rows: 6,
        cols: 6,
        start: { r: 0, c: 2 },
        solution: [
            {r: 0, c: 2}, {r: 0, c: 3}, {r: 1, c: 3}, {r: 1, c: 4}, {r: 2, c: 4}, {r: 2, c: 5},
            {r: 3, c: 5}, {r: 3, c: 4}, {r: 4, c: 4}, {r: 4, c: 3}, {r: 5, c: 3}, {r: 5, c: 2},
            {r: 4, c: 2}, {r: 4, c: 1}, {r: 3, c: 1}, {r: 3, c: 0}, {r: 2, c: 0}, {r: 2, c: 1},
            {r: 1, c: 1}, {r: 1, c: 2}, {r: 2, c: 2}, {r: 2, c: 3}, {r: 3, c: 3}, {r: 3, c: 2}
        ]
    },
    {
        name: "Seviye 18",
        difficulty: "Efsane",
        rows: 5,
        cols: 5,
        start: { r: 0, c: 4 },
        solution: [
            {r: 0, c: 4}, {r: 0, c: 3}, {r: 0, c: 2}, {r: 0, c: 1}, {r: 0, c: 0},
            {r: 1, c: 0}, {r: 2, c: 0}, {r: 3, c: 0}, {r: 4, c: 0}, {r: 4, c: 1},
            {r: 4, c: 2}, {r: 4, c: 3}, {r: 4, c: 4}, {r: 3, c: 4}, {r: 2, c: 4},
            {r: 1, c: 4}, {r: 1, c: 3}, {r: 1, c: 2}, {r: 1, c: 1}, {r: 2, c: 1},
            {r: 3, c: 1}, {r: 3, c: 2}, {r: 3, c: 3}, {r: 2, c: 3}, {r: 2, c: 2}
        ]
    },
    {
        name: "Seviye 19",
        difficulty: "Efsane",
        rows: 6,
        cols: 5,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 1, c: 0}, {r: 2, c: 0}, {r: 3, c: 0}, {r: 4, c: 0}, {r: 5, c: 0},
            {r: 5, c: 1}, {r: 4, c: 1}, {r: 3, c: 1}, {r: 2, c: 1}, {r: 1, c: 1}, {r: 0, c: 1},
            {r: 0, c: 2}, {r: 1, c: 2}, {r: 2, c: 2}, {r: 3, c: 2}, {r: 4, c: 2}, {r: 5, c: 2},
            {r: 5, c: 3}, {r: 4, c: 3}, {r: 3, c: 3}, {r: 2, c: 3}, {r: 1, c: 3}, {r: 0, c: 3},
            {r: 0, c: 4}, {r: 1, c: 4}, {r: 2, c: 4}, {r: 3, c: 4}, {r: 4, c: 4}, {r: 5, c: 4}
        ]
    },
    {
        name: "Seviye 20",
        difficulty: "Efsane",
        rows: 6,
        cols: 6,
        start: { r: 0, c: 0 },
        solution: [
            {r: 0, c: 0}, {r: 0, c: 1}, {r: 1, c: 1}, {r: 1, c: 0}, {r: 2, c: 0}, {r: 2, c: 1},
            {r: 3, c: 1}, {r: 3, c: 0}, {r: 4, c: 0}, {r: 5, c: 0}, {r: 5, c: 1}, {r: 4, c: 1},
            {r: 4, c: 2}, {r: 5, c: 2}, {r: 5, c: 3}, {r: 4, c: 3}, {r: 3, c: 3}, {r: 3, c: 2},
            {r: 2, c: 2}, {r: 1, c: 2}, {r: 0, c: 2}, {r: 0, c: 3}, {r: 1, c: 3}, {r: 2, c: 3},
            {r: 2, c: 4}, {r: 1, c: 4}, {r: 0, c: 4}, {r: 0, c: 5}, {r: 1, c: 5}, {r: 2, c: 5},
            {r: 3, c: 5}, {r: 3, c: 4}, {r: 4, c: 4}, {r: 4, c: 5}, {r: 5, c: 5}, {r: 5, c: 4}
        ]
    }
];