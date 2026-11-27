const CATALOG = {
  "mons": [
    {
      "name": "フレイムリザード",
      "type": 1,
      "hp": 300,
      "atk": 140,
      "def": 70,
      "speed": 100,
      "skills": [
        0,
        1,
        2,
        35
      ]
    },
    {
      "name": "アクアタートル",
      "type": 2,
      "hp": 450,
      "atk": 90,
      "def": 130,
      "speed": 66,
      "skills": [
        4,
        5,
        6,
        37
      ]
    },
    {
      "name": "リーフテイル",
      "type": 3,
      "hp": 270,
      "atk": 110,
      "def": 65,
      "speed": 130,
      "skills": [
        8,
        9,
        10,
        67
      ]
    },
    {
      "name": "ワイルドウルフ",
      "type": 0,
      "hp": 320,
      "atk": 105,
      "speed": 113,
      "skills": [
        17,
        18,
        19,
        20
      ],
      "def": 90
    },
    {
      "name": "ボルトタイガー",
      "type": 4,
      "hp": 290,
      "atk": 123,
      "speed": 137,
      "skills": [
        33,
        34,
        35,
        36
      ],
      "def": 72
    },
    {
      "name": "フロストキャット",
      "type": 5,
      "hp": 320,
      "atk": 112,
      "speed": 105,
      "skills": [
        37,
        38,
        39,
        40
      ],
      "def": 88
    },
    {
      "name": "ブレイズベア",
      "type": 6,
      "hp": 390,
      "atk": 125,
      "speed": 96,
      "skills": [
        41,
        42,
        43,
        44
      ],
      "def": 93
    },
    {
      "name": "ヴェノムコブラ",
      "type": 7,
      "hp": 340,
      "atk": 115,
      "speed": 115,
      "skills": [
        45,
        46,
        47,
        48
      ],
      "def": 76
    },
    {
      "name": "アースモール",
      "type": 8,
      "hp": 410,
      "atk": 113,
      "speed": 72,
      "skills": [
        49,
        50,
        51,
        52
      ],
      "def": 110
    },
    {
      "name": "ウィングリフ",
      "type": 9,
      "hp": 295,
      "atk": 106,
      "speed": 142,
      "skills": [
        53,
        54,
        55,
        56
      ],
      "def": 70
    },
    {
      "name": "サイフォックス",
      "type": 10,
      "hp": 280,
      "atk": 129,
      "speed": 130,
      "skills": [
        57,
        58,
        59,
        60
      ],
      "def": 64
    },
    {
      "name": "ランスビートル",
      "type": 11,
      "hp": 355,
      "atk": 117,
      "speed": 108,
      "skills": [
        61,
        62,
        63,
        64
      ],
      "def": 99
    },
    {
      "name": "ロックガルム",
      "type": 12,
      "hp": 475,
      "atk": 100,
      "speed": 60,
      "skills": [
        65,
        66,
        67,
        68
      ],
      "def": 142
    },
    {
      "name": "ファントムレイス",
      "type": 13,
      "hp": 290,
      "atk": 133,
      "speed": 126,
      "skills": [
        69,
        70,
        71,
        72
      ],
      "def": 66
    },
    {
      "name": "ストームドラゴン",
      "type": 14,
      "hp": 390,
      "atk": 135,
      "speed": 91,
      "skills": [
        73,
        74,
        75,
        76
      ],
      "def": 105
    }
  ],
  "TYPE_CHART": {
    "0": {
      "strong": [],
      "weak": [
        12
      ]
    },
    "1": {
      "strong": [
        3,
        5,
        11
      ],
      "weak": [
        1,
        2,
        12,
        14
      ]
    },
    "2": {
      "strong": [
        1,
        8,
        12
      ],
      "weak": [
        2,
        3,
        14
      ]
    },
    "3": {
      "strong": [
        2,
        8,
        12
      ],
      "weak": [
        1,
        3,
        7,
        9,
        11,
        14
      ]
    },
    "4": {
      "strong": [
        2,
        9
      ],
      "weak": [
        4,
        3,
        8,
        14
      ]
    },
    "5": {
      "strong": [
        3,
        8,
        9,
        14
      ],
      "weak": [
        1,
        2,
        5
      ]
    },
    "6": {
      "strong": [
        0,
        5,
        12
      ],
      "weak": [
        7,
        9,
        10,
        11,
        13
      ]
    },
    "7": {
      "strong": [
        3
      ],
      "weak": [
        7,
        8,
        12,
        13
      ]
    },
    "8": {
      "strong": [
        1,
        4,
        7,
        12
      ],
      "weak": [
        3,
        9,
        11
      ]
    },
    "9": {
      "strong": [
        3,
        6,
        11
      ],
      "weak": [
        4,
        12
      ]
    },
    "10": {
      "strong": [
        6,
        7
      ],
      "weak": [
        10
      ]
    },
    "11": {
      "strong": [
        3,
        10
      ],
      "weak": [
        1,
        6,
        7,
        9,
        13
      ]
    },
    "12": {
      "strong": [
        1,
        5,
        9,
        11
      ],
      "weak": [
        6,
        8
      ]
    },
    "13": {
      "strong": [
        10,
        13
      ],
      "weak": [
        0
      ]
    },
    "14": {
      "strong": [
        14
      ],
      "weak": []
    }
  },
  "skills": [
    {
      "name": "ひのこ",
      "type": 1,
      "power": 64,
      "accuracy": 0.82,
      "range": 370,
      "cd": 3.4,
      "wind": 0.48,
      "shape": "bolt"
    },
    {
      "name": "ヒートブレス",
      "type": 1,
      "power": 48,
      "accuracy": 0.92,
      "range": 165,
      "cd": 4,
      "wind": 0.62,
      "shape": "cone"
    },
    {
      "name": "かえんげき",
      "type": 1,
      "power": 52,
      "accuracy": 0.94,
      "range": 75,
      "cd": 2.3,
      "wind": 0.25,
      "shape": "close"
    },
    {
      "name": "サーチフレア",
      "type": 1,
      "power": 32,
      "accuracy": 1,
      "range": 9999,
      "cd": 7,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "みずでっぽう",
      "type": 2,
      "power": 57,
      "accuracy": 0.88,
      "range": 360,
      "cd": 2.9,
      "wind": 0.42,
      "shape": "bolt"
    },
    {
      "name": "すいりゅうほう",
      "type": 2,
      "power": 43,
      "accuracy": 0.92,
      "range": 170,
      "cd": 3.8,
      "wind": 0.58,
      "shape": "cone"
    },
    {
      "name": "げきりゅう",
      "type": 2,
      "power": 65,
      "accuracy": 0.9,
      "range": 85,
      "cd": 4.1,
      "wind": 0.3,
      "shape": "close"
    },
    {
      "name": "アクアチェイス",
      "type": 2,
      "power": 30,
      "accuracy": 1,
      "range": 9999,
      "cd": 7,
      "wind": 0.65,
      "shape": "homing"
    },
    {
      "name": "はっぱかったー",
      "type": 3,
      "power": 56,
      "accuracy": 0.83,
      "range": 390,
      "cd": 2.7,
      "wind": 0.42,
      "shape": "bolt"
    },
    {
      "name": "はなのまい",
      "type": 3,
      "power": 52,
      "accuracy": 0.95,
      "range": 170,
      "cd": 3.3,
      "wind": 0.5,
      "shape": "cone"
    },
    {
      "name": "いばらのまい",
      "type": 3,
      "power": 73,
      "accuracy": 0.78,
      "range": 300,
      "cd": 4.7,
      "wind": 0.62,
      "shape": "bolt"
    },
    {
      "name": "しのびよるたね",
      "type": 3,
      "power": 29,
      "accuracy": 1,
      "range": 9999,
      "cd": 6.7,
      "wind": 0.6,
      "shape": "homing"
    },
    {
      "name": "きょだいか",
      "type": 1,
      "power": 0,
      "accuracy": 1,
      "range": 9999,
      "cd": 14,
      "wind": 0.55,
      "shape": "support",
      "support": "giant"
    },
    {
      "name": "かたくなる",
      "type": 2,
      "power": 0,
      "accuracy": 1,
      "range": 9999,
      "cd": 14,
      "wind": 0.45,
      "shape": "support",
      "support": "armor"
    },
    {
      "name": "スピードアップ",
      "type": 3,
      "power": 0,
      "accuracy": 1,
      "range": 9999,
      "cd": 12,
      "wind": 0.35,
      "shape": "support",
      "support": "haste"
    },
    {
      "name": "クイックにげ",
      "type": 1,
      "power": 0,
      "accuracy": 1,
      "range": 9999,
      "cd": 8,
      "wind": 0.12,
      "shape": "support",
      "support": "dash"
    },
    {
      "name": "ちいさくなる",
      "type": 3,
      "power": 0,
      "accuracy": 1,
      "range": 9999,
      "cd": 14,
      "wind": 0.4,
      "shape": "support",
      "support": "shrink"
    },
    {
      "name": "ふみこみづき",
      "type": 0,
      "power": 64,
      "accuracy": 0.94,
      "range": 94,
      "cd": 3.1,
      "wind": 0.27,
      "shape": "close",
      "contact": "rush",
      "travel": 0.23
    },
    {
      "name": "れんぞくつめ",
      "type": 0,
      "power": 57,
      "accuracy": 0.95,
      "range": 79,
      "cd": 2.7,
      "wind": 0.22,
      "shape": "close",
      "contact": "claw",
      "travel": 0.3
    },
    {
      "name": "でんこうせっか",
      "type": 0,
      "power": 74,
      "accuracy": 0.93,
      "range": 215,
      "cd": 5,
      "wind": 0.26,
      "shape": "close",
      "contact": "rush",
      "travel": 0.28
    },
    {
      "name": "テイルスラップ",
      "type": 0,
      "power": 61,
      "accuracy": 0.93,
      "range": 78,
      "cd": 3.4,
      "wind": 0.29,
      "shape": "close",
      "contact": "tail",
      "travel": 0.27
    },
    {
      "name": "ひのこ",
      "type": 1,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "ヒートブレス",
      "type": 1,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "かえんげき",
      "type": 1,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "サーチフレア",
      "type": 1,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "みずでっぽう",
      "type": 2,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "すいりゅうほう",
      "type": 2,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "げきりゅう",
      "type": 2,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "アクアチェイス",
      "type": 2,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "はっぱかったー",
      "type": 3,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "はなのまい",
      "type": 3,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "いばらのまい",
      "type": 3,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "しのびよるたね",
      "type": 3,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "でんきしょっく",
      "type": 4,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "ほうでん",
      "type": 4,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "スパークダイブ",
      "type": 4,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "ボルトチェイス",
      "type": 4,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "こおりのたま",
      "type": 5,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "ふぶき",
      "type": 5,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "こおりのキバ",
      "type": 5,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "アイスチェイス",
      "type": 5,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "コンボジャブ",
      "type": 6,
      "power": 77,
      "accuracy": 0.93,
      "range": 81,
      "cd": 3.7,
      "wind": 0.25,
      "shape": "close",
      "contact": "punch",
      "travel": 0.32
    },
    {
      "name": "まわしげり",
      "type": 6,
      "power": 89,
      "accuracy": 0.87,
      "range": 86,
      "cd": 4.8,
      "wind": 0.35,
      "shape": "close",
      "contact": "kick",
      "travel": 0.38
    },
    {
      "name": "ライブアッパー",
      "type": 6,
      "power": 83,
      "accuracy": 0.91,
      "range": 84,
      "cd": 4.5,
      "wind": 0.3,
      "shape": "close",
      "contact": "uppercut",
      "travel": 0.31
    },
    {
      "name": "だいしんげき",
      "type": 6,
      "power": 75,
      "accuracy": 0.94,
      "range": 107,
      "cd": 4.2,
      "wind": 0.31,
      "shape": "close",
      "contact": "rush",
      "travel": 0.29
    },
    {
      "name": "どくえき",
      "type": 7,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "どくぎり",
      "type": 7,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "どくのキバ",
      "type": 7,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "しのびよるどく",
      "type": 7,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "マッドショット",
      "type": 8,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "すなあらし",
      "type": 8,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "すながため",
      "type": 8,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "ソイルチェイス",
      "type": 8,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "かぜのきず",
      "type": 9,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "ゲイルストーム",
      "type": 9,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "つばさでうつ",
      "type": 9,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "しのびよるかぜ",
      "type": 9,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "サイコウェーブ",
      "type": 10,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "ねんしき",
      "type": 10,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "サイコヘッド",
      "type": 10,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "おいかけるねん",
      "type": 10,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "むしのしらせ",
      "type": 11,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "バグストーム",
      "type": 11,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "ホーンランス",
      "type": 11,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "コクーンロック",
      "type": 11,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "ロックキャノン",
      "type": 12,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "いわのあらし",
      "type": 12,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "ロックエッジ",
      "type": 12,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "チェイスロック",
      "type": 12,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "おにびだま",
      "type": 13,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "カースウェーブ",
      "type": 13,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "かげのつめ",
      "type": 13,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "ソウルチェイス",
      "type": 13,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    },
    {
      "name": "りゅうのいき",
      "type": 14,
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "ドラゴンバーン",
      "type": 14,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "ドラゴンクロー",
      "type": 14,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "りゅうついげき",
      "type": 14,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
    }
  ]
};
// Shared catalog, timing, speed, damage and support rules from the Arena client.
// Both human players are equal: no CPU handicaps. The server alone decides hits/HP.
export const W=1440,H=600,MATCH_MS=180000,PROTOCOL=2;
const {mons,skills,TYPE_CHART}=CATALOG;
const DUR={giant:7,armor:8,haste:6,shrink:7,dash:.25};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)), dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y), aim=(a,b)=>Math.atan2(b.y-a.y,b.x-a.x);
export const validMonster=id=>Number.isInteger(id)&&id>=0&&id<mons.length;
export const validSupport=id=>Number.isInteger(id)&&id>=12&&id<=16;
const mult=(a,d)=>TYPE_CHART[a].strong.includes(d)?2:TYPE_CHART[a].weak.includes(d)?.5:1;
const buff=p=>p.buff?.time>0?p.buff.kind:null, radius=p=>24*(buff(p)==='giant'?1.25:buff(p)==='shrink'?.65:1);
const bounded=p=>{p.x=clamp(p.x,160,W-160);p.y=clamp(p.y,205,H-95);};
function counter(id,e){if(mons[id].type===0)return 20;if(mons[id].type===6)return 44;const pool=skills.map((s,i)=>({s,i})).filter(({s,i})=>i>=17&&!s.support&&s.power>0),strong=pool.filter(({s})=>mult(s.type,mons[e].type)===2),pref={bolt:100,homing:82,cone:50,close:0},rank=({s})=>(pref[s.shape]||0)+s.power*s.accuracy*.2+(s.range>=300?8:0);return(strong.length?strong:pool).sort((a,b)=>rank(b)-rank(a)||a.i-b.i)[0].i;}
function fighter(id,enemy,slot,now,support){const m=mons[id];return {slot,id,x:slot===1?465:975,y:270,hp:m.hp,max:m.hp,dir:slot===1?1:-1,moves:[...m.skills.slice(0,3),counter(id,enemy),validSupport(support)?support:12],cd:[0,0,0,0,0],vx:0,vy:0,lastInput:now,cast:null,pose:'idle',hurtUntil:0,lock:0,buff:null,queued:null};}
export function createMatch(ids,now,supports=[12,12]){if(ids.length!==2||!ids.every(validMonster))throw Error('Invalid selection');return{phase:'countdown',startAt:now+3000,last:now,endAt:now+3000+MATCH_MS,f:[fighter(ids[0],ids[1],1,now,supports[0]),fighter(ids[1],ids[0],2,now,supports[1])],shots:[],fx:[],seq:0,winner:null,reason:null,shotSeq:0};}
function fx(m,kind,p,skill,extra={}){m.fx.push({id:++m.seq,kind,x:p.x,y:p.y,slot:p.slot,skill,...extra,expires:m.last+850});if(m.fx.length>20)m.fx.shift();}
function finish(m,winner,reason){if(m.phase==='ended')return;m.phase='ended';m.winner=winner;m.reason=reason;m.shots=[];for(const p of m.f){p.vx=p.vy=0;p.cast=null;}}
export function interrupt(m,reason='disconnect'){if(m&&m.phase!=='ended')finish(m,null,reason);}
function hit(m,p,e,s,idx){if(m.phase==='ended'||!p.hp||!e.hp)return;const rate=mult(s.type,mons[e.id].type),same=s.type===mons[p.id].type?1.2:1;if(buff(e)==='dash'||Math.random()>s.accuracy){fx(m,'miss',e,idx);return;}const critical=Math.random()<.085;let dmg=Math.max(1,Math.floor(s.power*mons[p.id].atk*(buff(p)==='giant'?1.35:buff(p)==='shrink'?.85:1)/(mons[p.id].atk+mons[e.id].def)*rate*same*(buff(e)==='armor'?.65:1)));if(critical)dmg=Math.max(1,Math.round(dmg*1.35));e.hp=Math.max(0,e.hp-dmg);e.hurtUntil=m.last+220;fx(m,'hit',e,idx,{dmg,rate,critical});if(!e.hp){finish(m,p.slot,'ko');return;}const a=aim(p,e),push=radius(e)*(s.shape==='close'?2:1);e.x+=Math.cos(a)*push;e.y+=Math.sin(a)*push;bounded(e);}
function useSupport(m,p,e,idx){const s=skills[idx],kind=s.support;p.lock=kind==='dash'?.35:.7;if(kind==='dash'){const a=aim(e,p);p.x+=Math.cos(a)*120;p.y+=Math.sin(a)*120;bounded(p);}p.buff={kind,time:DUR[kind]};fx(m,'support',p,idx);}
function launch(m,p,e,idx){const s=skills[idx];if(s.support){useSupport(m,p,e,idx);return;}const angle=aim(p,e),kind=s.shape;fx(m,'cast',p,idx,{angle});const vx=Math.cos(angle),vy=Math.sin(angle);m.shots.push({id:++m.shotSeq,slot:p.slot,skill:idx,x:p.x,y:p.y,angle,vx,vy,t:0,duration:kind==='homing'?2.4:kind==='bolt'?2.5:kind==='close'?(s.travel||.24):.4,remaining:kind==='bolt'?s.range+80:220});}
function seg(x,y,a,b,p){const dx=a-x,dy=b-y,t=clamp(((p.x-x)*dx+(p.y-y)*dy)/(dx*dx+dy*dy||1),0,1);return Math.hypot(x+dx*t-p.x,y+dy*t-p.y);}
function startCast(m,p,e,k){const idx=p.moves[k],s=skills[idx];p.cd[k]=s.cd;p.cast={idx,k,left:s.wind,wind:s.wind};p.lock=.45;p.pose='attack';p.dir=e.x>=p.x?1:-1;fx(m,'wind',p,idx,{angle:aim(p,e)});}
function step(m,dt,now){m.last=now;if(m.phase==='ended'||now<m.startAt)return;m.phase='battle';if(now>=m.endAt){const[a,b]=m.f.map(p=>p.hp/p.max);finish(m,a===b?0:a>b?1:2,'time');return;}
 for(const p of m.f){const e=m.f[2-p.slot];p.cd=p.cd.map(c=>Math.max(0,c-dt));p.lock=Math.max(0,p.lock-dt);if(p.buff){p.buff.time-=dt;if(p.buff.time<=0)p.buff=null;}if(p.queued&&!p.cast&&p.lock<=0){const q=p.queued;p.queued=null;if(q.until>=now&&p.cd[q.k]<=0)startCast(m,p,e,q.k);}if(p.cast){p.pose='attack';p.cast.left-=dt;if(p.cast.left<=0){const q=p.cast;p.cast=null;launch(m,p,e,q.idx);p.pose='idle';}continue;}const fresh=now-p.lastInput<=350,dx=fresh?p.vx:0,dy=fresh?p.vy:0,n=Math.hypot(dx,dy);const speed=mons[p.id].speed*1.55*(buff(p)==='haste'?1.4:buff(p)==='armor'?.7:1);if(n>.12){p.x+=dx/n*speed*dt;p.y+=dy/n*speed*dt;bounded(p);}p.dir=Math.abs(dx)>.1?Math.sign(dx):e.x>=p.x?1:-1;p.pose=p.hurtUntil>now?'hurt':n>.12?'walk':'idle';}
 const [a,b]=m.f;const d=dist(a,b),r=radius(a)+radius(b);if(d<r){const theta=d<.01?0:aim(a,b),delta=(r-d)/2;for(const [p,sign] of [[a,-1],[b,1]]){p.x+=Math.cos(theta)*delta*sign;p.y+=Math.sin(theta)*delta*sign;bounded(p);}}
 const alive=[];for(const q of m.shots){if(m.phase==='ended')break;const p=m.f[q.slot-1],e=m.f[2-q.slot],s=skills[q.skill];q.t+=dt;if(s.shape==='bolt'||s.shape==='homing'){if(s.shape==='homing'){const a=aim(q,e);q.vx=q.vx*.84+Math.cos(a)*.16;q.vy=q.vy*.84+Math.sin(a)*.16;const n=Math.hypot(q.vx,q.vy)||1;q.vx/=n;q.vy/=n;}q.angle=Math.atan2(q.vy,q.vx);const speed=s.shape==='homing'?330:500,step=speed*dt,nx=q.x+q.vx*step,ny=q.y+q.vy*step;if(seg(q.x,q.y,nx,ny,e)<radius(e)+11){hit(m,p,e,s,q.skill);continue;}q.x=nx;q.y=ny;q.remaining-=step;if(q.remaining<=0||q.t>q.duration){fx(m,'miss',q,q.skill,{slot:p.slot});continue;}}
 else if(s.shape==='close'&&s.contact){const desired=s.contact==='rush'?48:65,d=dist(p,e),angle=aim(p,e),step=Math.min((s.contact==='rush'?950:360)*dt,Math.max(0,d-desired));p.x+=Math.cos(angle)*step;p.y+=Math.sin(angle)*step;bounded(p);p.dir=e.x>=p.x?1:-1;q.x=p.x;q.y=p.y;q.angle=angle;if(q.t>=q.duration){if(dist(p,e)<=desired+radius(e)+18)hit(m,p,e,s,q.skill);else fx(m,'miss',e,q.skill);continue;}}
 else if(q.t>=q.duration){if(dist(p,e)<=s.range+radius(e))hit(m,p,e,s,q.skill);else fx(m,'miss',e,q.skill);continue;}else{q.x=p.x;q.y=p.y;q.angle=aim(p,e);}alive.push(q);}
 if(m.phase!=='ended')m.shots=alive;}
