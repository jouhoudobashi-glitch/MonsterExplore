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
  "types": [
    {
      "name": "ノーマル",
      "color": "#c9c5b5"
    },
    {
      "name": "炎",
      "color": "#f2794d"
    },
    {
      "name": "水",
      "color": "#65baf4"
    },
    {
      "name": "草",
      "color": "#8bd55f"
    },
    {
      "name": "電気",
      "color": "#e9cf49"
    },
    {
      "name": "氷",
      "color": "#91e9f5"
    },
    {
      "name": "格闘",
      "color": "#db785d"
    },
    {
      "name": "毒",
      "color": "#bd7ad7"
    },
    {
      "name": "地面",
      "color": "#bb9666"
    },
    {
      "name": "飛行",
      "color": "#91c7ee"
    },
    {
      "name": "エスパー",
      "color": "#e990c9"
    },
    {
      "name": "虫",
      "color": "#a4c66b"
    },
    {
      "name": "岩",
      "color": "#b8a88a"
    },
    {
      "name": "ゴースト",
      "color": "#9c8be1"
    },
    {
      "name": "ドラゴン",
      "color": "#7885f3"
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
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "れんぞくつめ",
      "type": 0,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "でんこうせっか",
      "type": 0,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "テイルスラップ",
      "type": 0,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
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
      "power": 58,
      "accuracy": 0.88,
      "range": 430,
      "cd": 3.1,
      "wind": 0.4,
      "shape": "bolt"
    },
    {
      "name": "まわしげり",
      "type": 6,
      "power": 49,
      "accuracy": 0.93,
      "range": 205,
      "cd": 4.1,
      "wind": 0.55,
      "shape": "cone"
    },
    {
      "name": "ライブアッパー",
      "type": 6,
      "power": 67,
      "accuracy": 0.9,
      "range": 95,
      "cd": 3.8,
      "wind": 0.28,
      "shape": "close"
    },
    {
      "name": "だいしんげき",
      "type": 6,
      "power": 34,
      "accuracy": 1,
      "range": 9999,
      "cd": 7.4,
      "wind": 0.68,
      "shape": "homing"
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
// Server-authoritative, fixed-level friend battle. No client HP, stats, or result accepted.
export const W=1440,H=600, MATCH_MS=120000, PROTOCOL=1;
const {mons,skills,TYPE_CHART}=CATALOG;
const clamp=(n,lo,hi)=>Math.max(lo,Math.min(hi,n));
const validMonster=id=>Number.isInteger(id)&&id>=0&&id<mons.length;
export {validMonster};
const mult=(a,d)=>TYPE_CHART[a].strong.includes(d)?2:TYPE_CHART[a].weak.includes(d)?.5:1;
const norm=(x,y)=>{const d=Math.hypot(x,y);return d>1?[x/d,y/d]:[x,y];};
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const aim=(a,b)=>Math.atan2(b.y-a.y,b.x-a.x);
function counter(id,enemy){const pool=skills.map((s,i)=>({s,i})).filter(({s,i})=>i>=17&&!s.support&&s.power>0);const strong=pool.filter(({s})=>mult(s.type,mons[enemy].type)===2);const pref={bolt:100,homing:82,cone:50,close:0};const rank=({s})=>(pref[s.shape]||0)+s.power*s.accuracy*.2+(s.range>=300?8:0);return (strong.length?strong:pool).sort((a,b)=>rank(b)-rank(a)||a.i-b.i)[0].i;}
function fighter(id,enemy,slot,now){const m=mons[id];return {slot,id,x:slot===1?350:1090,y:320,hp:m.hp,max:m.hp,dir:slot===1?1:-1,moves:[...m.skills.slice(0,3),counter(id,enemy)],cd:[0,0,0,0],vx:0,vy:0,lastInput:now,cast:null,pose:'idle',hurtUntil:0};}
export function createMatch(ids,now){if(ids.length!==2||!ids.every(validMonster))throw Error('Invalid selection');return {phase:'countdown',startAt:now+3000,last:now,endAt:now+3000+MATCH_MS,f:[fighter(ids[0],ids[1],1,now),fighter(ids[1],ids[0],2,now)],shots:[],fx:[],seq:0,winner:null,reason:null,shotSeq:0};}
function fx(m,kind,p,skill,extra={}){m.fx.push({id:++m.seq,kind,x:p.x,y:p.y,slot:p.slot,skill,...extra,expires:m.last+700});if(m.fx.length>20)m.fx.shift();}
function finish(m,winner,reason){if(m.phase==='ended')return;m.phase='ended';m.winner=winner;m.reason=reason;m.shots=[];for(const p of m.f){p.vx=p.vy=0;p.cast=null;}}
export function interrupt(m,reason='disconnect'){if(m&&m.phase!=='ended')finish(m,null,reason);}
function hit(m,p,e,s,idx){if(m.phase==='ended'||!p.hp||!e.hp)return;const rate=mult(s.type,mons[e.id].type),same=s.type===mons[p.id].type?1.2:1;
 if(Math.random()>s.accuracy){fx(m,'miss',e,idx);return;}
 const critical=Math.random()<.085;let dmg=Math.max(1,Math.floor(s.power*mons[p.id].atk/(mons[p.id].atk+mons[e.id].def)*rate*same));if(critical)dmg=Math.round(dmg*1.35);e.hp=Math.max(0,e.hp-dmg);e.hurtUntil=m.last+320;fx(m,'hit',e,idx,{dmg,rate,critical});if(!e.hp)finish(m,p.slot,'ko');}
function launch(m,p,e,idx,angle){const s=skills[idx];fx(m,'cast',p,idx,{angle});if(s.shape==='close'||s.shape==='cone'){const d=dist(p,e),delta=Math.abs(Math.atan2(Math.sin(aim(p,e)-angle),Math.cos(aim(p,e)-angle)));if(d<=s.range+26&&(d<50||delta< (s.shape==='cone'?.65:1.05)))hit(m,p,e,s,idx);else fx(m,'miss',e,idx);return;}
 const speed=s.shape==='homing'?480:720,range=s.shape==='homing'?1800:Math.min(s.range,650);m.shots.push({id:++m.shotSeq,slot:p.slot,skill:idx,x:p.x,y:p.y,angle,speed,remaining:range});}
function seg(x,y,a,b,p){const dx=a-x,dy=b-y,t=clamp(((p.x-x)*dx+(p.y-y)*dy)/(dx*dx+dy*dy||1),0,1);return Math.hypot(x+dx*t-p.x,y+dy*t-p.y);}
function step(m,dt,now){m.last=now;if(m.phase==='ended')return;if(now<m.startAt)return;m.phase='battle';if(now>=m.endAt){const [a,b]=m.f.map(p=>p.hp/p.max);finish(m,a===b?0:a>b?1:2,'time');return;}
 for(const p of m.f){const e=m.f[2-p.slot];const fresh=now-p.lastInput<=350;const v=mons[p.id].speed*2.0*(p.cast?.left>0?.4:1);const vx=fresh?p.vx:0,vy=fresh?p.vy:0;p.x=clamp(p.x+vx*v*dt,40,W-40);p.y=clamp(p.y+vy*v*dt,125,H-35);p.dir=e.x>=p.x?1:-1;p.pose=p.hurtUntil>now?'hurt':p.cast?'attack':Math.hypot(vx,vy)>.05?'walk':'idle';p.cd=p.cd.map(c=>Math.max(0,c-dt));}
 // Symmetric separation (both players use the same authoritative coordinates).
 const [a,b]=m.f;let d=dist(a,b);if(d<48){const theta=d<.01?0:aim(a,b),delta=(48-d)/2;for(const [p,sign] of [[a,-1],[b,1]]){p.x=clamp(p.x+Math.cos(theta)*delta*sign,40,W-40);p.y=clamp(p.y+Math.sin(theta)*delta*sign,125,H-35);}}
 for(const p of m.f){if(m.phase==='ended')break;if(p.cast){p.cast.left-=dt;if(p.cast.left<=0){const c=p.cast;p.cast=null;launch(m,p,m.f[2-p.slot],c.idx,c.angle);}}}
 if(m.phase==='ended')return;const alive=[];for(const q of m.shots){const p=m.f[q.slot-1],e=m.f[2-q.slot];if(skills[q.skill].shape==='homing'){const a=aim(q,e);const delta=Math.atan2(Math.sin(a-q.angle),Math.cos(a-q.angle));q.angle+=clamp(delta,-dt*4.2,dt*4.2);}const dx=Math.cos(q.angle)*q.speed*dt,dy=Math.sin(q.angle)*q.speed*dt;const nx=q.x+dx,ny=q.y+dy;if(seg(q.x,q.y,nx,ny,e)<28){hit(m,p,e,skills[q.skill],q.skill);if(m.phase==='ended')break;continue;}q.x=nx;q.y=ny;q.remaining-=Math.hypot(dx,dy);if(q.remaining>0&&nx>=0&&nx<=W&&ny>=0&&ny<=H)alive.push(q);}if(m.phase!=='ended')m.shots=alive;}
export function advance(m,now){if(!m||m.phase==='ended')return;if(now-m.last>2000){interrupt(m,'timeout');return;}while(m.last<now&&m.phase!=='ended'){const ms=Math.min(33,now-m.last);step(m,ms/1000,m.last+ms);}m.fx=m.fx.filter(e=>e.expires>now);}
export function input(m,slot,msg,now){if(!m||!Number.isInteger(slot)||slot<1||slot>2)return;advance(m,now);const p=m.f[slot-1],e=m.f[2-slot];if(!p||m.phase!=='battle')return;const x=Number.isFinite(msg.x)?clamp(msg.x,-1,1):0,y=Number.isFinite(msg.y)?clamp(msg.y,-1,1):0;[p.vx,p.vy]=norm(x,y);p.lastInput=now;
 const k=msg.action;if(Number.isInteger(k)&&k>=0&&k<4&&!p.cast&&p.cd[k]<=0){const idx=p.moves[k],s=skills[idx];p.cd[k]=s.cd;p.cast={idx,left:s.wind,angle:aim(p,e)};p.pose='attack';fx(m,'wind',p,idx,{angle:p.cast.angle});}}
export function snapshot(m,now){const round=n=>Math.round(n*10)/10;return {type:'battle',protocol:PROTOCOL,phase:m.phase,remaining:Math.max(0,Math.ceil((m.endAt-now)/1000)),countdown:Math.max(0,Math.ceil((m.startAt-now)/1000)),winner:m.winner,reason:m.reason,players:m.f.map(p=>({slot:p.slot,id:p.id,x:round(p.x),y:round(p.y),hp:p.hp,max:p.max,dir:p.dir,pose:p.hp?p.pose:'down',moves:p.moves,cd:p.cd.map(round),casting:!!p.cast})),shots:m.shots.map(s=>({id:s.id,slot:s.slot,skill:s.skill,x:round(s.x),y:round(s.y),angle:s.angle})),fx:m.fx.map(({expires,...e})=>e)};}
