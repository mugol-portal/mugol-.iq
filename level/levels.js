// Nexus Flow — Geliştirilmiş Seviye Veritabanı (200 Seviye)
// Otomatik üretici ile oluşturuldu: her seviye Hamilton-yol bölümlemesi
// yöntemiyle üretilmiştir; bu sayede ızgaradaki 25 hücrenin tamamı
// renk yollarınca kaplanır ve her seviyenin çözülebilirliği garanti edilir.
// Zorluk eğrisi: KOLAY (3 renk) -> KOLAY (4 renk) -> ORTA (4 renk) ->
// ORTA (5 renk) -> ZOR (5 renk) -> UZMAN (5 renk) -> EFSANE -> FINAL (Seviye 200)
const levels = [
    // Seviye 1 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'blue' }, { r: 1, c: 0, color: 'blue' },
            { r: 0, c: 0, color: 'red' }, { r: 3, c: 1, color: 'red' },
            { r: 3, c: 2, color: 'green' }, { r: 3, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1}],
            green: [{r:3,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:3,c:3}],
            blue: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0}]
        }
    },
    // Seviye 2 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 3, c: 0, color: 'blue' }, { r: 3, c: 2, color: 'blue' },
            { r: 3, c: 1, color: 'green' }, { r: 1, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0}],
            green: [{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:1,c:3}],
            blue: [{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}]
        }
    },
    // Seviye 3 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 2, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 1, c: 4, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 4, c: 2, color: 'blue' }, { r: 2, c: 2, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:0,c:3},{r:0,c:4}],
            green: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}],
            blue: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:2,c:2}]
        }
    },
    // Seviye 4 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 4, c: 2, color: 'red' }, { r: 2, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:4,c:2},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2}],
            green: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            blue: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:0,c:3}]
        }
    },
    // Seviye 5 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'green' }, { r: 0, c: 0, color: 'green' },
            { r: 1, c: 0, color: 'blue' }, { r: 3, c: 1, color: 'blue' },
            { r: 2, c: 1, color: 'red' }, { r: 3, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3},{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:3,c:3}],
            green: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0}],
            blue: [{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}]
        }
    },
    // Seviye 6 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 4, c: 3, color: 'green' }, { r: 2, c: 1, color: 'green' },
            { r: 1, c: 1, color: 'red' }, { r: 1, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:1,c:1},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:1,c:3}],
            green: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1}],
            blue: [{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2}]
        }
    },
    // Seviye 7 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'blue' }, { r: 4, c: 0, color: 'blue' },
            { r: 3, c: 0, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 1, c: 4, color: 'green' }, { r: 3, c: 1, color: 'green' }
        ],
        solution: {
            red: [{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            green: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:3,c:1}],
            blue: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0}]
        }
    },
    // Seviye 8 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 4, c: 2, color: 'green' }, { r: 2, c: 3, color: 'green' },
            { r: 3, c: 3, color: 'red' }, { r: 2, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2}],
            green: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:2,c:3}],
            blue: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}]
        }
    },
    // Seviye 9 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 1, c: 3, color: 'red' }, { r: 0, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 2, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:3,c:2},{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0}],
            green: [{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:0},{r:2,c:0}],
            blue: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3}]
        }
    },
    // Seviye 10 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'green' }, { r: 3, c: 0, color: 'green' },
            { r: 2, c: 0, color: 'blue' }, { r: 1, c: 2, color: 'blue' },
            { r: 0, c: 2, color: 'red' }, { r: 1, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3}],
            green: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            blue: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4},{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:1,c:2}]
        }
    },
    // Seviye 11 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 2, c: 0, color: 'green' }, { r: 3, c: 4, color: 'green' },
            { r: 4, c: 4, color: 'blue' }, { r: 3, c: 0, color: 'blue' },
            { r: 3, c: 1, color: 'red' }, { r: 1, c: 1, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:1,c:1}],
            green: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4}],
            blue: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0}]
        }
    },
    // Seviye 12 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'green' }, { r: 2, c: 4, color: 'green' },
            { r: 1, c: 4, color: 'blue' }, { r: 3, c: 0, color: 'blue' },
            { r: 3, c: 1, color: 'red' }, { r: 1, c: 1, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:1,c:1}],
            green: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4}],
            blue: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0}]
        }
    },
    // Seviye 13 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 2, color: 'blue' }, { r: 3, c: 0, color: 'blue' },
            { r: 4, c: 0, color: 'green' }, { r: 0, c: 4, color: 'green' },
            { r: 0, c: 3, color: 'red' }, { r: 1, c: 1, color: 'red' }
        ],
        solution: {
            red: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:2,c:2},{r:1,c:2},{r:1,c:1}],
            green: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4}],
            blue: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0}]
        }
    },
    // Seviye 14 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'blue' }, { r: 0, c: 4, color: 'blue' },
            { r: 0, c: 3, color: 'green' }, { r: 3, c: 0, color: 'green' },
            { r: 2, c: 0, color: 'red' }, { r: 1, c: 1, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:1,c:1}],
            green: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:3,c:0}],
            blue: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4}]
        }
    },
    // Seviye 15 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'green' }, { r: 0, c: 1, color: 'green' },
            { r: 1, c: 1, color: 'red' }, { r: 2, c: 4, color: 'red' },
            { r: 2, c: 3, color: 'blue' }, { r: 0, c: 4, color: 'blue' }
        ],
        solution: {
            red: [{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4},{r:2,c:4}],
            green: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1}],
            blue: [{r:2,c:3},{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:4},{r:0,c:4}]
        }
    },
    // Seviye 16 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'green' }, { r: 0, c: 3, color: 'green' },
            { r: 0, c: 4, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 3, c: 2, color: 'red' }, { r: 3, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3}],
            green: [{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3}],
            blue: [{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1},{r:4,c:2}]
        }
    },
    // Seviye 17 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'green' }, { r: 0, c: 0, color: 'green' },
            { r: 0, c: 1, color: 'red' }, { r: 3, c: 2, color: 'red' },
            { r: 2, c: 2, color: 'blue' }, { r: 3, c: 3, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1},{r:4,c:2},{r:3,c:2}],
            green: [{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            blue: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3}]
        }
    },
    // Seviye 18 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'blue' }, { r: 1, c: 4, color: 'blue' },
            { r: 1, c: 3, color: 'green' }, { r: 3, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'red' }, { r: 3, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:2,c:3},{r:3,c:3}],
            green: [{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            blue: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4}]
        }
    },
    // Seviye 19 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'blue' }, { r: 1, c: 3, color: 'blue' },
            { r: 1, c: 4, color: 'green' }, { r: 2, c: 1, color: 'green' },
            { r: 2, c: 0, color: 'red' }, { r: 3, c: 1, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:3,c:1}],
            green: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:2,c:2},{r:2,c:1}],
            blue: [{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3}]
        }
    },
    // Seviye 20 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 2, c: 0, color: 'green' }, { r: 1, c: 4, color: 'green' },
            { r: 2, c: 4, color: 'red' }, { r: 2, c: 3, color: 'red' },
            { r: 1, c: 3, color: 'blue' }, { r: 3, c: 1, color: 'blue' }
        ],
        solution: {
            red: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3}],
            green: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            blue: [{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1}]
        }
    },
    // Seviye 21 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'blue' }, { r: 1, c: 0, color: 'blue' },
            { r: 0, c: 0, color: 'red' }, { r: 3, c: 4, color: 'red' },
            { r: 3, c: 3, color: 'green' }, { r: 2, c: 2, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4}],
            green: [{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3},{r:2,c:2}],
            blue: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0}]
        }
    },
    // Seviye 22 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'red' }, { r: 4, c: 2, color: 'red' },
            { r: 4, c: 1, color: 'green' }, { r: 1, c: 3, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 2, c: 2, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2}],
            green: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:1,c:3}],
            blue: [{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2}]
        }
    },
    // Seviye 23 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'red' }, { r: 0, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'blue' }, { r: 3, c: 4, color: 'blue' },
            { r: 2, c: 4, color: 'green' }, { r: 1, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            green: [{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:1,c:3}],
            blue: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4}]
        }
    },
    // Seviye 24 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 2, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'green' }, { r: 3, c: 4, color: 'green' },
            { r: 4, c: 4, color: 'red' }, { r: 2, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:2,c:2}],
            green: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4}],
            blue: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3}]
        }
    },
    // Seviye 25 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 1, c: 3, color: 'blue' }, { r: 0, c: 1, color: 'blue' },
            { r: 0, c: 0, color: 'red' }, { r: 2, c: 3, color: 'red' },
            { r: 3, c: 3, color: 'green' }, { r: 3, c: 1, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:2,c:3}],
            green: [{r:3,c:3},{r:3,c:2},{r:2,c:2},{r:2,c:1},{r:3,c:1}],
            blue: [{r:1,c:3},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:1,c:2},{r:1,c:1},{r:0,c:1}]
        }
    },
    // Seviye 26 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 3, color: 'blue' }, { r: 3, c: 3, color: 'blue' },
            { r: 3, c: 2, color: 'green' }, { r: 1, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2}],
            green: [{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:1,c:3}],
            blue: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:3,c:3}]
        }
    },
    // Seviye 27 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'blue' }, { r: 2, c: 0, color: 'blue' },
            { r: 1, c: 0, color: 'red' }, { r: 3, c: 4, color: 'red' },
            { r: 2, c: 4, color: 'green' }, { r: 1, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4}],
            green: [{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:1,c:3}],
            blue: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0}]
        }
    },
    // Seviye 28 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 3, c: 0, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'red' }, { r: 1, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:1,c:3}],
            green: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0}],
            blue: [{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3}]
        }
    },
    // Seviye 29 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'green' }, { r: 3, c: 4, color: 'green' },
            { r: 4, c: 4, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'blue' }, { r: 3, c: 1, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0}],
            green: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4}],
            blue: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:3,c:2},{r:2,c:2},{r:2,c:1},{r:3,c:1}]
        }
    },
    // Seviye 30 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'red' }, { r: 1, c: 4, color: 'red' },
            { r: 0, c: 4, color: 'green' }, { r: 2, c: 3, color: 'green' },
            { r: 3, c: 3, color: 'blue' }, { r: 2, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4}],
            green: [{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3}],
            blue: [{r:3,c:3},{r:3,c:2},{r:2,c:2},{r:2,c:1},{r:3,c:1},{r:3,c:0},{r:2,c:0}]
        }
    },
    // Seviye 31 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'blue' }, { r: 0, c: 1, color: 'blue' },
            { r: 0, c: 0, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 3, c: 1, color: 'red' }, { r: 3, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3},{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:3,c:3}],
            green: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            blue: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1}]
        }
    },
    // Seviye 32 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 3, c: 4, color: 'green' }, { r: 2, c: 4, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:0,c:1},{r:0,c:2}],
            green: [{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:2,c:4}],
            blue: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:4,c:4}]
        }
    },
    // Seviye 33 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'yellow' }, { r: 3, c: 0, color: 'yellow' },
            { r: 4, c: 0, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 3, c: 4, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 0, c: 4, color: 'green' }
        ],
        solution: {
            red: [{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:0,c:1}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:1,c:3},{r:0,c:3},{r:0,c:4}],
            blue: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}],
            yellow: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0}]
        }
    },
    // Seviye 34 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 3, c: 4, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' },
            { r: 1, c: 4, color: 'red' }, { r: 1, c: 3, color: 'red' },
            { r: 1, c: 2, color: 'green' }, { r: 0, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}],
            green: [{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0}],
            blue: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}],
            yellow: [{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:3,c:0},{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4}]
        }
    },
    // Seviye 35 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'green' }, { r: 4, c: 4, color: 'green' },
            { r: 3, c: 4, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 1, color: 'blue' }, { r: 2, c: 1, color: 'blue' },
            { r: 3, c: 1, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' }
        ],
        solution: {
            red: [{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2}],
            green: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}],
            blue: [{r:0,c:1},{r:1,c:1},{r:2,c:1}],
            yellow: [{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2}]
        }
    },
    // Seviye 36 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'green' }, { r: 3, c: 0, color: 'green' },
            { r: 2, c: 0, color: 'blue' }, { r: 0, c: 4, color: 'blue' },
            { r: 1, c: 4, color: 'yellow' }, { r: 3, c: 2, color: 'yellow' },
            { r: 3, c: 1, color: 'red' }, { r: 2, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3},{r:2,c:2}],
            green: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            blue: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            yellow: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}]
        }
    },
    // Seviye 37 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'green' }, { r: 0, c: 2, color: 'green' },
            { r: 0, c: 1, color: 'red' }, { r: 1, c: 3, color: 'red' },
            { r: 2, c: 3, color: 'blue' }, { r: 4, c: 1, color: 'blue' },
            { r: 3, c: 1, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3}],
            green: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2}],
            blue: [{r:2,c:3},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            yellow: [{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:4,c:3},{r:4,c:2}]
        }
    },
    // Seviye 38 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 1, c: 1, color: 'red' }, { r: 0, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 4, c: 3, color: 'yellow' }, { r: 1, c: 2, color: 'yellow' },
            { r: 1, c: 3, color: 'blue' }, { r: 2, c: 2, color: 'blue' }
        ],
        solution: {
            red: [{r:1,c:1},{r:0,c:1},{r:0,c:0}],
            green: [{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2}],
            blue: [{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:2,c:2}],
            yellow: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:1,c:2}]
        }
    },
    // Seviye 39 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 2, c: 0, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'blue' }, { r: 3, c: 1, color: 'blue' },
            { r: 2, c: 1, color: 'green' }, { r: 1, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            green: [{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:1,c:3}],
            blue: [{r:2,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1}],
            yellow: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4}]
        }
    },
    // Seviye 40 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'blue' }, { r: 1, c: 4, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 3, c: 0, color: 'yellow' },
            { r: 4, c: 0, color: 'red' }, { r: 1, c: 3, color: 'red' },
            { r: 1, c: 2, color: 'green' }, { r: 2, c: 2, color: 'green' }
        ],
        solution: {
            red: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:1,c:3}],
            green: [{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:2,c:2}],
            blue: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4}],
            yellow: [{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0}]
        }
    },
    // Seviye 41 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'green' }, { r: 0, c: 4, color: 'green' },
            { r: 1, c: 4, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 3, c: 3, color: 'blue' }, { r: 2, c: 1, color: 'blue' },
            { r: 2, c: 2, color: 'red' }, { r: 3, c: 1, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1}],
            green: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            blue: [{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:2,c:1}],
            yellow: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}]
        }
    },
    // Seviye 42 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 1, c: 3, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 1, color: 'blue' }, { r: 4, c: 0, color: 'blue' },
            { r: 4, c: 1, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 3, color: 'green' }, { r: 3, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:1,c:3},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2}],
            green: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:2,c:3},{r:3,c:3}],
            blue: [{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            yellow: [{r:4,c:1},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}]
        }
    },
    // Seviye 43 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'green' }, { r: 0, c: 0, color: 'green' },
            { r: 0, c: 1, color: 'red' }, { r: 3, c: 3, color: 'red' },
            { r: 3, c: 2, color: 'blue' }, { r: 2, c: 4, color: 'blue' },
            { r: 1, c: 4, color: 'yellow' }, { r: 1, c: 3, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3}],
            green: [{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            blue: [{r:3,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            yellow: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:1,c:2},{r:1,c:3}]
        }
    },
    // Seviye 44 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'yellow' }, { r: 1, c: 2, color: 'yellow' },
            { r: 1, c: 3, color: 'red' }, { r: 2, c: 1, color: 'red' },
            { r: 2, c: 0, color: 'blue' }, { r: 4, c: 1, color: 'blue' },
            { r: 3, c: 1, color: 'green' }, { r: 3, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:1,c:3},{r:1,c:4},{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:2,c:1}],
            green: [{r:3,c:1},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3}],
            blue: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            yellow: [{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:1,c:2}]
        }
    },
    // Seviye 45 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 2, color: 'yellow' }, { r: 4, c: 0, color: 'yellow' },
            { r: 4, c: 1, color: 'blue' }, { r: 2, c: 4, color: 'blue' },
            { r: 1, c: 4, color: 'green' }, { r: 3, c: 2, color: 'green' },
            { r: 3, c: 1, color: 'red' }, { r: 2, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2}],
            green: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:3,c:2}],
            blue: [{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4}],
            yellow: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}]
        }
    },
    // Seviye 46 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 1, c: 1, color: 'yellow' }, { r: 3, c: 0, color: 'yellow' },
            { r: 4, c: 0, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 4, c: 4, color: 'blue' }, { r: 2, c: 2, color: 'blue' },
            { r: 2, c: 3, color: 'red' }, { r: 0, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:0,c:2}],
            green: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3}],
            blue: [{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:2,c:2}],
            yellow: [{r:1,c:1},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0}]
        }
    },
    // Seviye 47 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'blue' }, { r: 4, c: 0, color: 'blue' },
            { r: 4, c: 1, color: 'red' }, { r: 3, c: 3, color: 'red' },
            { r: 3, c: 2, color: 'green' }, { r: 0, c: 4, color: 'green' },
            { r: 1, c: 4, color: 'yellow' }, { r: 1, c: 3, color: 'yellow' }
        ],
        solution: {
            red: [{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3}],
            green: [{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            blue: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            yellow: [{r:1,c:4},{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:1,c:2},{r:1,c:3}]
        }
    },
    // Seviye 48 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 1, color: 'blue' }, { r: 1, c: 2, color: 'blue' },
            { r: 1, c: 3, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 4, c: 2, color: 'green' }, { r: 3, c: 1, color: 'green' }
        ],
        solution: {
            red: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2}],
            green: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:3,c:1}],
            blue: [{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:1,c:2}],
            yellow: [{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}]
        }
    },
    // Seviye 49 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 3, c: 0, color: 'green' }, { r: 0, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'yellow' }, { r: 3, c: 2, color: 'yellow' },
            { r: 2, c: 2, color: 'blue' }, { r: 2, c: 4, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0}],
            green: [{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2}],
            blue: [{r:2,c:2},{r:2,c:3},{r:3,c:3},{r:3,c:4},{r:2,c:4}],
            yellow: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:2}]
        }
    },
    // Seviye 50 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'yellow' }, { r: 0, c: 3, color: 'yellow' },
            { r: 1, c: 3, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 4, c: 1, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 1, c: 2, color: 'green' }, { r: 2, c: 2, color: 'green' }
        ],
        solution: {
            red: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2}],
            green: [{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:2,c:2}],
            blue: [{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3},{r:4,c:2}],
            yellow: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3}]
        }
    },
    // Seviye 51 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'blue' }, { r: 0, c: 1, color: 'blue' },
            { r: 0, c: 0, color: 'green' }, { r: 1, c: 3, color: 'green' },
            { r: 2, c: 3, color: 'yellow' }, { r: 3, c: 2, color: 'yellow' },
            { r: 4, c: 2, color: 'red' }, { r: 3, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:4,c:2},{r:4,c:3},{r:3,c:3}],
            green: [{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3}],
            blue: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1}],
            yellow: [{r:2,c:3},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2}]
        }
    },
    // Seviye 52 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 3, c: 3, color: 'yellow' }, { r: 1, c: 1, color: 'yellow' },
            { r: 1, c: 2, color: 'green' }, { r: 2, c: 0, color: 'green' },
            { r: 3, c: 0, color: 'red' }, { r: 3, c: 1, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:3,c:1}],
            green: [{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:2,c:0}],
            blue: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}],
            yellow: [{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}]
        }
    },
    // Seviye 53 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'green' }, { r: 4, c: 4, color: 'green' },
            { r: 3, c: 4, color: 'blue' }, { r: 2, c: 1, color: 'blue' },
            { r: 2, c: 2, color: 'yellow' }, { r: 1, c: 3, color: 'yellow' },
            { r: 1, c: 2, color: 'red' }, { r: 0, c: 0, color: 'red' }
        ],
        solution: {
            red: [{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0}],
            green: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}],
            blue: [{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:3,c:0},{r:2,c:0},{r:2,c:1}],
            yellow: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}]
        }
    },
    // Seviye 54 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 2, c: 4, color: 'yellow' }, { r: 4, c: 0, color: 'yellow' },
            { r: 3, c: 0, color: 'blue' }, { r: 0, c: 0, color: 'blue' },
            { r: 0, c: 1, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'red' }, { r: 2, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:2,c:2}],
            green: [{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1}],
            blue: [{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            yellow: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0}]
        }
    },
    // Seviye 55 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' },
            { r: 1, c: 0, color: 'green' }, { r: 0, c: 3, color: 'green' },
            { r: 0, c: 4, color: 'red' }, { r: 3, c: 3, color: 'red' },
            { r: 2, c: 3, color: 'blue' }, { r: 2, c: 2, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:3,c:3}],
            green: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3}],
            blue: [{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:2,c:2}],
            yellow: [{r:4,c:0},{r:3,c:0},{r:2,c:0}]
        }
    },
    // Seviye 56 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 4, c: 0, color: 'green' }, { r: 1, c: 4, color: 'green' },
            { r: 2, c: 4, color: 'yellow' }, { r: 3, c: 2, color: 'yellow' },
            { r: 3, c: 3, color: 'blue' }, { r: 2, c: 2, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0}],
            green: [{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            blue: [{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2}],
            yellow: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:3,c:2}]
        }
    },
    // Seviye 57 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'yellow' }, { r: 0, c: 3, color: 'yellow' },
            { r: 0, c: 2, color: 'red' }, { r: 4, c: 2, color: 'red' },
            { r: 4, c: 1, color: 'green' }, { r: 2, c: 1, color: 'green' },
            { r: 2, c: 0, color: 'blue' }, { r: 1, c: 1, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            green: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1}],
            blue: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:0,c:3}]
        }
    },
    // Seviye 58 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 1, c: 3, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 3, c: 0, color: 'blue' }, { r: 0, c: 1, color: 'blue' },
            { r: 0, c: 2, color: 'red' }, { r: 3, c: 1, color: 'red' },
            { r: 3, c: 2, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:2},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1}],
            green: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0}],
            blue: [{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1}],
            yellow: [{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:2,c:2}]
        }
    },
    // Seviye 59 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'red' }, { r: 4, c: 1, color: 'red' },
            { r: 4, c: 0, color: 'green' }, { r: 2, c: 4, color: 'green' },
            { r: 1, c: 4, color: 'yellow' }, { r: 0, c: 0, color: 'yellow' },
            { r: 1, c: 0, color: 'blue' }, { r: 1, c: 3, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1}],
            green: [{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4},{r:2,c:4}],
            blue: [{r:1,c:0},{r:2,c:0},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:1,c:3}],
            yellow: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0}]
        }
    },
    // Seviye 60 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'red' }, { r: 4, c: 4, color: 'red' },
            { r: 4, c: 3, color: 'green' }, { r: 3, c: 0, color: 'green' },
            { r: 3, c: 1, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 0, c: 2, color: 'yellow' }, { r: 1, c: 1, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            green: [{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            blue: [{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:0,c:3}],
            yellow: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:1,c:2},{r:1,c:1}]
        }
    },
    // Seviye 61 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 3, c: 3, color: 'green' }, { r: 3, c: 0, color: 'green' },
            { r: 2, c: 0, color: 'yellow' }, { r: 2, c: 1, color: 'yellow' },
            { r: 3, c: 1, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 0, c: 3, color: 'blue' }, { r: 1, c: 3, color: 'blue' }
        ],
        solution: {
            red: [{r:3,c:1},{r:3,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4}],
            green: [{r:3,c:3},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            blue: [{r:0,c:3},{r:0,c:2},{r:1,c:2},{r:1,c:3}],
            yellow: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1}]
        }
    },
    // Seviye 62 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 4, color: 'blue' }, { r: 0, c: 1, color: 'blue' },
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 1, color: 'red' },
            { r: 4, c: 2, color: 'green' }, { r: 3, c: 2, color: 'green' },
            { r: 3, c: 1, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            green: [{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:3,c:2}],
            blue: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1}],
            yellow: [{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3},{r:2,c:2}]
        }
    },
    // Seviye 63 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'blue' }, { r: 0, c: 0, color: 'blue' },
            { r: 0, c: 1, color: 'red' }, { r: 3, c: 2, color: 'red' },
            { r: 2, c: 2, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 1, c: 3, color: 'green' }, { r: 3, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1},{r:4,c:2},{r:3,c:2}],
            green: [{r:1,c:3},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3}],
            blue: [{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            yellow: [{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4}]
        }
    },
    // Seviye 64 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'yellow' }, { r: 0, c: 4, color: 'yellow' },
            { r: 1, c: 4, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 4, c: 1, color: 'blue' }, { r: 2, c: 3, color: 'blue' },
            { r: 3, c: 3, color: 'red' }, { r: 3, c: 1, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:3},{r:3,c:2},{r:2,c:2},{r:2,c:1},{r:3,c:1}],
            green: [{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            blue: [{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:2,c:3}],
            yellow: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}]
        }
    },
    // Seviye 65 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'blue' }, { r: 3, c: 4, color: 'blue' },
            { r: 3, c: 3, color: 'yellow' }, { r: 0, c: 0, color: 'yellow' },
            { r: 0, c: 1, color: 'green' }, { r: 2, c: 4, color: 'green' },
            { r: 1, c: 4, color: 'red' }, { r: 0, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:0,c:2}],
            green: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            blue: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4}],
            yellow: [{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0}]
        }
    },
    // Seviye 66 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 4, color: 'blue' }, { r: 0, c: 0, color: 'blue' },
            { r: 1, c: 0, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 1, color: 'green' }, { r: 3, c: 1, color: 'green' },
            { r: 3, c: 2, color: 'red' }, { r: 3, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:2},{r:2,c:2},{r:2,c:3},{r:3,c:3}],
            green: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:2,c:1},{r:3,c:1}],
            blue: [{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0}],
            yellow: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2}]
        }
    },
    // Seviye 67 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 4, c: 0, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' },
            { r: 1, c: 0, color: 'blue' }, { r: 3, c: 1, color: 'blue' },
            { r: 4, c: 1, color: 'green' }, { r: 3, c: 2, color: 'green' },
            { r: 2, c: 2, color: 'red' }, { r: 2, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4}],
            green: [{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}],
            blue: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1}],
            yellow: [{r:4,c:0},{r:3,c:0},{r:2,c:0}]
        }
    },
    // Seviye 68 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'blue' }, { r: 3, c: 4, color: 'blue' },
            { r: 4, c: 4, color: 'green' }, { r: 3, c: 0, color: 'green' },
            { r: 3, c: 1, color: 'red' }, { r: 1, c: 3, color: 'red' },
            { r: 1, c: 2, color: 'yellow' }, { r: 1, c: 1, color: 'yellow' }
        ],
        solution: {
            red: [{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:1,c:3}],
            green: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            blue: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4}],
            yellow: [{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:1,c:1}]
        }
    },
    // Seviye 69 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 2, c: 4, color: 'red' }, { r: 0, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 4, c: 4, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 1, c: 3, color: 'green' }, { r: 3, c: 1, color: 'green' }
        ],
        solution: {
            red: [{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0}],
            green: [{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:3,c:1}],
            blue: [{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3}],
            yellow: [{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3}]
        }
    },
    // Seviye 70 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 1, c: 3, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' },
            { r: 3, c: 4, color: 'blue' }, { r: 4, c: 0, color: 'blue' },
            { r: 3, c: 0, color: 'green' }, { r: 0, c: 2, color: 'green' },
            { r: 0, c: 1, color: 'red' }, { r: 1, c: 1, color: 'red' }
        ],
        solution: {
            red: [{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:2,c:1},{r:1,c:1}],
            green: [{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:2,c:2},{r:1,c:2},{r:0,c:2}],
            blue: [{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0}],
            yellow: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4}]
        }
    },
    // Seviye 71 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 2, c: 0, color: 'red' }, { r: 4, c: 3, color: 'red' },
            { r: 4, c: 4, color: 'green' }, { r: 3, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'yellow' }, { r: 1, c: 3, color: 'yellow' },
            { r: 1, c: 2, color: 'blue' }, { r: 0, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3}],
            green: [{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1}],
            blue: [{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0}],
            yellow: [{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}]
        }
    },
    // Seviye 72 — KOLAY
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'green' }, { r: 0, c: 4, color: 'green' },
            { r: 1, c: 4, color: 'blue' }, { r: 2, c: 0, color: 'blue' },
            { r: 3, c: 0, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' },
            { r: 2, c: 3, color: 'red' }, { r: 2, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:3},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:2,c:2}],
            green: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            blue: [{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:1,c:0},{r:2,c:0}],
            yellow: [{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4}]
        }
    },
    // Seviye 73 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'red' }, { r: 4, c: 4, color: 'red' },
            { r: 3, c: 4, color: 'blue' }, { r: 2, c: 3, color: 'blue' },
            { r: 2, c: 4, color: 'yellow' }, { r: 1, c: 3, color: 'yellow' },
            { r: 1, c: 2, color: 'green' }, { r: 0, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}],
            green: [{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0}],
            blue: [{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:2,c:2},{r:2,c:3}],
            yellow: [{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}]
        }
    },
    // Seviye 74 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 2, color: 'red' }, { r: 0, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' },
            { r: 1, c: 2, color: 'green' }, { r: 2, c: 3, color: 'green' },
            { r: 2, c: 4, color: 'blue' }, { r: 4, c: 4, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            green: [{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3}],
            blue: [{r:2,c:4},{r:3,c:4},{r:3,c:3},{r:4,c:3},{r:4,c:4}],
            yellow: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:2,c:2}]
        }
    },
    // Seviye 75 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 2, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 1, c: 1, color: 'blue' }, { r: 1, c: 4, color: 'blue' },
            { r: 1, c: 3, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 3, c: 3, color: 'green' }, { r: 3, c: 1, color: 'green' }
        ],
        solution: {
            red: [{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1}],
            green: [{r:3,c:3},{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1}],
            blue: [{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            yellow: [{r:1,c:3},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}]
        }
    },
    // Seviye 76 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 3, c: 3, color: 'green' }, { r: 2, c: 4, color: 'green' },
            { r: 2, c: 3, color: 'blue' }, { r: 0, c: 4, color: 'blue' },
            { r: 0, c: 3, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 4, c: 0, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0}],
            green: [{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4}],
            blue: [{r:2,c:3},{r:1,c:3},{r:1,c:4},{r:0,c:4}],
            yellow: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2}]
        }
    },
    // Seviye 77 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 1, c: 1, color: 'yellow' }, { r: 4, c: 0, color: 'yellow' },
            { r: 4, c: 1, color: 'green' }, { r: 2, c: 2, color: 'green' },
            { r: 1, c: 2, color: 'blue' }, { r: 3, c: 4, color: 'blue' },
            { r: 4, c: 4, color: 'red' }, { r: 3, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:3,c:2},{r:3,c:3}],
            green: [{r:4,c:1},{r:3,c:1},{r:2,c:1},{r:2,c:2}],
            blue: [{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4},{r:3,c:4}],
            yellow: [{r:1,c:1},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}]
        }
    },
    // Seviye 78 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 1, c: 1, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 4, c: 1, color: 'blue' }, { r: 3, c: 2, color: 'blue' },
            { r: 3, c: 3, color: 'red' }, { r: 2, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2}],
            green: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2}],
            blue: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:2,c:1},{r:3,c:1},{r:3,c:2}],
            yellow: [{r:1,c:1},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4}]
        }
    },
    // Seviye 79 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 4, c: 1, color: 'red' }, { r: 3, c: 3, color: 'red' },
            { r: 2, c: 3, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' },
            { r: 2, c: 1, color: 'blue' }, { r: 0, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3}],
            green: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2}],
            blue: [{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:1,c:1},{r:0,c:1},{r:0,c:0}],
            yellow: [{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2}]
        }
    },
    // Seviye 80 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 2, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 4, c: 3, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 3, c: 0, color: 'blue' }, { r: 0, c: 1, color: 'blue' },
            { r: 1, c: 1, color: 'red' }, { r: 0, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:4},{r:0,c:4}],
            green: [{r:4,c:3},{r:3,c:3},{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:4,c:0}],
            blue: [{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1}],
            yellow: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 81 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 4, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 4, c: 2, color: 'yellow' }, { r: 3, c: 2, color: 'yellow' },
            { r: 3, c: 3, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 1, c: 1, color: 'green' }, { r: 1, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:3,c:3},{r:2,c:3},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1}],
            green: [{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3}],
            blue: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}],
            yellow: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:3,c:2}]
        }
    },
    // Seviye 82 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 4, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 1, c: 3, color: 'blue' }, { r: 0, c: 2, color: 'blue' },
            { r: 1, c: 2, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 4, c: 1, color: 'red' }, { r: 0, c: 0, color: 'red' }
        ],
        solution: {
            red: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:1,c:1},{r:0,c:1},{r:0,c:0}],
            green: [{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            blue: [{r:1,c:3},{r:0,c:3},{r:0,c:2}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3}]
        }
    },
    // Seviye 83 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'red' }, { r: 1, c: 3, color: 'red' },
            { r: 1, c: 2, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 4, c: 1, color: 'green' }, { r: 3, c: 1, color: 'green' }
        ],
        solution: {
            red: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:1,c:3}],
            green: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1}],
            blue: [{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4}]
        }
    },
    // Seviye 84 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 4, color: 'red' }, { r: 1, c: 3, color: 'red' },
            { r: 2, c: 3, color: 'yellow' }, { r: 0, c: 2, color: 'yellow' },
            { r: 0, c: 1, color: 'green' }, { r: 3, c: 0, color: 'green' },
            { r: 4, c: 0, color: 'blue' }, { r: 3, c: 1, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}],
            green: [{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0},{r:3,c:0}],
            blue: [{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            yellow: [{r:2,c:3},{r:3,c:3},{r:4,c:3},{r:4,c:2},{r:3,c:2},{r:2,c:2},{r:1,c:2},{r:0,c:2}]
        }
    },
    // Seviye 85 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 1, c: 1, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 1, c: 4, color: 'green' }, { r: 1, c: 3, color: 'green' },
            { r: 1, c: 2, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 1, color: 'blue' }, { r: 2, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:1,c:1},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            green: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:1,c:3}],
            blue: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:0}],
            yellow: [{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}]
        }
    },
    // Seviye 86 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 2, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 3, c: 3, color: 'red' }, { r: 4, c: 2, color: 'red' },
            { r: 4, c: 1, color: 'green' }, { r: 2, c: 1, color: 'green' },
            { r: 2, c: 0, color: 'blue' }, { r: 0, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            green: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1}],
            blue: [{r:2,c:0},{r:1,c:0},{r:1,c:1},{r:0,c:1},{r:0,c:0}],
            yellow: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}]
        }
    },
    // Seviye 87 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'green' }, { r: 0, c: 1, color: 'green' },
            { r: 1, c: 1, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 4, c: 0, color: 'yellow' }, { r: 3, c: 2, color: 'yellow' },
            { r: 2, c: 2, color: 'blue' }, { r: 1, c: 3, color: 'blue' }
        ],
        solution: {
            red: [{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:0}],
            green: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1}],
            blue: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:1,c:2},{r:1,c:3}],
            yellow: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}]
        }
    },
    // Seviye 88 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 3, color: 'red' }, { r: 3, c: 2, color: 'red' },
            { r: 3, c: 1, color: 'blue' }, { r: 1, c: 3, color: 'blue' },
            { r: 1, c: 2, color: 'green' }, { r: 0, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}],
            green: [{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0}],
            blue: [{r:3,c:1},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}],
            yellow: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2}]
        }
    },
    // Seviye 89 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 2, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' },
            { r: 3, c: 0, color: 'red' }, { r: 4, c: 3, color: 'red' },
            { r: 4, c: 4, color: 'green' }, { r: 1, c: 2, color: 'green' },
            { r: 2, c: 2, color: 'blue' }, { r: 0, c: 4, color: 'blue' }
        ],
        solution: {
            red: [{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3}],
            green: [{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:1,c:2}],
            blue: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:1,c:3},{r:0,c:3},{r:0,c:4}],
            yellow: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0}]
        }
    },
    // Seviye 90 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 4, color: 'green' }, { r: 1, c: 3, color: 'green' },
            { r: 2, c: 3, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' },
            { r: 1, c: 2, color: 'red' }, { r: 1, c: 1, color: 'red' },
            { r: 2, c: 1, color: 'blue' }, { r: 4, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            green: [{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}],
            blue: [{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:3,c:1},{r:4,c:1},{r:4,c:0}],
            yellow: [{r:2,c:3},{r:3,c:3},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:3,c:2},{r:2,c:2}]
        }
    },
    // Seviye 91 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'green' }, { r: 2, c: 2, color: 'green' },
            { r: 3, c: 2, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 3, c: 4, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 2, c: 4, color: 'red' }, { r: 0, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:4},{r:1,c:4},{r:1,c:3},{r:0,c:3},{r:0,c:4}],
            green: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:2,c:2}],
            blue: [{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:4,c:4}],
            yellow: [{r:3,c:4},{r:3,c:3},{r:2,c:3}]
        }
    },
    // Seviye 92 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 1, c: 3, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'red' }, { r: 3, c: 1, color: 'red' },
            { r: 3, c: 2, color: 'blue' }, { r: 3, c: 3, color: 'blue' }
        ],
        solution: {
            red: [{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            green: [{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            blue: [{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3}],
            yellow: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4}]
        }
    },
    // Seviye 93 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 4, color: 'yellow' }, { r: 1, c: 0, color: 'yellow' },
            { r: 2, c: 0, color: 'blue' }, { r: 4, c: 1, color: 'blue' },
            { r: 4, c: 2, color: 'green' }, { r: 2, c: 3, color: 'green' },
            { r: 1, c: 3, color: 'red' }, { r: 2, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:2,c:2}],
            green: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3}],
            blue: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            yellow: [{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0}]
        }
    },
    // Seviye 94 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'yellow' }, { r: 0, c: 4, color: 'yellow' },
            { r: 1, c: 4, color: 'red' }, { r: 2, c: 1, color: 'red' },
            { r: 2, c: 2, color: 'blue' }, { r: 3, c: 2, color: 'blue' },
            { r: 4, c: 2, color: 'green' }, { r: 4, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:2,c:1}],
            green: [{r:4,c:2},{r:4,c:1},{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            blue: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:3,c:2}],
            yellow: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}]
        }
    },
    // Seviye 95 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 2, color: 'green' }, { r: 1, c: 3, color: 'green' },
            { r: 2, c: 3, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 1, color: 'blue' }, { r: 1, c: 1, color: 'blue' },
            { r: 2, c: 1, color: 'yellow' }, { r: 4, c: 0, color: 'yellow' }
        ],
        solution: {
            red: [{r:2,c:3},{r:3,c:3},{r:3,c:2},{r:2,c:2},{r:1,c:2},{r:0,c:2}],
            green: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}],
            blue: [{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            yellow: [{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:3,c:1},{r:4,c:1},{r:4,c:0}]
        }
    },
    // Seviye 96 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'blue' }, { r: 3, c: 4, color: 'blue' },
            { r: 4, c: 4, color: 'yellow' }, { r: 1, c: 2, color: 'yellow' },
            { r: 2, c: 2, color: 'red' }, { r: 4, c: 2, color: 'red' },
            { r: 4, c: 1, color: 'green' }, { r: 1, c: 1, color: 'green' }
        ],
        solution: {
            red: [{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            green: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:1,c:1}],
            blue: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4}],
            yellow: [{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2}]
        }
    },
    // Seviye 97 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 3, color: 'red' },
            { r: 0, c: 4, color: 'yellow' }, { r: 2, c: 1, color: 'yellow' },
            { r: 2, c: 2, color: 'blue' }, { r: 3, c: 2, color: 'blue' },
            { r: 4, c: 2, color: 'green' }, { r: 4, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3}],
            green: [{r:4,c:2},{r:4,c:1},{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            blue: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:3,c:2}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:2,c:1}]
        }
    },
    // Seviye 98 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'yellow' }, { r: 0, c: 1, color: 'yellow' },
            { r: 0, c: 2, color: 'red' }, { r: 1, c: 2, color: 'red' },
            { r: 1, c: 1, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 3, c: 3, color: 'green' }, { r: 4, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2}],
            green: [{r:3,c:3},{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            blue: [{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}],
            yellow: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1}]
        }
    },
    // Seviye 99 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'yellow' }, { r: 3, c: 1, color: 'yellow' },
            { r: 2, c: 1, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 4, c: 3, color: 'green' }, { r: 1, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:2,c:1},{r:1,c:1},{r:0,c:1},{r:0,c:2}],
            green: [{r:4,c:3},{r:4,c:2},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:2,c:2},{r:1,c:2},{r:1,c:3}],
            blue: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            yellow: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}]
        }
    },
    // Seviye 100 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 4, color: 'yellow' }, { r: 1, c: 0, color: 'yellow' },
            { r: 2, c: 0, color: 'blue' }, { r: 3, c: 1, color: 'blue' },
            { r: 2, c: 1, color: 'red' }, { r: 4, c: 2, color: 'red' },
            { r: 4, c: 3, color: 'green' }, { r: 2, c: 4, color: 'green' }
        ],
        solution: {
            red: [{r:2,c:1},{r:1,c:1},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            green: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:4},{r:2,c:4}],
            blue: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            yellow: [{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0}]
        }
    },
    // Seviye 101 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 4, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 1, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'blue' }, { r: 2, c: 3, color: 'blue' },
            { r: 2, c: 2, color: 'red' }, { r: 0, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:4},{r:0,c:4}],
            green: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}],
            blue: [{r:2,c:1},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:2,c:3}],
            yellow: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2}]
        }
    },
    // Seviye 102 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 2, color: 'green' }, { r: 4, c: 4, color: 'green' },
            { r: 3, c: 4, color: 'blue' }, { r: 2, c: 1, color: 'blue' },
            { r: 2, c: 0, color: 'yellow' }, { r: 1, c: 2, color: 'yellow' },
            { r: 0, c: 2, color: 'red' }, { r: 0, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:4},{r:0,c:4}],
            green: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:4,c:3},{r:4,c:4}],
            blue: [{r:3,c:4},{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:2,c:1}],
            yellow: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2}]
        }
    },
    // Seviye 103 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 3, c: 3, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 0, c: 3, color: 'yellow' }, { r: 0, c: 2, color: 'yellow' },
            { r: 0, c: 1, color: 'green' }, { r: 2, c: 1, color: 'green' },
            { r: 2, c: 0, color: 'blue' }, { r: 3, c: 1, color: 'blue' }
        ],
        solution: {
            red: [{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4}],
            green: [{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1}],
            blue: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:3,c:1}],
            yellow: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:2,c:2},{r:1,c:2},{r:0,c:2}]
        }
    },
    // Seviye 104 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 2, color: 'red' }, { r: 3, c: 1, color: 'red' },
            { r: 3, c: 2, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 3, c: 4, color: 'green' }, { r: 2, c: 3, color: 'green' },
            { r: 2, c: 2, color: 'blue' }, { r: 2, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1}],
            green: [{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:2,c:3}],
            blue: [{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0}],
            yellow: [{r:3,c:2},{r:3,c:3},{r:4,c:3},{r:4,c:4}]
        }
    },
    // Seviye 105 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 1, c: 1, color: 'yellow' }, { r: 0, c: 1, color: 'yellow' },
            { r: 0, c: 2, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 4, c: 1, color: 'red' }, { r: 3, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3}],
            green: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            blue: [{r:0,c:2},{r:1,c:2},{r:1,c:3},{r:0,c:3}],
            yellow: [{r:1,c:1},{r:1,c:0},{r:0,c:0},{r:0,c:1}]
        }
    },
    // Seviye 106 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 4, color: 'blue' }, { r: 2, c: 4, color: 'blue' },
            { r: 1, c: 4, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 3, c: 2, color: 'red' }, { r: 1, c: 1, color: 'red' },
            { r: 2, c: 1, color: 'green' }, { r: 4, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:3,c:2},{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            green: [{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:3,c:1},{r:4,c:1},{r:4,c:0}],
            blue: [{r:4,c:4},{r:3,c:4},{r:2,c:4}],
            yellow: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3},{r:4,c:2}]
        }
    },
    // Seviye 107 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'green' }, { r: 0, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'red' }, { r: 1, c: 2, color: 'red' },
            { r: 1, c: 1, color: 'blue' }, { r: 3, c: 3, color: 'blue' },
            { r: 3, c: 2, color: 'yellow' }, { r: 3, c: 1, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2}],
            green: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2}],
            blue: [{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3}],
            yellow: [{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1}]
        }
    },
    // Seviye 108 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 3, c: 1, color: 'red' }, { r: 3, c: 2, color: 'red' },
            { r: 3, c: 3, color: 'green' }, { r: 2, c: 4, color: 'green' },
            { r: 2, c: 3, color: 'yellow' }, { r: 1, c: 2, color: 'yellow' },
            { r: 0, c: 2, color: 'blue' }, { r: 0, c: 4, color: 'blue' }
        ],
        solution: {
            red: [{r:3,c:1},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:3,c:2}],
            green: [{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4}],
            blue: [{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:4},{r:0,c:4}],
            yellow: [{r:2,c:3},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2}]
        }
    },
    // Seviye 109 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 3, c: 3, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 1, c: 3, color: 'blue' }, { r: 3, c: 2, color: 'blue' },
            { r: 4, c: 2, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 1, c: 1, color: 'green' }
        ],
        solution: {
            red: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:0}],
            green: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}],
            blue: [{r:1,c:3},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2}],
            yellow: [{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:2,c:3}]
        }
    },
    // Seviye 110 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'blue' }, { r: 1, c: 3, color: 'blue' },
            { r: 1, c: 2, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 2, c: 4, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 4, c: 1, color: 'red' }, { r: 4, c: 0, color: 'red' }
        ],
        solution: {
            red: [{r:4,c:1},{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            green: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3}],
            yellow: [{r:1,c:2},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3}]
        }
    },
    // Seviye 111 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 0, color: 'green' }, { r: 2, c: 4, color: 'green' },
            { r: 1, c: 4, color: 'blue' }, { r: 0, c: 4, color: 'blue' },
            { r: 0, c: 3, color: 'red' }, { r: 2, c: 3, color: 'red' },
            { r: 3, c: 3, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3}],
            green: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4}],
            blue: [{r:1,c:4},{r:0,c:4}],
            yellow: [{r:3,c:3},{r:3,c:2},{r:2,c:2},{r:2,c:1},{r:3,c:1},{r:3,c:0},{r:2,c:0}]
        }
    },
    // Seviye 112 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 2, color: 'yellow' }, { r: 1, c: 2, color: 'yellow' },
            { r: 1, c: 3, color: 'red' }, { r: 3, c: 4, color: 'red' },
            { r: 4, c: 4, color: 'blue' }, { r: 3, c: 0, color: 'blue' },
            { r: 4, c: 0, color: 'green' }, { r: 4, c: 2, color: 'green' }
        ],
        solution: {
            red: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4}],
            green: [{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}],
            blue: [{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:3,c:0}],
            yellow: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:1,c:2}]
        }
    },
    // Seviye 113 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'green' }, { r: 1, c: 3, color: 'green' },
            { r: 1, c: 2, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' },
            { r: 2, c: 1, color: 'red' }, { r: 4, c: 4, color: 'red' },
            { r: 4, c: 3, color: 'orange' }, { r: 4, c: 1, color: 'orange' },
            { r: 3, c: 1, color: 'blue' }, { r: 4, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            green: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3}],
            blue: [{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            yellow: [{r:1,c:2},{r:1,c:1},{r:1,c:0},{r:2,c:0}],
            orange: [{r:4,c:3},{r:3,c:3},{r:3,c:2},{r:4,c:2},{r:4,c:1}]
        }
    },
    // Seviye 114 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 3, c: 1, color: 'green' }, { r: 2, c: 0, color: 'green' },
            { r: 2, c: 1, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 0, c: 2, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 4, c: 4, color: 'yellow' }, { r: 0, c: 4, color: 'yellow' },
            { r: 0, c: 3, color: 'orange' }, { r: 1, c: 3, color: 'orange' }
        ],
        solution: {
            red: [{r:2,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0},{r:0,c:1}],
            green: [{r:3,c:1},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0}],
            blue: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:3}],
            yellow: [{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4}],
            orange: [{r:0,c:3},{r:1,c:3}]
        }
    },
    // Seviye 115 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 2, color: 'green' }, { r: 3, c: 2, color: 'green' },
            { r: 3, c: 1, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 2, c: 0, color: 'blue' }, { r: 2, c: 1, color: 'blue' },
            { r: 2, c: 2, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 0, c: 4, color: 'orange' }, { r: 0, c: 2, color: 'orange' }
        ],
        solution: {
            red: [{r:3,c:1},{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            green: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}],
            blue: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1}],
            yellow: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4}],
            orange: [{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:0,c:2}]
        }
    },
    // Seviye 116 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 3, color: 'orange' }, { r: 3, c: 2, color: 'orange' },
            { r: 3, c: 1, color: 'blue' }, { r: 2, c: 4, color: 'blue' },
            { r: 1, c: 4, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 1, c: 1, color: 'green' }
        ],
        solution: {
            red: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:0,c:2}],
            green: [{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            blue: [{r:3,c:1},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            yellow: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2}],
            orange: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}]
        }
    },
    // Seviye 117 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'blue' }, { r: 3, c: 1, color: 'blue' },
            { r: 2, c: 1, color: 'orange' }, { r: 3, c: 4, color: 'orange' },
            { r: 3, c: 3, color: 'green' }, { r: 0, c: 4, color: 'green' },
            { r: 0, c: 3, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 1, color: 'yellow' }, { r: 0, c: 0, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:0,c:2}],
            green: [{r:3,c:3},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4}],
            blue: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            yellow: [{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0}],
            orange: [{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4}]
        }
    },
    // Seviye 118 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 1, c: 3, color: 'green' }, { r: 0, c: 0, color: 'green' },
            { r: 1, c: 0, color: 'red' }, { r: 2, c: 3, color: 'red' },
            { r: 2, c: 4, color: 'yellow' }, { r: 3, c: 2, color: 'yellow' },
            { r: 4, c: 2, color: 'blue' }, { r: 3, c: 0, color: 'blue' },
            { r: 3, c: 1, color: 'orange' }, { r: 2, c: 0, color: 'orange' }
        ],
        solution: {
            red: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:2,c:2},{r:2,c:3}],
            green: [{r:1,c:3},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0}],
            blue: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            yellow: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:3,c:2}],
            orange: [{r:3,c:1},{r:2,c:1},{r:2,c:0}]
        }
    },
    // Seviye 119 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 4, color: 'yellow' }, { r: 3, c: 2, color: 'yellow' },
            { r: 3, c: 3, color: 'orange' }, { r: 2, c: 2, color: 'orange' },
            { r: 2, c: 1, color: 'blue' }, { r: 0, c: 0, color: 'blue' },
            { r: 0, c: 1, color: 'green' }, { r: 1, c: 2, color: 'green' },
            { r: 0, c: 2, color: 'red' }, { r: 0, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:4},{r:0,c:4}],
            green: [{r:0,c:1},{r:1,c:1},{r:1,c:2}],
            blue: [{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            yellow: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:3,c:2}],
            orange: [{r:3,c:3},{r:3,c:4},{r:2,c:4},{r:2,c:3},{r:2,c:2}]
        }
    },
    // Seviye 120 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 3, c: 3, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 4, c: 1, color: 'orange' }, { r: 3, c: 2, color: 'orange' },
            { r: 2, c: 2, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'yellow' }, { r: 0, c: 4, color: 'yellow' },
            { r: 1, c: 4, color: 'blue' }, { r: 2, c: 4, color: 'blue' }
        ],
        solution: {
            red: [{r:2,c:2},{r:2,c:1},{r:2,c:0}],
            green: [{r:3,c:3},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2}],
            blue: [{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4}],
            yellow: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            orange: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:3,c:2}]
        }
    },
    // Seviye 121 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 1, c: 3, color: 'orange' }, { r: 2, c: 4, color: 'orange' },
            { r: 3, c: 4, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 4, c: 1, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'blue' }, { r: 2, c: 1, color: 'blue' },
            { r: 3, c: 1, color: 'yellow' }, { r: 3, c: 3, color: 'yellow' }
        ],
        solution: {
            red: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0}],
            green: [{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2}],
            blue: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:1,c:1},{r:2,c:1}],
            yellow: [{r:3,c:1},{r:3,c:2},{r:2,c:2},{r:2,c:3},{r:3,c:3}],
            orange: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4}]
        }
    },
    // Seviye 122 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 1, c: 3, color: 'red' }, { r: 3, c: 4, color: 'red' },
            { r: 4, c: 4, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 3, c: 0, color: 'blue' }, { r: 3, c: 2, color: 'blue' },
            { r: 3, c: 3, color: 'orange' }, { r: 0, c: 1, color: 'orange' },
            { r: 0, c: 0, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' }
        ],
        solution: {
            red: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4}],
            green: [{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0}],
            blue: [{r:3,c:0},{r:3,c:1},{r:3,c:2}],
            yellow: [{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0}],
            orange: [{r:3,c:3},{r:2,c:3},{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1}]
        }
    },
    // Seviye 123 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 2, color: 'blue' }, { r: 1, c: 2, color: 'blue' },
            { r: 1, c: 1, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 4, c: 0, color: 'green' }, { r: 3, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'orange' }, { r: 4, c: 2, color: 'orange' },
            { r: 4, c: 3, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:1,c:1},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0}],
            green: [{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            blue: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2}],
            yellow: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:2,c:4}],
            orange: [{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:4,c:2}]
        }
    },
    // Seviye 124 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 4, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 0, c: 4, color: 'red' }, { r: 4, c: 3, color: 'red' },
            { r: 4, c: 2, color: 'green' }, { r: 2, c: 2, color: 'green' },
            { r: 1, c: 2, color: 'orange' }, { r: 2, c: 0, color: 'orange' },
            { r: 3, c: 0, color: 'blue' }, { r: 4, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            green: [{r:4,c:2},{r:3,c:2},{r:2,c:2}],
            blue: [{r:3,c:0},{r:3,c:1},{r:4,c:1},{r:4,c:0}],
            yellow: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4}],
            orange: [{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0}]
        }
    },
    // Seviye 125 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 1, c: 3, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'green' }, { r: 1, c: 2, color: 'green' },
            { r: 0, c: 2, color: 'red' }, { r: 2, c: 1, color: 'red' },
            { r: 2, c: 0, color: 'blue' }, { r: 3, c: 2, color: 'blue' },
            { r: 4, c: 2, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1}],
            green: [{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:1,c:2}],
            blue: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2}],
            yellow: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            orange: [{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 126 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 3, c: 1, color: 'blue' }, { r: 3, c: 0, color: 'blue' },
            { r: 2, c: 0, color: 'green' }, { r: 1, c: 4, color: 'green' },
            { r: 2, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' },
            { r: 4, c: 3, color: 'red' }, { r: 1, c: 2, color: 'red' },
            { r: 2, c: 2, color: 'yellow' }, { r: 1, c: 1, color: 'yellow' }
        ],
        solution: {
            red: [{r:4,c:3},{r:4,c:2},{r:3,c:2},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2}],
            green: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            blue: [{r:3,c:1},{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            yellow: [{r:2,c:2},{r:2,c:1},{r:1,c:1}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 127 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 4, color: 'yellow' }, { r: 0, c: 3, color: 'yellow' },
            { r: 0, c: 2, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 1, c: 2, color: 'orange' }, { r: 2, c: 2, color: 'orange' },
            { r: 2, c: 1, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 4, c: 0, color: 'blue' }, { r: 4, c: 4, color: 'blue' }
        ],
        solution: {
            red: [{r:2,c:1},{r:2,c:0},{r:3,c:0}],
            green: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            blue: [{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:3,c:4},{r:4,c:4}],
            yellow: [{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3}],
            orange: [{r:1,c:2},{r:1,c:3},{r:2,c:3},{r:2,c:2}]
        }
    },
    // Seviye 128 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'orange' }, { r: 2, c: 1, color: 'orange' },
            { r: 1, c: 1, color: 'green' }, { r: 0, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 1, c: 4, color: 'blue' },
            { r: 2, c: 4, color: 'red' }, { r: 3, c: 2, color: 'red' },
            { r: 3, c: 3, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' }
        ],
        solution: {
            red: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:3,c:2}],
            green: [{r:1,c:1},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2}],
            blue: [{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            yellow: [{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2}],
            orange: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1}]
        }
    },
    // Seviye 129 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 4, color: 'green' }, { r: 0, c: 3, color: 'green' },
            { r: 0, c: 2, color: 'blue' }, { r: 1, c: 0, color: 'blue' },
            { r: 1, c: 1, color: 'orange' }, { r: 2, c: 2, color: 'orange' },
            { r: 2, c: 1, color: 'red' }, { r: 3, c: 1, color: 'red' },
            { r: 3, c: 2, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            green: [{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3}],
            blue: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0}],
            yellow: [{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:3,c:4},{r:4,c:4}],
            orange: [{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3},{r:2,c:2}]
        }
    },
    // Seviye 130 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 0, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 4, c: 4, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' },
            { r: 1, c: 0, color: 'orange' }, { r: 1, c: 1, color: 'orange' },
            { r: 2, c: 1, color: 'green' }, { r: 1, c: 4, color: 'green' },
            { r: 0, c: 4, color: 'red' }, { r: 1, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:0,c:4},{r:0,c:3},{r:0,c:2},{r:1,c:2},{r:1,c:3}],
            green: [{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4}],
            blue: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3}],
            yellow: [{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:3,c:0},{r:2,c:0}],
            orange: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}]
        }
    },
    // Seviye 131 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 3, color: 'orange' }, { r: 3, c: 2, color: 'orange' },
            { r: 3, c: 1, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 0, c: 3, color: 'green' }, { r: 0, c: 1, color: 'green' },
            { r: 0, c: 0, color: 'blue' }, { r: 1, c: 1, color: 'blue' }
        ],
        solution: {
            red: [{r:3,c:1},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4}],
            green: [{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:0,c:2},{r:0,c:1}],
            blue: [{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            yellow: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2}],
            orange: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}]
        }
    },
    // Seviye 132 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 3, c: 1, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 4, c: 1, color: 'red' }, { r: 4, c: 3, color: 'red' },
            { r: 4, c: 4, color: 'blue' }, { r: 0, c: 4, color: 'blue' },
            { r: 0, c: 3, color: 'orange' }, { r: 1, c: 2, color: 'orange' },
            { r: 0, c: 2, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' }
        ],
        solution: {
            red: [{r:4,c:1},{r:4,c:2},{r:4,c:3}],
            green: [{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            blue: [{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4}],
            yellow: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0}],
            orange: [{r:0,c:3},{r:1,c:3},{r:1,c:2}]
        }
    },
    // Seviye 133 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 0, color: 'orange' }, { r: 4, c: 2, color: 'orange' },
            { r: 4, c: 3, color: 'yellow' }, { r: 3, c: 2, color: 'yellow' },
            { r: 3, c: 1, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'red' }, { r: 2, c: 4, color: 'red' },
            { r: 1, c: 4, color: 'blue' }, { r: 0, c: 2, color: 'blue' }
        ],
        solution: {
            red: [{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            green: [{r:3,c:1},{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}],
            blue: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:0,c:2}],
            yellow: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}],
            orange: [{r:4,c:0},{r:4,c:1},{r:4,c:2}]
        }
    },
    // Seviye 134 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 2, color: 'blue' }, { r: 1, c: 1, color: 'blue' },
            { r: 2, c: 1, color: 'orange' }, { r: 3, c: 2, color: 'orange' },
            { r: 4, c: 2, color: 'green' }, { r: 3, c: 4, color: 'green' },
            { r: 3, c: 3, color: 'red' }, { r: 1, c: 4, color: 'red' },
            { r: 1, c: 3, color: 'yellow' }, { r: 0, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:3,c:3},{r:2,c:3},{r:2,c:4},{r:1,c:4}],
            green: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4}],
            blue: [{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            yellow: [{r:1,c:3},{r:0,c:3},{r:0,c:4}],
            orange: [{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2}]
        }
    },
    // Seviye 135 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 4, color: 'green' }, { r: 1, c: 4, color: 'green' },
            { r: 0, c: 4, color: 'orange' }, { r: 3, c: 3, color: 'orange' },
            { r: 4, c: 3, color: 'yellow' }, { r: 0, c: 1, color: 'yellow' },
            { r: 0, c: 0, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 4, c: 0, color: 'blue' }, { r: 3, c: 1, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0},{r:3,c:0}],
            green: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4}],
            blue: [{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            yellow: [{r:4,c:3},{r:4,c:2},{r:3,c:2},{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1}],
            orange: [{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3}]
        }
    },
    // Seviye 136 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 4, color: 'orange' }, { r: 0, c: 4, color: 'orange' },
            { r: 0, c: 3, color: 'green' }, { r: 3, c: 3, color: 'green' },
            { r: 4, c: 3, color: 'yellow' }, { r: 1, c: 2, color: 'yellow' },
            { r: 0, c: 2, color: 'red' }, { r: 0, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'blue' }, { r: 4, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:2},{r:0,c:1},{r:0,c:0}],
            green: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3}],
            blue: [{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:3,c:1},{r:4,c:1},{r:4,c:0}],
            yellow: [{r:4,c:3},{r:4,c:2},{r:3,c:2},{r:2,c:2},{r:1,c:2}],
            orange: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4},{r:0,c:4}]
        }
    },
    // Seviye 137 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 2, c: 0, color: 'green' }, { r: 3, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 3, color: 'blue' }, { r: 1, c: 2, color: 'blue' },
            { r: 2, c: 2, color: 'orange' }, { r: 4, c: 3, color: 'orange' },
            { r: 4, c: 2, color: 'yellow' }, { r: 3, c: 3, color: 'yellow' }
        ],
        solution: {
            red: [{r:2,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2}],
            green: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            blue: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2}],
            yellow: [{r:4,c:2},{r:3,c:2},{r:3,c:3}],
            orange: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}]
        }
    },
    // Seviye 138 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 4, c: 2, color: 'red' }, { r: 3, c: 1, color: 'red' },
            { r: 4, c: 1, color: 'blue' }, { r: 3, c: 0, color: 'blue' },
            { r: 2, c: 0, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' },
            { r: 1, c: 4, color: 'orange' }, { r: 1, c: 2, color: 'orange' },
            { r: 0, c: 2, color: 'green' }, { r: 0, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2},{r:3,c:1}],
            green: [{r:0,c:2},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0}],
            blue: [{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            yellow: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            orange: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2}]
        }
    },
    // Seviye 139 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 3, c: 3, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 4, c: 1, color: 'orange' }, { r: 2, c: 0, color: 'orange' },
            { r: 1, c: 0, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 3, color: 'yellow' }, { r: 1, c: 3, color: 'yellow' },
            { r: 1, c: 2, color: 'blue' }, { r: 3, c: 1, color: 'blue' }
        ],
        solution: {
            red: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2}],
            green: [{r:3,c:3},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2}],
            blue: [{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:3,c:1}],
            yellow: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:2,c:3},{r:1,c:3}],
            orange: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0}]
        }
    },
    // Seviye 140 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 3, c: 1, color: 'yellow' }, { r: 0, c: 2, color: 'yellow' },
            { r: 1, c: 2, color: 'red' }, { r: 4, c: 2, color: 'red' },
            { r: 4, c: 3, color: 'orange' }, { r: 2, c: 4, color: 'orange' },
            { r: 1, c: 4, color: 'blue' }, { r: 1, c: 3, color: 'blue' }
        ],
        solution: {
            red: [{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            green: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            blue: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}],
            yellow: [{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:0,c:1},{r:0,c:2}],
            orange: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:2,c:4}]
        }
    },
    // Seviye 141 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 3, c: 1, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 4, c: 1, color: 'red' }, { r: 3, c: 2, color: 'red' },
            { r: 2, c: 2, color: 'orange' }, { r: 2, c: 0, color: 'orange' },
            { r: 1, c: 0, color: 'blue' }, { r: 0, c: 4, color: 'blue' },
            { r: 1, c: 4, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}],
            green: [{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            blue: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            yellow: [{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4}],
            orange: [{r:2,c:2},{r:2,c:1},{r:2,c:0}]
        }
    },
    // Seviye 142 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 2, color: 'green' }, { r: 0, c: 4, color: 'green' },
            { r: 1, c: 4, color: 'blue' }, { r: 4, c: 1, color: 'blue' },
            { r: 4, c: 0, color: 'orange' }, { r: 3, c: 3, color: 'orange' },
            { r: 2, c: 3, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'yellow' }, { r: 0, c: 0, color: 'yellow' }
        ],
        solution: {
            red: [{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:2,c:0}],
            green: [{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            blue: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1}],
            yellow: [{r:1,c:0},{r:1,c:1},{r:0,c:1},{r:0,c:0}],
            orange: [{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3}]
        }
    },
    // Seviye 143 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 3, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 4, c: 2, color: 'blue' }, { r: 3, c: 3, color: 'blue' },
            { r: 2, c: 3, color: 'yellow' }, { r: 1, c: 1, color: 'yellow' },
            { r: 1, c: 0, color: 'orange' }, { r: 2, c: 0, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2}],
            green: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}],
            blue: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3}],
            yellow: [{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:1,c:1}],
            orange: [{r:1,c:0},{r:2,c:0}]
        }
    },
    // Seviye 144 — ORTA
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 1, c: 3, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' },
            { r: 3, c: 4, color: 'orange' }, { r: 4, c: 0, color: 'orange' },
            { r: 3, c: 0, color: 'red' }, { r: 3, c: 3, color: 'red' },
            { r: 2, c: 3, color: 'green' }, { r: 2, c: 0, color: 'green' },
            { r: 1, c: 0, color: 'blue' }, { r: 0, c: 2, color: 'blue' }
        ],
        solution: {
            red: [{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3}],
            green: [{r:2,c:3},{r:2,c:2},{r:2,c:1},{r:2,c:0}],
            blue: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2}],
            yellow: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4}],
            orange: [{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:4,c:1},{r:4,c:0}]
        }
    },
    // Seviye 145 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 3, color: 'red' }, { r: 3, c: 4, color: 'red' },
            { r: 2, c: 4, color: 'yellow' }, { r: 0, c: 3, color: 'yellow' },
            { r: 0, c: 2, color: 'orange' }, { r: 4, c: 2, color: 'orange' },
            { r: 4, c: 1, color: 'blue' }, { r: 4, c: 0, color: 'blue' },
            { r: 3, c: 0, color: 'green' }, { r: 1, c: 1, color: 'green' }
        ],
        solution: {
            red: [{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4}],
            green: [{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}],
            blue: [{r:4,c:1},{r:4,c:0}],
            yellow: [{r:2,c:4},{r:2,c:3},{r:1,c:3},{r:1,c:4},{r:0,c:4},{r:0,c:3}],
            orange: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}]
        }
    },
    // Seviye 146 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 2, c: 2, color: 'blue' }, { r: 1, c: 0, color: 'blue' },
            { r: 1, c: 1, color: 'yellow' }, { r: 3, c: 0, color: 'yellow' },
            { r: 4, c: 0, color: 'red' }, { r: 3, c: 2, color: 'red' },
            { r: 4, c: 2, color: 'green' }, { r: 2, c: 4, color: 'green' },
            { r: 1, c: 4, color: 'orange' }, { r: 0, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2}],
            green: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:2,c:4}],
            blue: [{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0}],
            yellow: [{r:1,c:1},{r:2,c:1},{r:2,c:0},{r:3,c:0}],
            orange: [{r:1,c:4},{r:1,c:3},{r:0,c:3},{r:0,c:4}]
        }
    },
    // Seviye 147 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 1, c: 3, color: 'green' }, { r: 1, c: 4, color: 'green' },
            { r: 2, c: 4, color: 'orange' }, { r: 3, c: 3, color: 'orange' },
            { r: 2, c: 3, color: 'yellow' }, { r: 0, c: 1, color: 'yellow' },
            { r: 0, c: 0, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 3, c: 0, color: 'blue' }, { r: 4, c: 2, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0}],
            green: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            blue: [{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:2,c:3},{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3}]
        }
    },
    // Seviye 148 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 1, c: 3, color: 'blue' }, { r: 1, c: 4, color: 'blue' },
            { r: 2, c: 4, color: 'green' }, { r: 3, c: 4, color: 'green' },
            { r: 4, c: 4, color: 'red' }, { r: 1, c: 2, color: 'red' },
            { r: 0, c: 2, color: 'yellow' }, { r: 2, c: 1, color: 'yellow' },
            { r: 2, c: 0, color: 'orange' }, { r: 4, c: 2, color: 'orange' }
        ],
        solution: {
            red: [{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:2,c:2},{r:1,c:2}],
            green: [{r:2,c:4},{r:3,c:4}],
            blue: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            yellow: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1}],
            orange: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}]
        }
    },
    // Seviye 149 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 2, c: 0, color: 'red' }, { r: 4, c: 1, color: 'red' },
            { r: 4, c: 2, color: 'orange' }, { r: 3, c: 2, color: 'orange' },
            { r: 3, c: 1, color: 'blue' }, { r: 2, c: 4, color: 'blue' },
            { r: 1, c: 4, color: 'green' }, { r: 0, c: 2, color: 'green' },
            { r: 0, c: 1, color: 'yellow' }, { r: 1, c: 1, color: 'yellow' }
        ],
        solution: {
            red: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            green: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:0,c:2}],
            blue: [{r:3,c:1},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            yellow: [{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            orange: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:3,c:2}]
        }
    },
    // Seviye 150 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 1, color: 'yellow' }, { r: 4, c: 0, color: 'yellow' },
            { r: 3, c: 0, color: 'green' }, { r: 1, c: 0, color: 'green' },
            { r: 0, c: 0, color: 'blue' }, { r: 0, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'orange' }, { r: 2, c: 3, color: 'orange' },
            { r: 2, c: 4, color: 'red' }, { r: 4, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:3,c:2},{r:4,c:2}],
            green: [{r:3,c:0},{r:2,c:0},{r:1,c:0}],
            blue: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:1,c:2},{r:0,c:2}],
            yellow: [{r:3,c:1},{r:4,c:1},{r:4,c:0}],
            orange: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3}]
        }
    },
    // Seviye 151 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 2, c: 2, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 1, c: 2, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'red' }, { r: 2, c: 3, color: 'red' },
            { r: 2, c: 4, color: 'orange' }, { r: 4, c: 2, color: 'orange' },
            { r: 4, c: 1, color: 'yellow' }, { r: 3, c: 1, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3}],
            green: [{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}],
            blue: [{r:1,c:2},{r:0,c:2},{r:0,c:3}],
            yellow: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:3,c:2},{r:4,c:2}]
        }
    },
    // Seviye 152 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 1, color: 'red' }, { r: 4, c: 2, color: 'red' },
            { r: 3, c: 2, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 4, c: 4, color: 'blue' }, { r: 2, c: 2, color: 'blue' },
            { r: 2, c: 1, color: 'yellow' }, { r: 1, c: 1, color: 'yellow' },
            { r: 1, c: 2, color: 'orange' }, { r: 0, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:3,c:1},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2}],
            green: [{r:3,c:2},{r:3,c:3},{r:4,c:3}],
            blue: [{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:2,c:3},{r:2,c:2}],
            yellow: [{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}],
            orange: [{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:4},{r:0,c:4}]
        }
    },
    // Seviye 153 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 2, c: 0, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 3, color: 'red' }, { r: 3, c: 3, color: 'red' },
            { r: 3, c: 2, color: 'orange' }, { r: 0, c: 3, color: 'orange' },
            { r: 1, c: 3, color: 'green' }, { r: 0, c: 2, color: 'green' },
            { r: 0, c: 1, color: 'blue' }, { r: 0, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3}],
            green: [{r:1,c:3},{r:1,c:2},{r:0,c:2}],
            blue: [{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0}],
            yellow: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2}],
            orange: [{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3}]
        }
    },
    // Seviye 154 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 1, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 3, c: 2, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 0, c: 0, color: 'blue' }, { r: 1, c: 4, color: 'blue' },
            { r: 1, c: 3, color: 'orange' }, { r: 2, c: 4, color: 'orange' },
            { r: 3, c: 4, color: 'green' }, { r: 3, c: 3, color: 'green' }
        ],
        solution: {
            red: [{r:3,c:2},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:1,c:0}],
            green: [{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3}],
            blue: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            yellow: [{r:3,c:1},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2}],
            orange: [{r:1,c:3},{r:2,c:3},{r:2,c:4}]
        }
    },
    // Seviye 155 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 1, c: 1, color: 'green' }, { r: 0, c: 0, color: 'green' },
            { r: 0, c: 1, color: 'blue' }, { r: 0, c: 4, color: 'blue' },
            { r: 1, c: 4, color: 'red' }, { r: 2, c: 1, color: 'red' },
            { r: 2, c: 0, color: 'orange' }, { r: 3, c: 2, color: 'orange' },
            { r: 4, c: 2, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:1,c:4},{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:2,c:1}],
            green: [{r:1,c:1},{r:1,c:0},{r:0,c:0}],
            blue: [{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:1,c:3},{r:0,c:3},{r:0,c:4}],
            yellow: [{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:3,c:4},{r:4,c:4}],
            orange: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2}]
        }
    },
    // Seviye 156 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 1, c: 1, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 3, c: 0, color: 'green' }, { r: 3, c: 1, color: 'green' },
            { r: 3, c: 2, color: 'orange' }, { r: 4, c: 3, color: 'orange' },
            { r: 4, c: 4, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' },
            { r: 1, c: 4, color: 'blue' }, { r: 1, c: 3, color: 'blue' }
        ],
        solution: {
            red: [{r:1,c:1},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:2,c:0}],
            green: [{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            blue: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}],
            yellow: [{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:2,c:4}],
            orange: [{r:3,c:2},{r:4,c:2},{r:4,c:3}]
        }
    },
    // Seviye 157 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 3, color: 'yellow' }, { r: 3, c: 1, color: 'yellow' },
            { r: 4, c: 1, color: 'red' }, { r: 2, c: 1, color: 'red' },
            { r: 2, c: 2, color: 'orange' }, { r: 1, c: 4, color: 'orange' },
            { r: 0, c: 4, color: 'green' }, { r: 1, c: 2, color: 'green' },
            { r: 0, c: 2, color: 'blue' }, { r: 1, c: 1, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:2,c:1}],
            green: [{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2}],
            blue: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            yellow: [{r:3,c:3},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:3,c:2},{r:3,c:1}],
            orange: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4}]
        }
    },
    // Seviye 158 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 2, c: 2, color: 'orange' }, { r: 4, c: 1, color: 'orange' },
            { r: 4, c: 0, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 0, c: 0, color: 'yellow' }, { r: 1, c: 1, color: 'yellow' },
            { r: 1, c: 2, color: 'green' }, { r: 0, c: 3, color: 'green' },
            { r: 0, c: 4, color: 'blue' }, { r: 3, c: 3, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:0},{r:1,c:0}],
            green: [{r:1,c:2},{r:0,c:2},{r:0,c:3}],
            blue: [{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3}],
            yellow: [{r:0,c:0},{r:0,c:1},{r:1,c:1}],
            orange: [{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:1}]
        }
    },
    // Seviye 159 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 2, c: 2, color: 'blue' }, { r: 2, c: 4, color: 'blue' },
            { r: 1, c: 4, color: 'yellow' }, { r: 1, c: 2, color: 'yellow' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 4, c: 1, color: 'orange' }, { r: 4, c: 2, color: 'orange' },
            { r: 4, c: 3, color: 'red' }, { r: 4, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:4,c:3},{r:3,c:3},{r:3,c:4},{r:4,c:4}],
            green: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            blue: [{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            yellow: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2}],
            orange: [{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}]
        }
    },
    // Seviye 160 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 1, c: 3, color: 'yellow' }, { r: 0, c: 3, color: 'yellow' },
            { r: 0, c: 2, color: 'red' }, { r: 2, c: 3, color: 'red' },
            { r: 2, c: 4, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 3, c: 3, color: 'orange' }, { r: 2, c: 1, color: 'orange' },
            { r: 2, c: 0, color: 'green' }, { r: 0, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:3}],
            green: [{r:2,c:0},{r:1,c:0},{r:1,c:1},{r:0,c:1},{r:0,c:0}],
            blue: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}],
            yellow: [{r:1,c:3},{r:1,c:4},{r:0,c:4},{r:0,c:3}],
            orange: [{r:3,c:3},{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1}]
        }
    },
    // Seviye 161 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 1, color: 'green' }, { r: 3, c: 2, color: 'green' },
            { r: 2, c: 2, color: 'yellow' }, { r: 1, c: 0, color: 'yellow' },
            { r: 0, c: 0, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'orange' }, { r: 3, c: 4, color: 'orange' },
            { r: 3, c: 3, color: 'red' }, { r: 4, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:3,c:3},{r:4,c:3},{r:4,c:4}],
            green: [{r:3,c:1},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:3,c:2}],
            blue: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3}],
            yellow: [{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:1,c:0}],
            orange: [{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4},{r:3,c:4}]
        }
    },
    // Seviye 162 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 2, color: 'blue' }, { r: 1, c: 3, color: 'blue' },
            { r: 1, c: 2, color: 'green' }, { r: 2, c: 3, color: 'green' },
            { r: 2, c: 4, color: 'yellow' }, { r: 4, c: 1, color: 'yellow' },
            { r: 4, c: 0, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'orange' }, { r: 1, c: 1, color: 'orange' }
        ],
        solution: {
            red: [{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:0}],
            green: [{r:1,c:2},{r:2,c:2},{r:2,c:3}],
            blue: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3}],
            yellow: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:3,c:2},{r:4,c:2},{r:4,c:1}],
            orange: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}]
        }
    },
    // Seviye 163 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 1, color: 'yellow' }, { r: 4, c: 0, color: 'yellow' },
            { r: 4, c: 1, color: 'red' }, { r: 2, c: 1, color: 'red' },
            { r: 2, c: 0, color: 'green' }, { r: 0, c: 0, color: 'green' },
            { r: 0, c: 1, color: 'orange' }, { r: 2, c: 4, color: 'orange' },
            { r: 3, c: 4, color: 'blue' }, { r: 4, c: 4, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:2,c:2},{r:2,c:1}],
            green: [{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            blue: [{r:3,c:4},{r:3,c:3},{r:4,c:3},{r:4,c:4}],
            yellow: [{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            orange: [{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4}]
        }
    },
    // Seviye 164 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 1, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 4, c: 2, color: 'yellow' }, { r: 3, c: 4, color: 'yellow' },
            { r: 3, c: 3, color: 'blue' }, { r: 1, c: 0, color: 'blue' },
            { r: 0, c: 0, color: 'orange' }, { r: 0, c: 3, color: 'orange' },
            { r: 0, c: 4, color: 'red' }, { r: 1, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:2,c:3},{r:1,c:3}],
            green: [{r:3,c:1},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            blue: [{r:3,c:3},{r:3,c:2},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:1,c:0}],
            yellow: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4}],
            orange: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3}]
        }
    },
    // Seviye 165 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 4, c: 2, color: 'blue' }, { r: 3, c: 4, color: 'blue' },
            { r: 3, c: 3, color: 'orange' }, { r: 1, c: 4, color: 'orange' },
            { r: 0, c: 4, color: 'red' }, { r: 1, c: 2, color: 'red' },
            { r: 0, c: 2, color: 'yellow' }, { r: 2, c: 1, color: 'yellow' },
            { r: 2, c: 0, color: 'green' }, { r: 4, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2}],
            green: [{r:2,c:0},{r:3,c:0},{r:3,c:1},{r:4,c:1},{r:4,c:0}],
            blue: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4}],
            yellow: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1}],
            orange: [{r:3,c:3},{r:3,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4}]
        }
    },
    // Seviye 166 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 1, c: 3, color: 'yellow' }, { r: 0, c: 4, color: 'yellow' },
            { r: 1, c: 4, color: 'orange' }, { r: 2, c: 3, color: 'orange' },
            { r: 2, c: 2, color: 'blue' }, { r: 0, c: 2, color: 'blue' },
            { r: 0, c: 1, color: 'green' }, { r: 2, c: 1, color: 'green' },
            { r: 2, c: 0, color: 'red' }, { r: 4, c: 2, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}],
            green: [{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1}],
            blue: [{r:2,c:2},{r:1,c:2},{r:0,c:2}],
            yellow: [{r:1,c:3},{r:0,c:3},{r:0,c:4}],
            orange: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3}]
        }
    },
    // Seviye 167 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 2, c: 4, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 1, c: 3, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 4, c: 1, color: 'green' }, { r: 1, c: 0, color: 'green' },
            { r: 1, c: 1, color: 'orange' }, { r: 0, c: 0, color: 'orange' }
        ],
        solution: {
            red: [{r:1,c:3},{r:1,c:4},{r:0,c:4}],
            green: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:0},{r:1,c:0}],
            blue: [{r:0,c:3},{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3}],
            orange: [{r:1,c:1},{r:0,c:1},{r:0,c:0}]
        }
    },
    // Seviye 168 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 1, c: 3, color: 'blue' }, { r: 1, c: 4, color: 'blue' },
            { r: 2, c: 4, color: 'green' }, { r: 0, c: 1, color: 'green' },
            { r: 0, c: 0, color: 'orange' }, { r: 2, c: 1, color: 'orange' },
            { r: 2, c: 0, color: 'red' }, { r: 4, c: 1, color: 'red' },
            { r: 3, c: 1, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            green: [{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1}],
            blue: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            yellow: [{r:3,c:1},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:3,c:4},{r:4,c:4}],
            orange: [{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1}]
        }
    },
    // Seviye 169 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 2, c: 4, color: 'red' }, { r: 0, c: 3, color: 'red' },
            { r: 1, c: 3, color: 'green' }, { r: 1, c: 0, color: 'green' },
            { r: 1, c: 1, color: 'blue' }, { r: 2, c: 0, color: 'blue' },
            { r: 3, c: 0, color: 'orange' }, { r: 4, c: 1, color: 'orange' },
            { r: 3, c: 1, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3}],
            green: [{r:1,c:3},{r:2,c:3},{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0}],
            blue: [{r:1,c:1},{r:2,c:1},{r:2,c:0}],
            yellow: [{r:3,c:1},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:3,c:4},{r:4,c:4}],
            orange: [{r:3,c:0},{r:4,c:0},{r:4,c:1}]
        }
    },
    // Seviye 170 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 2, c: 2, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'yellow' }, { r: 4, c: 1, color: 'yellow' },
            { r: 3, c: 1, color: 'red' }, { r: 4, c: 3, color: 'red' },
            { r: 4, c: 4, color: 'blue' }, { r: 2, c: 3, color: 'blue' },
            { r: 2, c: 4, color: 'orange' }, { r: 0, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:3,c:1},{r:3,c:2},{r:4,c:2},{r:4,c:3}],
            green: [{r:2,c:2},{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            blue: [{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3}],
            yellow: [{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            orange: [{r:2,c:4},{r:1,c:4},{r:1,c:3},{r:0,c:3},{r:0,c:4}]
        }
    },
    // Seviye 171 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 1, c: 1, color: 'blue' }, { r: 1, c: 0, color: 'blue' },
            { r: 2, c: 0, color: 'orange' }, { r: 4, c: 0, color: 'orange' },
            { r: 4, c: 1, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' },
            { r: 1, c: 2, color: 'red' }, { r: 1, c: 3, color: 'red' },
            { r: 2, c: 3, color: 'green' }, { r: 4, c: 4, color: 'green' }
        ],
        solution: {
            red: [{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3}],
            green: [{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:3,c:3},{r:4,c:3},{r:4,c:4}],
            blue: [{r:1,c:1},{r:0,c:1},{r:0,c:0},{r:1,c:0}],
            yellow: [{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:2,c:2}],
            orange: [{r:2,c:0},{r:2,c:1},{r:3,c:1},{r:3,c:0},{r:4,c:0}]
        }
    },
    // Seviye 172 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 3, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' },
            { r: 2, c: 3, color: 'green' }, { r: 1, c: 4, color: 'green' },
            { r: 0, c: 4, color: 'orange' }, { r: 1, c: 2, color: 'orange' },
            { r: 0, c: 2, color: 'red' }, { r: 0, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'blue' }, { r: 4, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:2},{r:0,c:1},{r:0,c:0}],
            green: [{r:2,c:3},{r:2,c:4},{r:1,c:4}],
            blue: [{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:3,c:1},{r:4,c:1},{r:4,c:0}],
            yellow: [{r:3,c:3},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2},{r:3,c:2},{r:2,c:2}],
            orange: [{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2}]
        }
    },
    // Seviye 173 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 1, c: 3, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 0, c: 2, color: 'orange' }, { r: 2, c: 2, color: 'orange' },
            { r: 2, c: 3, color: 'green' }, { r: 4, c: 4, color: 'green' },
            { r: 4, c: 3, color: 'yellow' }, { r: 3, c: 1, color: 'yellow' },
            { r: 2, c: 1, color: 'red' }, { r: 0, c: 0, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:1,c:1},{r:0,c:1},{r:0,c:0}],
            green: [{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            blue: [{r:1,c:3},{r:1,c:4},{r:0,c:4},{r:0,c:3}],
            yellow: [{r:4,c:3},{r:3,c:3},{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1}],
            orange: [{r:0,c:2},{r:1,c:2},{r:2,c:2}]
        }
    },
    // Seviye 174 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 2, c: 0, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'blue' }, { r: 1, c: 2, color: 'blue' },
            { r: 0, c: 2, color: 'orange' }, { r: 2, c: 4, color: 'orange' },
            { r: 3, c: 4, color: 'yellow' }, { r: 3, c: 2, color: 'yellow' },
            { r: 4, c: 2, color: 'red' }, { r: 4, c: 0, color: 'red' }
        ],
        solution: {
            red: [{r:4,c:2},{r:4,c:1},{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            green: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}],
            blue: [{r:2,c:1},{r:2,c:2},{r:1,c:2}],
            yellow: [{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:3,c:2}],
            orange: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4}]
        }
    },
    // Seviye 175 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 3, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 3, c: 2, color: 'blue' }, { r: 2, c: 4, color: 'blue' },
            { r: 1, c: 4, color: 'orange' }, { r: 1, c: 2, color: 'orange' },
            { r: 0, c: 2, color: 'red' }, { r: 2, c: 1, color: 'red' },
            { r: 2, c: 0, color: 'green' }, { r: 4, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1}],
            green: [{r:2,c:0},{r:3,c:0},{r:3,c:1},{r:4,c:1},{r:4,c:0}],
            blue: [{r:3,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            yellow: [{r:3,c:3},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:4,c:2}],
            orange: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2}]
        }
    },
    // Seviye 176 — ZOR
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 3, c: 1, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 4, c: 1, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' },
            { r: 1, c: 0, color: 'blue' }, { r: 1, c: 2, color: 'blue' },
            { r: 0, c: 2, color: 'orange' }, { r: 2, c: 3, color: 'orange' },
            { r: 2, c: 4, color: 'red' }, { r: 4, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:4},{r:3,c:4},{r:3,c:3},{r:4,c:3},{r:4,c:4}],
            green: [{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            blue: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2}],
            yellow: [{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:2,c:2},{r:2,c:1},{r:2,c:0}],
            orange: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3}]
        }
    },
    // Seviye 177 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 2, c: 2, color: 'yellow' }, { r: 4, c: 1, color: 'yellow' },
            { r: 4, c: 0, color: 'orange' }, { r: 2, c: 1, color: 'orange' },
            { r: 2, c: 0, color: 'red' }, { r: 0, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 2, c: 3, color: 'green' },
            { r: 2, c: 4, color: 'blue' }, { r: 3, c: 3, color: 'blue' }
        ],
        solution: {
            red: [{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            green: [{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3}],
            blue: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3}],
            yellow: [{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:1}],
            orange: [{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1}]
        }
    },
    // Seviye 178 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 1, c: 1, color: 'green' }, { r: 1, c: 0, color: 'green' },
            { r: 2, c: 0, color: 'red' }, { r: 1, c: 2, color: 'red' },
            { r: 0, c: 2, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 2, c: 4, color: 'orange' }, { r: 3, c: 2, color: 'orange' },
            { r: 4, c: 2, color: 'blue' }, { r: 4, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:1,c:2}],
            green: [{r:1,c:1},{r:0,c:1},{r:0,c:0},{r:1,c:0}],
            blue: [{r:4,c:2},{r:4,c:1},{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            yellow: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:3,c:2}]
        }
    },
    // Seviye 179 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 2, c: 0, color: 'red' }, { r: 0, c: 3, color: 'red' },
            { r: 0, c: 4, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' },
            { r: 2, c: 3, color: 'orange' }, { r: 4, c: 4, color: 'orange' },
            { r: 4, c: 3, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 4, c: 1, color: 'blue' }, { r: 3, c: 1, color: 'blue' }
        ],
        solution: {
            red: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3}],
            green: [{r:4,c:3},{r:3,c:3},{r:3,c:2},{r:4,c:2}],
            blue: [{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:2,c:2}],
            orange: [{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 180 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 1, c: 1, color: 'green' }, { r: 1, c: 2, color: 'green' },
            { r: 2, c: 2, color: 'yellow' }, { r: 4, c: 0, color: 'yellow' },
            { r: 4, c: 1, color: 'orange' }, { r: 3, c: 2, color: 'orange' },
            { r: 4, c: 2, color: 'blue' }, { r: 2, c: 3, color: 'blue' },
            { r: 2, c: 4, color: 'red' }, { r: 0, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:4},{r:1,c:4},{r:1,c:3},{r:0,c:3},{r:0,c:4}],
            green: [{r:1,c:1},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2}],
            blue: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3}],
            yellow: [{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            orange: [{r:4,c:1},{r:3,c:1},{r:3,c:2}]
        }
    },
    // Seviye 181 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 3, c: 1, color: 'orange' }, { r: 3, c: 2, color: 'orange' },
            { r: 3, c: 3, color: 'green' }, { r: 4, c: 4, color: 'green' },
            { r: 3, c: 4, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'yellow' }, { r: 0, c: 3, color: 'yellow' },
            { r: 0, c: 4, color: 'blue' }, { r: 1, c: 3, color: 'blue' }
        ],
        solution: {
            red: [{r:3,c:4},{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:2,c:1},{r:2,c:0}],
            green: [{r:3,c:3},{r:4,c:3},{r:4,c:4}],
            blue: [{r:0,c:4},{r:1,c:4},{r:1,c:3}],
            yellow: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3}],
            orange: [{r:3,c:1},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:3,c:2}]
        }
    },
    // Seviye 182 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 2, c: 2, color: 'green' }, { r: 0, c: 3, color: 'green' },
            { r: 1, c: 3, color: 'blue' }, { r: 0, c: 1, color: 'blue' },
            { r: 0, c: 0, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 4, c: 0, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 3, color: 'orange' }, { r: 3, c: 3, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0},{r:3,c:0}],
            green: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3}],
            blue: [{r:1,c:3},{r:1,c:2},{r:0,c:2},{r:0,c:1}],
            yellow: [{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}],
            orange: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3}]
        }
    },
    // Seviye 183 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 2, c: 0, color: 'blue' }, { r: 0, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'red' }, { r: 3, c: 4, color: 'red' },
            { r: 4, c: 4, color: 'yellow' }, { r: 3, c: 3, color: 'yellow' },
            { r: 2, c: 3, color: 'green' }, { r: 2, c: 2, color: 'green' },
            { r: 3, c: 2, color: 'orange' }, { r: 4, c: 0, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4}],
            green: [{r:2,c:3},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:2,c:2}],
            blue: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2}],
            yellow: [{r:4,c:4},{r:4,c:3},{r:3,c:3}],
            orange: [{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:3,c:1},{r:3,c:0},{r:4,c:0}]
        }
    },
    // Seviye 184 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 4, c: 2, color: 'blue' }, { r: 4, c: 0, color: 'blue' },
            { r: 3, c: 0, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' },
            { r: 1, c: 0, color: 'green' }, { r: 0, c: 3, color: 'green' },
            { r: 0, c: 4, color: 'orange' }, { r: 1, c: 3, color: 'orange' },
            { r: 2, c: 3, color: 'red' }, { r: 3, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3}],
            green: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3}],
            blue: [{r:4,c:2},{r:4,c:1},{r:4,c:0}],
            yellow: [{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:2,c:2},{r:2,c:1},{r:2,c:0}],
            orange: [{r:0,c:4},{r:1,c:4},{r:1,c:3}]
        }
    },
    // Seviye 185 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 4, c: 2, color: 'blue' }, { r: 3, c: 3, color: 'blue' },
            { r: 3, c: 2, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 3, c: 0, color: 'green' }, { r: 0, c: 0, color: 'green' },
            { r: 0, c: 1, color: 'orange' }, { r: 1, c: 2, color: 'orange' },
            { r: 0, c: 2, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:3,c:2},{r:3,c:1},{r:4,c:1},{r:4,c:0}],
            green: [{r:3,c:0},{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            blue: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3}],
            yellow: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4}],
            orange: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:1,c:2}]
        }
    },
    // Seviye 186 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 2, c: 0, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' },
            { r: 3, c: 2, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 4, c: 4, color: 'orange' }, { r: 2, c: 4, color: 'orange' },
            { r: 1, c: 4, color: 'blue' }, { r: 0, c: 1, color: 'blue' },
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 1, color: 'red' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:1,c:1}],
            green: [{r:3,c:2},{r:4,c:2},{r:4,c:3}],
            blue: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:0,c:2},{r:0,c:1}],
            yellow: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1},{r:2,c:2}],
            orange: [{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:2,c:4}]
        }
    },
    // Seviye 187 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 3, c: 3, color: 'orange' }, { r: 4, c: 3, color: 'orange' },
            { r: 4, c: 2, color: 'red' }, { r: 2, c: 3, color: 'red' },
            { r: 2, c: 4, color: 'blue' }, { r: 1, c: 3, color: 'blue' },
            { r: 1, c: 2, color: 'green' }, { r: 1, c: 0, color: 'green' },
            { r: 1, c: 1, color: 'yellow' }, { r: 3, c: 1, color: 'yellow' }
        ],
        solution: {
            red: [{r:4,c:2},{r:3,c:2},{r:2,c:2},{r:2,c:3}],
            green: [{r:1,c:2},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0}],
            blue: [{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}],
            yellow: [{r:1,c:1},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}],
            orange: [{r:3,c:3},{r:3,c:4},{r:4,c:4},{r:4,c:3}]
        }
    },
    // Seviye 188 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 3, c: 3, color: 'green' }, { r: 3, c: 4, color: 'green' },
            { r: 2, c: 4, color: 'yellow' }, { r: 0, c: 4, color: 'yellow' },
            { r: 0, c: 3, color: 'orange' }, { r: 1, c: 0, color: 'orange' },
            { r: 2, c: 0, color: 'blue' }, { r: 2, c: 1, color: 'blue' },
            { r: 1, c: 1, color: 'red' }, { r: 1, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:1,c:1},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:1,c:3}],
            green: [{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4}],
            blue: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:3,c:1},{r:2,c:1}],
            yellow: [{r:2,c:4},{r:1,c:4},{r:0,c:4}],
            orange: [{r:0,c:3},{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0}]
        }
    },
    // Seviye 189 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 2, c: 2, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 4, c: 1, color: 'red' }, { r: 3, c: 2, color: 'red' },
            { r: 4, c: 2, color: 'yellow' }, { r: 3, c: 3, color: 'yellow' },
            { r: 2, c: 3, color: 'orange' }, { r: 1, c: 2, color: 'orange' },
            { r: 0, c: 2, color: 'blue' }, { r: 0, c: 0, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:1},{r:3,c:1},{r:3,c:2}],
            green: [{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            blue: [{r:0,c:2},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:0,c:0}],
            yellow: [{r:4,c:2},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3}],
            orange: [{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3},{r:1,c:2}]
        }
    },
    // Seviye 190 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 0, c: 2, color: 'yellow' }, { r: 0, c: 4, color: 'yellow' },
            { r: 1, c: 4, color: 'orange' }, { r: 2, c: 4, color: 'orange' },
            { r: 3, c: 4, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 3, c: 3, color: 'blue' }, { r: 3, c: 1, color: 'blue' },
            { r: 2, c: 1, color: 'red' }, { r: 0, c: 0, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:1,c:1},{r:0,c:1},{r:0,c:0}],
            green: [{r:3,c:4},{r:4,c:4},{r:4,c:3}],
            blue: [{r:3,c:3},{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:3,c:1}],
            yellow: [{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            orange: [{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:2,c:4}]
        }
    },
    // Seviye 191 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 0, c: 2, color: 'yellow' }, { r: 1, c: 2, color: 'yellow' },
            { r: 2, c: 2, color: 'orange' }, { r: 3, c: 0, color: 'orange' },
            { r: 4, c: 0, color: 'red' }, { r: 4, c: 4, color: 'red' },
            { r: 3, c: 4, color: 'green' }, { r: 2, c: 3, color: 'green' },
            { r: 2, c: 4, color: 'blue' }, { r: 0, c: 4, color: 'blue' }
        ],
        solution: {
            red: [{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:4,c:4}],
            green: [{r:3,c:4},{r:3,c:3},{r:2,c:3}],
            blue: [{r:2,c:4},{r:1,c:4},{r:1,c:3},{r:0,c:3},{r:0,c:4}],
            yellow: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:1,c:2}],
            orange: [{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:3,c:0}]
        }
    },
    // Seviye 192 — UZMAN
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 2, c: 2, color: 'green' }, { r: 4, c: 4, color: 'green' },
            { r: 3, c: 4, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 1, c: 3, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 0, c: 0, color: 'yellow' }, { r: 2, c: 0, color: 'yellow' },
            { r: 3, c: 0, color: 'orange' }, { r: 4, c: 0, color: 'orange' }
        ],
        solution: {
            red: [{r:1,c:3},{r:1,c:2},{r:0,c:2},{r:0,c:1}],
            green: [{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:4,c:4}],
            blue: [{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3}],
            yellow: [{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0}],
            orange: [{r:3,c:0},{r:3,c:1},{r:4,c:1},{r:4,c:0}]
        }
    },
    // Seviye 193 — EFSANE
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 4, c: 2, color: 'blue' }, { r: 4, c: 1, color: 'blue' },
            { r: 4, c: 0, color: 'green' }, { r: 2, c: 2, color: 'green' },
            { r: 2, c: 1, color: 'yellow' }, { r: 0, c: 2, color: 'yellow' },
            { r: 0, c: 3, color: 'orange' }, { r: 2, c: 3, color: 'orange' },
            { r: 2, c: 4, color: 'red' }, { r: 4, c: 4, color: 'red' }
        ],
        solution: {
            red: [{r:2,c:4},{r:3,c:4},{r:3,c:3},{r:4,c:3},{r:4,c:4}],
            green: [{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:2,c:2}],
            blue: [{r:4,c:2},{r:4,c:1}],
            yellow: [{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2}],
            orange: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3}]
        }
    },
    // Seviye 194 — EFSANE
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 3, c: 1, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 4, c: 2, color: 'red' }, { r: 2, c: 1, color: 'red' },
            { r: 2, c: 0, color: 'blue' }, { r: 1, c: 1, color: 'blue' },
            { r: 1, c: 2, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 2, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:4,c:2},{r:3,c:2},{r:2,c:2},{r:2,c:1}],
            green: [{r:3,c:1},{r:3,c:0},{r:4,c:0},{r:4,c:1}],
            blue: [{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1}],
            yellow: [{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3}],
            orange: [{r:2,c:4},{r:3,c:4},{r:3,c:3},{r:4,c:3},{r:4,c:4}]
        }
    },
    // Seviye 195 — EFSANE
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 2, c: 2, color: 'blue' }, { r: 0, c: 0, color: 'blue' },
            { r: 0, c: 1, color: 'orange' }, { r: 0, c: 2, color: 'orange' },
            { r: 0, c: 3, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 2, c: 4, color: 'red' }, { r: 3, c: 2, color: 'red' },
            { r: 4, c: 2, color: 'green' }, { r: 4, c: 0, color: 'green' }
        ],
        solution: {
            red: [{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:3,c:2}],
            green: [{r:4,c:2},{r:4,c:1},{r:3,c:1},{r:3,c:0},{r:4,c:0}],
            blue: [{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0}],
            yellow: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3}],
            orange: [{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2}]
        }
    },
    // Seviye 196 — EFSANE
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 4, c: 4, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 4, c: 2, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 3, c: 1, color: 'yellow' }, { r: 2, c: 2, color: 'yellow' },
            { r: 2, c: 1, color: 'blue' }, { r: 0, c: 1, color: 'blue' },
            { r: 1, c: 1, color: 'orange' }, { r: 0, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0}],
            green: [{r:4,c:4},{r:4,c:3}],
            blue: [{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:0,c:0},{r:0,c:1}],
            yellow: [{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4},{r:2,c:4},{r:2,c:3},{r:2,c:2}],
            orange: [{r:1,c:1},{r:1,c:2},{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:4},{r:0,c:4}]
        }
    },
    // Seviye 197 — EFSANE
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 0, c: 2, color: 'green' }, { r: 1, c: 0, color: 'green' },
            { r: 1, c: 1, color: 'orange' }, { r: 2, c: 2, color: 'orange' },
            { r: 2, c: 1, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 4, c: 3, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' },
            { r: 1, c: 4, color: 'red' }, { r: 1, c: 3, color: 'red' }
        ],
        solution: {
            red: [{r:1,c:4},{r:0,c:4},{r:0,c:3},{r:1,c:3}],
            green: [{r:0,c:2},{r:0,c:1},{r:0,c:0},{r:1,c:0}],
            blue: [{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:2,c:4}],
            orange: [{r:1,c:1},{r:1,c:2},{r:2,c:2}]
        }
    },
    // Seviye 198 — EFSANE
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 1, c: 1, color: 'red' }, { r: 0, c: 3, color: 'red' },
            { r: 0, c: 4, color: 'blue' }, { r: 2, c: 2, color: 'blue' },
            { r: 2, c: 3, color: 'green' }, { r: 4, c: 4, color: 'green' },
            { r: 4, c: 3, color: 'yellow' }, { r: 4, c: 1, color: 'yellow' },
            { r: 4, c: 0, color: 'orange' }, { r: 2, c: 0, color: 'orange' }
        ],
        solution: {
            red: [{r:1,c:1},{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3}],
            green: [{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            blue: [{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:2,c:2}],
            yellow: [{r:4,c:3},{r:3,c:3},{r:3,c:2},{r:4,c:2},{r:4,c:1}],
            orange: [{r:4,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:0}]
        }
    },
    // Seviye 199 — EFSANE
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 3, c: 1, color: 'blue' }, { r: 2, c: 0, color: 'blue' },
            { r: 1, c: 0, color: 'orange' }, { r: 2, c: 2, color: 'orange' },
            { r: 3, c: 2, color: 'red' }, { r: 4, c: 4, color: 'red' },
            { r: 3, c: 4, color: 'green' }, { r: 0, c: 3, color: 'green' },
            { r: 0, c: 2, color: 'yellow' }, { r: 1, c: 3, color: 'yellow' }
        ],
        solution: {
            red: [{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:4,c:4}],
            green: [{r:3,c:4},{r:3,c:3},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4},{r:0,c:3}],
            blue: [{r:3,c:1},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0}],
            yellow: [{r:0,c:2},{r:1,c:2},{r:1,c:3}],
            orange: [{r:1,c:0},{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:2,c:2}]
        }
    },
    // Seviye 200 (FİNAL SEVİYESİ!) — FINAL
    {
        difficulty: "FINAL",
        endpoints: [
            { r: 1, c: 3, color: 'red' }, { r: 3, c: 4, color: 'red' },
            { r: 4, c: 4, color: 'green' }, { r: 1, c: 2, color: 'green' },
            { r: 0, c: 2, color: 'orange' }, { r: 0, c: 0, color: 'orange' },
            { r: 1, c: 0, color: 'yellow' }, { r: 4, c: 0, color: 'yellow' },
            { r: 4, c: 1, color: 'blue' }, { r: 4, c: 2, color: 'blue' }
        ],
        solution: {
            red: [{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4}],
            green: [{r:4,c:4},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:2,c:2},{r:1,c:2}],
            blue: [{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:1,c:0},{r:1,c:1},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            orange: [{r:0,c:2},{r:0,c:1},{r:0,c:0}]
        }
    }
];
