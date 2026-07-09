// Nexus Flow — Geliştirilmiş Seviye Veritabanı (50 Seviye)
const levels = [
    // Seviye 1 (Düz dikey çizgiler)
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 0, c: 2, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 0, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            blue: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            orange: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 2 (Düz yatay çizgiler)
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 1, c: 4, color: 'green' },
            { r: 2, c: 0, color: 'blue' }, { r: 2, c: 4, color: 'blue' },
            { r: 3, c: 0, color: 'yellow' }, { r: 3, c: 4, color: 'yellow' },
            { r: 4, c: 0, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            green: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:1,c:4}],
            blue: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            yellow: [{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4}],
            orange: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}]
        }
    },
    // Seviye 3
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 1, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 1, c: 1, color: 'yellow' }, { r: 0, c: 4, color: 'yellow' },
            { r: 2, c: 2, color: 'orange' }, { r: 4, c: 1, color: 'orange' },
            { r: 4, c: 2, color: 'red' }, { r: 1, c: 4, color: 'red' },
            { r: 4, c: 3, color: 'blue' }, { r: 2, c: 4, color: 'blue' }
        ],
        solution: {
            green: [{ r: 0, c: 1 }, { r: 0, c: 0 }, { r: 1, c: 0 }, { r: 2, c: 0 }, { r: 3, c: 0 }, { r: 4, c: 0 }],
            yellow: [{ r: 1, c: 1 }, { r: 1, c: 2 }, { r: 0, c: 2 }, { r: 0, c: 3 }, { r: 0, c: 4 }],
            orange: [{ r: 2, c: 2 }, { r: 2, c: 1 }, { r: 3, c: 1 }, { r: 4, c: 1 }],
            red: [{ r: 4, c: 2 }, { r: 3, c: 2 }, { r: 3, c: 3 }, { r: 2, c: 3 }, { r: 1, c: 3 }, { r: 1, c: 4 }],
            blue: [{ r: 4, c: 3 }, { r: 4, c: 4 }, { r: 3, c: 4 }, { r: 2, c: 4 }]
        }
    },
    // Seviye 4
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 0, c: 2, color: 'green' },
            { r: 2, c: 1, color: 'blue' }, { r: 2, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'yellow' }, { r: 0, c: 4, color: 'yellow' },
            { r: 3, c: 3, color: 'orange' }, { r: 3, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:1,c:1},{r:1,c:2},{r:0,c:2}],
            blue: [{r:2,c:1},{r:3,c:1},{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:2,c:2}],
            yellow: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:2,c:4},{r:1,c:4},{r:0,c:4}],
            orange: [{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4}]
        }
    },
    // Seviye 5
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 0, c: 4, color: 'green' },
            { r: 1, c: 1, color: 'blue' }, { r: 4, c: 1, color: 'blue' },
            { r: 1, c: 2, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 4, c: 3, color: 'orange' }, { r: 4, c: 2, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            blue: [{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            yellow: [{r:1,c:2},{r:1,c:3},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            orange: [{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:2,c:2},{r:3,c:2},{r:4,c:2}]
        }
    },
    // Seviye 6
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 1, c: 2, color: 'green' },
            { r: 2, c: 0, color: 'blue' }, { r: 2, c: 1, color: 'blue' },
            { r: 2, c: 2, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 2, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:0}],
            green: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2}],
            blue: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1}],
            yellow: [{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:2,c:3}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 7
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 4, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 2, c: 0, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 3, c: 0, color: 'yellow' }, { r: 4, c: 0, color: 'yellow' },
            { r: 3, c: 1, color: 'orange' }, { r: 4, c: 1, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            green: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            blue: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:3,c:0},{r:4,c:0}],
            orange: [{r:3,c:1},{r:4,c:1}]
        }
    },
    // Seviye 8
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 0, c: 4, color: 'green' },
            { r: 1, c: 2, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 1, c: 3, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 1, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0}],
            green: [{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            blue: [{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            orange: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 9
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 1, color: 'red' },
            { r: 0, c: 3, color: 'green' }, { r: 2, c: 4, color: 'green' },
            { r: 3, c: 0, color: 'blue' }, { r: 3, c: 4, color: 'blue' },
            { r: 4, c: 0, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 3, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:1,c:0},{r:1,c:1}],
            green: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4}],
            blue: [{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4}],
            yellow: [{r:4,c:0},{r:4,c:1},{r:4,c:2}],
            orange: [{r:4,c:3},{r:4,c:4}]
        }
    },
    // Seviye 10
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 1, c: 3, color: 'blue' },
            { r: 2, c: 3, color: 'orange' }, { r: 2, c: 4, color: 'orange' },
            { r: 3, c: 3, color: 'yellow' }, { r: 3, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:2,c:2},{r:1,c:2},{r:0,c:2}],
            green: [{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3}],
            orange: [{r:2,c:3},{r:2,c:4}],
            yellow: [{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4}]
        }
    },
    // Seviye 11
    {
        difficulty: "KOLAY",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 0, c: 3, color: 'green' },
            { r: 0, c: 4, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 3, c: 0, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 3, c: 3, color: 'orange' }, { r: 4, c: 3, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:2,c:1},{r:1,c:1},{r:0,c:1}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:1,c:3},{r:0,c:3}],
            blue: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            yellow: [{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}],
            orange: [{r:3,c:3},{r:4,c:3}]
        }
    },
    // Seviye 12
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 2, c: 0, color: 'green' }, { r: 3, c: 0, color: 'green' },
            { r: 4, c: 0, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 0, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:1,c:1},{r:1,c:0}],
            green: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:3,c:1},{r:3,c:0}],
            blue: [{r:4,c:0},{r:4,c:1},{r:4,c:2}],
            yellow: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            orange: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 13
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' },
            { r: 3, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:0,c:1}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4}],
            orange: [{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 14
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 0, c: 4, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 2, c: 1, color: 'yellow' }, { r: 4, c: 1, color: 'yellow' },
            { r: 2, c: 3, color: 'orange' }, { r: 4, c: 3, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            yellow: [{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            orange: [{r:2,c:3},{r:3,c:3},{r:4,c:3}]
        }
    },
    // Seviye 15
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 2, c: 0, color: 'green' }, { r: 3, c: 0, color: 'green' },
            { r: 4, c: 0, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' },
            { r: 3, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:1,c:0}],
            green: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:3,c:0}],
            blue: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4}],
            orange: [{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 16
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 4, color: 'red' },
            { r: 2, c: 0, color: 'green' }, { r: 2, c: 3, color: 'green' },
            { r: 2, c: 4, color: 'orange' }, { r: 3, c: 4, color: 'orange' },
            { r: 4, c: 0, color: 'blue' }, { r: 4, c: 1, color: 'blue' },
            { r: 4, c: 2, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            green: [{r:2,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:3,c:3},{r:2,c:3}],
            orange: [{r:2,c:4},{r:3,c:4}],
            blue: [{r:4,c:0},{r:4,c:1}],
            yellow: [{r:4,c:2},{r:4,c:3},{r:4,c:4}]
        }
    },
    // Seviye 17
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 2, c: 0, color: 'green' }, { r: 2, c: 1, color: 'green' },
            { r: 0, c: 2, color: 'blue' }, { r: 0, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:0}],
            green: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1}],
            blue: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:0,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 18
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 2, c: 0, color: 'green' }, { r: 1, c: 4, color: 'green' },
            { r: 3, c: 0, color: 'blue' }, { r: 2, c: 3, color: 'blue' },
            { r: 4, c: 0, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 4, c: 3, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:1,c:1},{r:0,c:1},{r:0,c:2}],
            green: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:1,c:2},{r:1,c:3},{r:0,c:3},{r:0,c:4},{r:1,c:4}],
            blue: [{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4},{r:2,c:4},{r:2,c:3}],
            yellow: [{r:4,c:0},{r:4,c:1},{r:4,c:2}],
            orange: [{r:4,c:3},{r:4,c:4}]
        }
    },
    // Seviye 19
    {
        difficulty: "ORTA",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 0, c: 2, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'yellow' }, { r: 3, c: 3, color: 'yellow' },
            { r: 4, c: 3, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            blue: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:3,c:3}],
            orange: [{r:4,c:3},{r:4,c:4}]
        }
    },
    // Seviye 20
    {
        difficulty: "MÜKEMMEL",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 3, c: 0, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 1, c: 3, color: 'blue' },
            { r: 4, c: 3, color: 'orange' }, { r: 2, c: 2, color: 'orange' },
            { r: 2, c: 4, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:2,c:0},{r:1,c:0}],
            green: [{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3}],
            orange: [{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:2,c:2}],
            yellow: [{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 21
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 2, c: 2, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 3, c: 3, color: 'orange' }, { r: 4, c: 3, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            blue: [{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            orange: [{r:3,c:3},{r:4,c:3}]
        }
    },
    // Seviye 22
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 3, c: 2, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 3, c: 3, color: 'orange' }, { r: 4, c: 3, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            blue: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            yellow: [{r:3,c:2},{r:4,c:2}],
            orange: [{r:3,c:3},{r:4,c:3}]
        }
    },
    // Seviye 23
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 0, c: 4, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 3, c: 0, color: 'yellow' }, { r: 3, c: 1, color: 'yellow' },
            { r: 4, c: 0, color: 'orange' }, { r: 4, c: 1, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:2,c:1},{r:1,c:1},{r:0,c:1}],
            green: [{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:2,c:2},{r:2,c:3},{r:3,c:3},{r:3,c:2},{r:4,c:2},{r:4,c:3}],
            blue: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            yellow: [{r:3,c:0},{r:3,c:1}],
            orange: [{r:4,c:0},{r:4,c:1}]
        }
    },
    // Seviye 24
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 0, c: 2, color: 'blue' }, { r: 2, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 0, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            blue: [{r:0,c:2},{r:1,c:2},{r:2,c:2}],
            yellow: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            orange: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 25
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 1, c: 4, color: 'green' },
            { r: 2, c: 0, color: 'blue' }, { r: 4, c: 0, color: 'blue' },
            { r: 2, c: 1, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 3, c: 1, color: 'orange' }, { r: 4, c: 1, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            green: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:1,c:4}],
            blue: [{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            yellow: [{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            orange: [{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:4,c:3},{r:4,c:2},{r:4,c:1}]
        }
    },
    // Seviye 26
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:0,c:1}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 27
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 3, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 0, c: 4, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 3, c: 2, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 3, c: 3, color: 'orange' }, { r: 4, c: 3, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:2,c:2},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            blue: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            yellow: [{r:3,c:2},{r:4,c:2}],
            orange: [{r:3,c:3},{r:4,c:3}]
        }
    },
    // Seviye 28
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 0, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:2,c:2},{r:1,c:2},{r:0,c:2}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 29
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 3, c: 0, color: 'orange' }, { r: 3, c: 1, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:2,c:1},{r:1,c:1},{r:0,c:1}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            orange: [{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}]
        }
    },
    // Seviye 30
    {
        difficulty: "ZOR",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 0, c: 2, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 3, c: 3, color: 'orange' }, { r: 2, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            blue: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:2,c:3}],
            orange: [{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4}]
        }
    },
    // Seviye 31
    {
        difficulty: "SÜPER",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 3, c: 2, color: 'orange' }, { r: 4, c: 2, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            orange: [{r:3,c:2},{r:4,c:2}]
        }
    },
    // Seviye 32
    {
        difficulty: "SÜPER",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 4, c: 1, color: 'green' },
            { r: 2, c: 2, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 0, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            blue: [{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            orange: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 33
    {
        difficulty: "SÜPER",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 1, c: 1, color: 'blue' }, { r: 4, c: 1, color: 'blue' },
            { r: 1, c: 2, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 1, c: 3, color: 'orange' }, { r: 1, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            green: [{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            blue: [{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            yellow: [{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            orange: [{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4},{r:2,c:4},{r:1,c:4}]
        }
    },
    // Seviye 34
    {
        difficulty: "SÜPER",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 0, c: 4, color: 'green' },
            { r: 1, c: 1, color: 'blue' }, { r: 1, c: 4, color: 'blue' },
            { r: 2, c: 1, color: 'yellow' }, { r: 2, c: 4, color: 'yellow' },
            { r: 3, c: 1, color: 'orange' }, { r: 3, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0}],
            green: [{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            blue: [{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:1,c:4}],
            yellow: [{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            orange: [{r:3,c:1},{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:3,c:3},{r:4,c:3},{r:4,c:4},{r:3,c:4}]
        }
    },
    // Seviye 35
    {
        difficulty: "SÜPER",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 2, c: 0, color: 'green' }, { r: 2, c: 3, color: 'green' },
            { r: 3, c: 0, color: 'blue' }, { r: 3, c: 3, color: 'blue' },
            { r: 4, c: 0, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 0, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:1,c:0}],
            green: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3}],
            blue: [{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3}],
            yellow: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3}],
            orange: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 36
    {
        difficulty: "SÜPER",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 1, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 3, c: 0, color: 'orange' }, { r: 3, c: 1, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:2,c:1},{r:1,c:1},{r:0,c:1}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            orange: [{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1}]
        }
    },
    // Seviye 37
    {
        difficulty: "SÜPER",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 2, c: 0, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 2, c: 1, color: 'orange' }, { r: 4, c: 1, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:2,c:0}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            orange: [{r:2,c:1},{r:3,c:1},{r:4,c:1}]
        }
    },
    // Seviye 38
    {
        difficulty: "SÜPER",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 4, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 1, c: 3, color: 'green' },
            { r: 2, c: 0, color: 'blue' }, { r: 2, c: 3, color: 'blue' },
            { r: 3, c: 0, color: 'yellow' }, { r: 3, c: 3, color: 'yellow' },
            { r: 4, c: 0, color: 'orange' }, { r: 4, c: 3, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            green: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3}],
            blue: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3}],
            yellow: [{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3}],
            orange: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3}]
        }
    },
    // Seviye 39
    {
        difficulty: "SÜPER",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 0, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1},{r:4,c:2},{r:3,c:2},{r:2,c:2},{r:1,c:2},{r:0,c:2}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 40
    {
        difficulty: "SÜPER",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 3, c: 0, color: 'red' },
            { r: 0, c: 3, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 0, c: 4, color: 'blue' }, { r: 4, c: 4, color: 'blue' },
            { r: 2, c: 1, color: 'yellow' }, { r: 4, c: 2, color: 'yellow' },
            { r: 3, c: 1, color: 'orange' }, { r: 4, c: 1, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:1,c:1},{r:1,c:0},{r:2,c:0},{r:3,c:0}],
            green: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            blue: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            yellow: [{r:2,c:1},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            orange: [{r:3,c:1},{r:4,c:1}]
        }
    },
    // Seviye 41
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 42
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 3, c: 1, color: 'red' },
            { r: 0, c: 2, color: 'green' }, { r: 4, c: 2, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 4, c: 0, color: 'orange' }, { r: 4, c: 1, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:3,c:1},{r:2,c:1},{r:1,c:1},{r:0,c:1}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            orange: [{r:4,c:0},{r:4,c:1}]
        }
    },
    // Seviye 43
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 3, c: 1, color: 'orange' }, { r: 4, c: 1, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:2,c:1},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:1,c:0},{r:1,c:1}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            orange: [{r:3,c:1},{r:3,c:2},{r:4,c:2},{r:4,c:1}]
        }
    },
    // Seviye 44
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 2, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 4, c: 4, color: 'yellow' },
            { r: 3, c: 2, color: 'orange' }, { r: 4, c: 2, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1},{r:2,c:2},{r:1,c:2},{r:0,c:2}],
            green: [{r:0,c:1},{r:1,c:1}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}],
            orange: [{r:3,c:2},{r:4,c:2}]
        }
    },
    // Seviye 45
    {
        difficulty: "UZMAN",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 1, c: 2, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 1, c: 3, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 1, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            green: [{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:4,c:1},{r:3,c:1},{r:2,c:1},{r:1,c:1}],
            blue: [{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            orange: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 46
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 2, c: 1, color: 'red' },
            { r: 3, c: 1, color: 'yellow' }, { r: 1, c: 0, color: 'yellow' },
            { r: 0, c: 2, color: 'green' }, { r: 3, c: 2, color: 'green' },
            { r: 4, c: 2, color: 'orange' }, { r: 0, c: 3, color: 'orange' },
            { r: 0, c: 4, color: 'blue' }, { r: 4, c: 4, color: 'blue' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1}],
            yellow: [{r:3,c:1},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0}],
            green: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2}],
            orange: [{r:4,c:2},{r:4,c:3},{r:3,c:3},{r:2,c:3},{r:1,c:3},{r:0,c:3}],
            blue: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 47
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 0, color: 'red' },
            { r: 0, c: 1, color: 'green' }, { r: 1, c: 1, color: 'green' },
            { r: 2, c: 1, color: 'blue' }, { r: 2, c: 4, color: 'blue' },
            { r: 3, c: 1, color: 'yellow' }, { r: 3, c: 4, color: 'yellow' },
            { r: 4, c: 1, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            green: [{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1}],
            blue: [{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4}],
            yellow: [{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4}],
            orange: [{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}]
        }
    },
    // Seviye 48
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 1, c: 0, color: 'red' },
            { r: 1, c: 1, color: 'green' }, { r: 3, c: 1, color: 'green' },
            { r: 0, c: 3, color: 'blue' }, { r: 4, c: 3, color: 'blue' },
            { r: 0, c: 4, color: 'yellow' }, { r: 1, c: 4, color: 'yellow' },
            { r: 2, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0},{r:1,c:0}],
            green: [{r:1,c:1},{r:2,c:1},{r:3,c:1}],
            blue: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            yellow: [{r:0,c:4},{r:1,c:4}],
            orange: [{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 49
    {
        difficulty: "EFSANE",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 4, c: 1, color: 'red' },
            { r: 1, c: 0, color: 'green' }, { r: 4, c: 0, color: 'green' },
            { r: 0, c: 2, color: 'blue' }, { r: 4, c: 2, color: 'blue' },
            { r: 0, c: 3, color: 'yellow' }, { r: 4, c: 3, color: 'yellow' },
            { r: 0, c: 4, color: 'orange' }, { r: 4, c: 4, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1}],
            green: [{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0}],
            blue: [{r:0,c:2},{r:1,c:2},{r:2,c:2},{r:3,c:2},{r:4,c:2}],
            yellow: [{r:0,c:3},{r:1,c:3},{r:2,c:3},{r:3,c:3},{r:4,c:3}],
            orange: [{r:0,c:4},{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4}]
        }
    },
    // Seviye 50 (FİNAL SEVİYESİ!)
    {
        difficulty: "FINAL",
        endpoints: [
            { r: 0, c: 0, color: 'red' }, { r: 0, c: 4, color: 'red' },
            { r: 1, c: 4, color: 'green' }, { r: 4, c: 3, color: 'green' },
            { r: 4, c: 2, color: 'blue' }, { r: 2, c: 0, color: 'blue' },
            { r: 1, c: 0, color: 'yellow' }, { r: 2, c: 3, color: 'yellow' },
            { r: 3, c: 3, color: 'orange' }, { r: 2, c: 2, color: 'orange' }
        ],
        solution: {
            red: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4}],
            green: [{r:1,c:4},{r:2,c:4},{r:3,c:4},{r:4,c:4},{r:4,c:3}],
            blue: [{r:4,c:2},{r:4,c:1},{r:4,c:0},{r:3,c:0},{r:2,c:0}],
            yellow: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:2,c:3}],
            orange: [{r:3,c:3},{r:3,c:2},{r:3,c:1},{r:2,c:1},{r:2,c:2}]
        }
    }
];