export function advance(m,now){if(!m||m.phase==='ended')return;if(now-m.last>2000){interrupt(m,'timeout');return;}while(m.last<now&&m.phase!=='ended'){const ms=Math.min(16,now-m.last);step(m,ms/1000,m.last+ms);}m.fx=m.fx.filter(e=>e.expires>now);}
export function input(m,slot,msg,now){if(!m||![1,2].includes(slot))return;advance(m,now);const p=m.f[slot-1],e=m.f[2-slot];if(!p||m.phase!=='battle')return;p.vx=Number.isFinite(msg.x)?clamp(msg.x,-1,1):0;p.vy=Number.isFinite(msg.y)?clamp(msg.y,-1,1):0;p.lastInput=now;const k=msg.action;if(Number.isInteger(k)&&k>=0&&k<5&&p.cd[k]<=0){if(!p.cast&&p.lock<=0)startCast(m,p,e,k);else p.queued={k,until:now+1000};}}
export function snapshot(m,now){const round=n=>Math.round(n*100)/100;return{type:'battle',protocol:PROTOCOL,phase:m.phase,remaining:Math.max(0,Math.ceil((m.endAt-now)/1000)),countdown:Math.max(0,Math.ceil((m.startAt-now)/1000)),winner:m.winner,reason:m.reason,players:m.f.map(p=>({slot:p.slot,id:p.id,x:round(p.x),y:round(p.y),hp:p.hp,max:p.max,dir:p.dir,pose:p.hp?p.pose:'down',moves:p.moves,cd:p.cd.map(round),casting:!!p.cast,cast:p.cast?{...p.cast,left:round(p.cast.left)}:null,buff:p.buff?{kind:p.buff.kind,time:round(p.buff.time)}:null})),shots:m.shots.map(s=>({id:s.id,slot:s.slot,skill:s.skill,x:round(s.x),y:round(s.y),angle:s.angle,t:round(s.t),duration:s.duration})),fx:m.fx.map(({expires,...e})=>e)};}
