/**
 * Created by Administrator on 2016/3/9.
 */
myAppModule.service("ChampionService", function () {
        var rt = {};
        var champions = [{
            "img": "Annie.png",
            "name": "黑暗之女",
            "title": "安妮",
            "tags": ["Mage"],
            "id": "1",
            "code": "Annie"
        },
            {
                "img": "AurelionSol.png",
                "name": "奥瑞利安索尔",
                "title": "铸星龙王",
                "tags": ["Mage"],
                "id": "136",
                "code": "AurelionSol"
            },
            {"img": "Jhin.png", "name": "烬", "title": "戏命师", "tags": ["Mage"], "id": "202", "code": "Jhin"},
            {
                "img": "Olaf.png",
                "name": "狂战士",
                "title": "奥拉夫",
                "tags": ["Fighter", "Tank"],
                "id": "2",
                "code": "Olaf"
            }, {
                "img": "Galio.png",
                "name": "哨兵之殇",
                "title": "加里奥",
                "tags": ["Tank", "Mage"],
                "id": "3",
                "code": "Galio"
            }, {
                "img": "TwistedFate.png",
                "name": "卡牌大师",
                "title": "崔斯特",
                "tags": ["Mage"],
                "id": "4",
                "code": "TwistedFate"
            }, {
                "img": "XinZhao.png",
                "name": "德邦总管",
                "title": "赵信",
                "tags": ["Fighter", "Assassin"],
                "id": "5",
                "code": "XinZhao"
            }, {
                "img": "Urgot.png",
                "name": "首领之傲",
                "title": "厄加特",
                "tags": ["Marksman", "Fighter"],
                "id": "6",
                "code": "Urgot"
            }, {
                "img": "Leblanc.png",
                "name": "诡术妖姬",
                "title": "乐芙兰",
                "tags": ["Assassin", "Mage"],
                "id": "7",
                "code": "Leblanc"
            }, {
                "img": "Vladimir.png",
                "name": "猩红收割者",
                "title": "弗拉基米尔",
                "tags": ["Mage", "Tank"],
                "id": "8",
                "code": "Vladimir"
            }, {
                "img": "FiddleSticks.png",
                "name": "末日使者",
                "title": "费德提克",
                "tags": ["Mage", "Support"],
                "id": "9",
                "code": "FiddleSticks"
            }, {
                "img": "Kayle.png",
                "name": "审判天使",
                "title": "凯尔",
                "tags": ["Fighter", "Support"],
                "id": "10",
                "code": "Kayle"
            }, {
                "img": "MasterYi.png",
                "name": "无极剑圣",
                "title": "易",
                "tags": ["Assassin", "Fighter"],
                "id": "11",
                "code": "MasterYi"
            }, {
                "img": "Alistar.png",
                "name": "牛头酋长",
                "title": "阿利斯塔",
                "tags": ["Tank", "Support"],
                "id": "12",
                "code": "Alistar"
            }, {
                "img": "Ryze.png",
                "name": "流浪法师",
                "title": "瑞兹",
                "tags": ["Mage", "Fighter"],
                "id": "13",
                "code": "Ryze"
            }, {
                "img": "Sion.png",
                "name": "亡灵战神",
                "title": "赛恩",
                "tags": ["Tank", "Fighter"],
                "id": "14",
                "code": "Sion"
            }, {
                "img": "Sivir.png",
                "name": "战争女神",
                "title": "希维尔",
                "tags": ["Marksman"],
                "id": "15",
                "code": "Sivir"
            }, {
                "img": "Soraka.png",
                "name": "众星之子",
                "title": "索拉卡",
                "tags": ["Support", "Mage"],
                "id": "16",
                "code": "Soraka"
            }, {
                "img": "Teemo.png",
                "name": "迅捷斥候",
                "title": "提莫",
                "tags": ["Marksman", "Assassin"],
                "id": "17",
                "code": "Teemo"
            }, {
                "img": "Tristana.png",
                "name": "麦林炮手",
                "title": "崔丝塔娜",
                "tags": ["Marksman", "Assassin"],
                "id": "18",
                "code": "Tristana"
            }, {
                "img": "Warwick.png",
                "name": "嗜血猎手",
                "title": "沃里克",
                "tags": ["Fighter", "Tank"],
                "id": "19",
                "code": "Warwick"
            }, {
                "img": "Nunu.png",
                "name": "雪人骑士",
                "title": "努努",
                "tags": ["Support", "Fighter"],
                "id": "20",
                "code": "Nunu"
            }, {
                "img": "MissFortune.png",
                "name": "赏金猎人",
                "title": "厄运小姐",
                "tags": ["Marksman"],
                "id": "21",
                "code": "MissFortune"
            }, {
                "img": "Ashe.png",
                "name": "寒冰射手",
                "title": "艾希",
                "tags": ["Marksman", "Support"],
                "id": "22",
                "code": "Ashe"
            }, {
                "img": "Tryndamere.png",
                "name": "蛮族之王",
                "title": "泰达米尔",
                "tags": ["Fighter", "Assassin"],
                "id": "23",
                "code": "Tryndamere"
            }, {
                "img": "Jax.png",
                "name": "武器大师",
                "title": "贾克斯",
                "tags": ["Fighter", "Assassin"],
                "id": "24",
                "code": "Jax"
            }, {
                "img": "Morgana.png",
                "name": "堕落天使",
                "title": "莫甘娜",
                "tags": ["Mage", "Support"],
                "id": "25",
                "code": "Morgana"
            }, {
                "img": "Zilean.png",
                "name": "时光守护者",
                "title": "基兰",
                "tags": ["Support", "Mage"],
                "id": "26",
                "code": "Zilean"
            }, {
                "img": "Singed.png",
                "name": "炼金术士",
                "title": "辛吉德",
                "tags": ["Tank", "Fighter"],
                "id": "27",
                "code": "Singed"
            }, {
                "img": "Evelynn.png",
                "name": "寡妇制造者",
                "title": "伊芙琳",
                "tags": ["Assassin", "Mage"],
                "id": "28",
                "code": "Evelynn"
            }, {
                "img": "Twitch.png",
                "name": "瘟疫之源",
                "title": "图奇",
                "tags": ["Marksman", "Assassin"],
                "id": "29",
                "code": "Twitch"
            }, {
                "img": "Karthus.png",
                "name": "死亡颂唱者",
                "title": "卡尔萨斯",
                "tags": ["Mage"],
                "id": "30",
                "code": "Karthus"
            }, {
                "img": "Chogath.png",
                "name": "虚空恐惧",
                "title": "科加斯",
                "tags": ["Tank", "Mage"],
                "id": "31",
                "code": "Chogath"
            }, {
                "img": "Amumu.png",
                "name": "殇之木乃伊",
                "title": "阿木木",
                "tags": ["Tank", "Mage"],
                "id": "32",
                "code": "Amumu"
            }, {
                "img": "Rammus.png",
                "name": "披甲龙龟",
                "title": "拉莫斯",
                "tags": ["Tank", "Fighter"],
                "id": "33",
                "code": "Rammus"
            }, {
                "img": "Anivia.png",
                "name": "冰晶凤凰",
                "title": "艾尼维亚",
                "tags": ["Mage", "Support"],
                "id": "34",
                "code": "Anivia"
            }, {
                "img": "Shaco.png",
                "name": "恶魔小丑",
                "title": "萨科",
                "tags": ["Assassin"],
                "id": "35",
                "code": "Shaco"
            }, {
                "img": "DrMundo.png",
                "name": "祖安狂人",
                "title": "蒙多医生",
                "tags": ["Fighter", "Tank"],
                "id": "36",
                "code": "DrMundo"
            }, {
                "img": "Sona.png",
                "name": "琴瑟仙女",
                "title": "娑娜",
                "tags": ["Support", "Mage"],
                "id": "37",
                "code": "Sona"
            }, {
                "img": "Kassadin.png",
                "name": "虚空行者",
                "title": "卡萨丁",
                "tags": ["Assassin", "Mage"],
                "id": "38",
                "code": "Kassadin"
            }, {
                "img": "Irelia.png",
                "name": "刀锋意志",
                "title": "艾瑞莉娅",
                "tags": ["Fighter", "Assassin"],
                "id": "39",
                "code": "Irelia"
            }, {
                "img": "Janna.png",
                "name": "风暴之怒",
                "title": "迦娜",
                "tags": ["Support", "Mage"],
                "id": "40",
                "code": "Janna"
            }, {
                "img": "Gangplank.png",
                "name": "海洋之灾",
                "title": "普朗克",
                "tags": ["Fighter"],
                "id": "41",
                "code": "Gangplank"
            }, {
                "img": "Corki.png",
                "name": "英勇投弹手",
                "title": "库奇",
                "tags": ["Marksman"],
                "id": "42",
                "code": "Corki"
            }, {
                "img": "Karma.png",
                "name": "天启者",
                "title": "卡尔玛",
                "tags": ["Mage", "Support"],
                "id": "43",
                "code": "Karma"
            }, {
                "img": "Taric.png",
                "name": "宝石骑士",
                "title": "塔里克",
                "tags": ["Support", "Fighter"],
                "id": "44",
                "code": "Taric"
            }, {
                "img": "Veigar.png",
                "name": "邪恶小法师",
                "title": "维迦",
                "tags": ["Mage"],
                "id": "45",
                "code": "Veigar"
            }, {
                "img": "Trundle.png",
                "name": "巨魔之王",
                "title": "特朗德尔",
                "tags": ["Fighter", "Tank"],
                "id": "48",
                "code": "Trundle"
            }, {
                "img": "Swain.png",
                "name": "策士统领",
                "title": "斯维因",
                "tags": ["Mage", "Fighter"],
                "id": "50",
                "code": "Swain"
            }, {
                "img": "Caitlyn.png",
                "name": "皮城女警",
                "title": "凯特琳",
                "tags": ["Marksman"],
                "id": "51",
                "code": "Caitlyn"
            }, {
                "img": "Blitzcrank.png",
                "name": "蒸汽机器人",
                "title": "布里茨",
                "tags": ["Tank", "Fighter"],
                "id": "53",
                "code": "Blitzcrank"
            }, {
                "img": "Malphite.png",
                "name": "熔岩巨兽",
                "title": "墨菲特",
                "tags": ["Tank", "Fighter"],
                "id": "54",
                "code": "Malphite"
            }, {
                "img": "Katarina.png",
                "name": "不祥之刃",
                "title": "卡特琳娜",
                "tags": ["Assassin", "Mage"],
                "id": "55",
                "code": "Katarina"
            }, {
                "img": "Nocturne.png",
                "name": "永恒梦魇",
                "title": "魔腾",
                "tags": ["Assassin", "Fighter"],
                "id": "56",
                "code": "Nocturne"
            }, {
                "img": "Maokai.png",
                "name": "扭曲树精",
                "title": "茂凯",
                "tags": ["Tank", "Mage"],
                "id": "57",
                "code": "Maokai"
            }, {
                "img": "Renekton.png",
                "name": "荒漠屠夫",
                "title": "雷克顿",
                "tags": ["Fighter", "Tank"],
                "id": "58",
                "code": "Renekton"
            }, {
                "img": "JarvanIV.png",
                "name": "德玛西亚皇子",
                "title": "嘉文四世",
                "tags": ["Tank", "Fighter"],
                "id": "59",
                "code": "JarvanIV"
            }, {
                "img": "Elise.png",
                "name": "蜘蛛女皇",
                "title": "伊莉丝",
                "tags": ["Mage", "Fighter"],
                "id": "60",
                "code": "Elise"
            }, {
                "img": "Orianna.png",
                "name": "发条魔灵",
                "title": "奥莉安娜",
                "tags": ["Mage", "Support"],
                "id": "61",
                "code": "Orianna"
            }, {
                "img": "MonkeyKing.png",
                "name": "齐天大圣",
                "title": "孙悟空",
                "tags": ["Fighter", "Tank"],
                "id": "62",
                "code": "MonkeyKing"
            }, {
                "img": "Brand.png",
                "name": "复仇焰魂",
                "title": "布兰德",
                "tags": ["Mage"],
                "id": "63",
                "code": "Brand"
            }, {
                "img": "LeeSin.png",
                "name": "盲僧",
                "title": "李青",
                "tags": ["Fighter", "Assassin"],
                "id": "64",
                "code": "LeeSin"
            }, {
                "img": "Vayne.png",
                "name": "暗夜猎手",
                "title": "薇恩",
                "tags": ["Marksman", "Assassin"],
                "id": "67",
                "code": "Vayne"
            }, {
                "img": "Rumble.png",
                "name": "机械公敌",
                "title": "兰博",
                "tags": ["Fighter", "Mage"],
                "id": "68",
                "code": "Rumble"
            }, {
                "img": "Cassiopeia.png",
                "name": "魔蛇之拥",
                "title": "卡西奥佩娅",
                "tags": ["Mage"],
                "id": "69",
                "code": "Cassiopeia"
            }, {
                "img": "Skarner.png",
                "name": "水晶先锋",
                "title": "斯卡纳",
                "tags": ["Fighter", "Tank"],
                "id": "72",
                "code": "Skarner"
            }, {
                "img": "Heimerdinger.png",
                "name": "大发明家",
                "title": "黑默丁格",
                "tags": ["Mage", "Support"],
                "id": "74",
                "code": "Heimerdinger"
            }, {
                "img": "Nasus.png",
                "name": "沙漠死神",
                "title": "内瑟斯",
                "tags": ["Fighter", "Tank"],
                "id": "75",
                "code": "Nasus"
            }, {
                "img": "Nidalee.png",
                "name": "狂野女猎手",
                "title": "奈德丽",
                "tags": ["Assassin", "Fighter"],
                "id": "76",
                "code": "Nidalee"
            }, {
                "img": "Udyr.png",
                "name": "兽灵行者",
                "title": "乌迪尔",
                "tags": ["Fighter", "Tank"],
                "id": "77",
                "code": "Udyr"
            }, {
                "img": "Poppy.png",
                "name": "圣锤之毅",
                "title": "波比",
                "tags": ["Tank", "Fighter"],
                "id": "78",
                "code": "Poppy"
            }, {
                "img": "Gragas.png",
                "name": "酒桶",
                "title": "古拉加斯",
                "tags": ["Fighter", "Mage"],
                "id": "79",
                "code": "Gragas"
            }, {
                "img": "Pantheon.png",
                "name": "战争之王",
                "title": "潘森",
                "tags": ["Fighter", "Assassin"],
                "id": "80",
                "code": "Pantheon"
            }, {
                "img": "Ezreal.png",
                "name": "探险家",
                "title": "伊泽瑞尔",
                "tags": ["Marksman", "Mage"],
                "id": "81",
                "code": "Ezreal"
            }, {
                "img": "Mordekaiser.png",
                "name": "铁铠冥魂",
                "title": "莫德凯撒",
                "tags": ["Fighter", "Mage"],
                "id": "82",
                "code": "Mordekaiser"
            }, {
                "img": "Yorick.png",
                "name": "掘墓者",
                "title": "约里克",
                "tags": ["Fighter", "Mage"],
                "id": "83",
                "code": "Yorick"
            }, {
                "img": "Akali.png",
                "name": "暗影之拳",
                "title": "阿卡丽",
                "tags": ["Assassin"],
                "id": "84",
                "code": "Akali"
            }, {
                "img": "Kennen.png",
                "name": "狂暴之心",
                "title": "凯南",
                "tags": ["Mage", "Marksman"],
                "id": "85",
                "code": "Kennen"
            }, {
                "img": "Garen.png",
                "name": "德玛西亚之力",
                "title": "盖伦",
                "tags": ["Fighter", "Tank"],
                "id": "86",
                "code": "Garen"
            }, {
                "img": "Leona.png",
                "name": "曙光女神",
                "title": "蕾欧娜",
                "tags": ["Tank", "Support"],
                "id": "89",
                "code": "Leona"
            }, {
                "img": "Malzahar.png",
                "name": "虚空先知",
                "title": "玛尔扎哈",
                "tags": ["Mage", "Assassin"],
                "id": "90",
                "code": "Malzahar"
            }, {
                "img": "Talon.png",
                "name": "刀锋之影",
                "title": "泰隆",
                "tags": ["Assassin", "Fighter"],
                "id": "91",
                "code": "Talon"
            }, {
                "img": "Riven.png",
                "name": "放逐之刃",
                "title": "锐雯",
                "tags": ["Fighter", "Assassin"],
                "id": "92",
                "code": "Riven"
            }, {
                "img": "KogMaw.png",
                "name": "深渊巨口",
                "title": "克格莫",
                "tags": ["Marksman", "Mage"],
                "id": "96",
                "code": "KogMaw"
            }, {
                "img": "Shen.png",
                "name": "暮光之眼",
                "title": "慎",
                "tags": ["Tank", "Fighter"],
                "id": "98",
                "code": "Shen"
            }, {
                "img": "Lux.png",
                "name": "光辉女郎",
                "title": "拉克丝",
                "tags": ["Mage", "Support"],
                "id": "99",
                "code": "Lux"
            }, {
                "img": "Xerath.png",
                "name": "远古巫灵",
                "title": "泽拉斯",
                "tags": ["Mage", "Assassin"],
                "id": "101",
                "code": "Xerath"
            }, {
                "img": "Shyvana.png",
                "name": "龙血武姬",
                "title": "希瓦娜",
                "tags": ["Fighter", "Tank"],
                "id": "102",
                "code": "Shyvana"
            }, {
                "img": "Ahri.png",
                "name": "九尾妖狐",
                "title": "阿狸",
                "tags": ["Mage", "Assassin"],
                "id": "103",
                "code": "Ahri"
            }, {
                "img": "Graves.png",
                "name": "法外狂徒",
                "title": "格雷福斯",
                "tags": ["Marksman"],
                "id": "104",
                "code": "Graves"
            }, {
                "img": "Fizz.png",
                "name": "潮汐海灵",
                "title": "菲兹",
                "tags": ["Assassin", "Fighter"],
                "id": "105",
                "code": "Fizz"
            }, {
                "img": "Volibear.png",
                "name": "雷霆咆哮",
                "title": "沃利贝尔",
                "tags": ["Fighter", "Tank"],
                "id": "106",
                "code": "Volibear"
            }, {
                "img": "Rengar.png",
                "name": "傲之追猎者",
                "title": "雷恩加尔",
                "tags": ["Assassin", "Fighter"],
                "id": "107",
                "code": "Rengar"
            }, {
                "img": "Varus.png",
                "name": "惩戒之箭",
                "title": "韦鲁斯",
                "tags": ["Marksman", "Mage"],
                "id": "110",
                "code": "Varus"
            }, {
                "img": "Nautilus.png",
                "name": "深海泰坦",
                "title": "诺提勒斯",
                "tags": ["Tank", "Fighter"],
                "id": "111",
                "code": "Nautilus"
            }, {
                "img": "Viktor.png",
                "name": "机械先驱",
                "title": "维克托",
                "tags": ["Mage"],
                "id": "112",
                "code": "Viktor"
            }, {
                "img": "Sejuani.png",
                "name": "凛冬之怒",
                "title": "瑟庄妮",
                "tags": ["Tank", "Fighter"],
                "id": "113",
                "code": "Sejuani"
            }, {
                "img": "Fiora.png",
                "name": "无双剑姬",
                "title": "菲奥娜",
                "tags": ["Fighter", "Assassin"],
                "id": "114",
                "code": "Fiora"
            }, {
                "img": "Ziggs.png",
                "name": "爆破鬼才",
                "title": "吉格斯",
                "tags": ["Mage"],
                "id": "115",
                "code": "Ziggs"
            }, {
                "img": "Lulu.png",
                "name": "仙灵女巫",
                "title": "璐璐",
                "tags": ["Support", "Mage"],
                "id": "117",
                "code": "Lulu"
            }, {
                "img": "Draven.png",
                "name": "荣耀行刑官",
                "title": "德莱文",
                "tags": ["Marksman"],
                "id": "119",
                "code": "Draven"
            }, {
                "img": "Hecarim.png",
                "name": "战争之影",
                "title": "赫卡里姆",
                "tags": ["Fighter", "Tank"],
                "id": "120",
                "code": "Hecarim"
            }, {
                "img": "Khazix.png",
                "name": "虚空掠夺者",
                "title": "卡兹克",
                "tags": ["Assassin", "Fighter"],
                "id": "121",
                "code": "Khazix"
            }, {
                "img": "Darius.png",
                "name": "诺克萨斯之手",
                "title": "德莱厄斯",
                "tags": ["Fighter", "Tank"],
                "id": "122",
                "code": "Darius"
            }, {
                "img": "Jayce.png",
                "name": "未来守护者",
                "title": "杰斯",
                "tags": ["Fighter", "Marksman"],
                "id": "126",
                "code": "Jayce"
            }, {
                "img": "Lissandra.png",
                "name": "冰霜女巫",
                "title": "丽桑卓",
                "tags": ["Mage"],
                "id": "127",
                "code": "Lissandra"
            }, {
                "img": "Diana.png",
                "name": "皎月女神",
                "title": "黛安娜",
                "tags": ["Fighter", "Mage"],
                "id": "131",
                "code": "Diana"
            }, {
                "img": "Quinn.png",
                "name": "德玛西亚之翼",
                "title": "奎因",
                "tags": ["Marksman", "Fighter"],
                "id": "133",
                "code": "Quinn"
            }, {
                "img": "Syndra.png",
                "name": "暗黑元首",
                "title": "辛德拉",
                "tags": ["Mage", "Support"],
                "id": "134",
                "code": "Syndra"
            }, {
                "img": "Zyra.png",
                "name": "荆棘之兴",
                "title": "婕拉",
                "tags": ["Mage", "Support"],
                "id": "143",
                "code": "Zyra"
            }, {
                "img": "Gnar.png",
                "name": "迷失之牙",
                "title": "纳尔",
                "tags": ["Fighter", "Tank"],
                "id": "150",
                "code": "Gnar"
            }, {
                "img": "Zac.png",
                "name": "生化魔人",
                "title": "扎克",
                "tags": ["Tank", "Fighter"],
                "id": "154",
                "code": "Zac"
            }, {
                "img": "Yasuo.png",
                "name": "疾风剑豪",
                "title": "亚索",
                "tags": ["Fighter", "Assassin"],
                "id": "157",
                "code": "Yasuo"
            }, {
                "img": "Velkoz.png",
                "name": "虚空之眼",
                "title": "维克兹",
                "tags": ["Mage"],
                "id": "161",
                "code": "Velkoz"
            }, {
                "img": "Braum.png",
                "name": "弗雷尔卓德之心",
                "title": "布隆",
                "tags": ["Support", "Tank"],
                "id": "201",
                "code": "Braum"
            }, {
                "img": "Kindred.png",
                "name": "永猎双子",
                "title": "千珏",
                "tags": ["Marksman"],
                "id": "203",
                "code": "Kindred"
            }, {
                "img": "Jinx.png",
                "name": "暴走萝莉",
                "title": "金克丝",
                "tags": ["Marksman"],
                "id": "222",
                "code": "Jinx"
            }, {
                "img": "TahmKench.png",
                "name": "河流之王",
                "title": "塔姆",
                "tags": ["Support", "Tank"],
                "id": "223",
                "code": "TahmKench"
            }, {
                "img": "Lucian.png",
                "name": "圣枪游侠",
                "title": "卢锡安",
                "tags": ["Marksman"],
                "id": "236",
                "code": "Lucian"
            }, {
                "img": "Zed.png",
                "name": "影流之主",
                "title": "劫",
                "tags": ["Assassin", "Fighter"],
                "id": "238",
                "code": "Zed"
            }, {
                "img": "Ekko.png",
                "name": "时间刺客",
                "title": "艾克",
                "tags": ["Assassin", "Fighter"],
                "id": "245",
                "code": "Ekko"
            }, {
                "img": "Vi.png",
                "name": "皮城执法官",
                "title": "蔚",
                "tags": ["Fighter", "Assassin"],
                "id": "254",
                "code": "Vi"
            }, {
                "img": "Aatrox.png",
                "name": "暗裔剑魔",
                "title": "亚托克斯",
                "tags": ["Fighter", "Tank"],
                "id": "266",
                "code": "Aatrox"
            }, {
                "img": "Nami.png",
                "name": "唤潮鲛姬",
                "title": "娜美",
                "tags": ["Support", "Mage"],
                "id": "267",
                "code": "Nami"
            }, {
                "img": "Azir.png",
                "name": "沙漠皇帝",
                "title": "阿兹尔",
                "tags": ["Mage", "Marksman"],
                "id": "268",
                "code": "Azir"
            }, {
                "img": "Thresh.png",
                "name": "魂锁典狱长",
                "title": "锤石",
                "tags": ["Support", "Fighter"],
                "id": "412",
                "code": "Thresh"
            }, {
                "img": "Illaoi.png",
                "name": "海兽祭司",
                "title": "俄洛伊",
                "tags": ["Fighter", "Tank"],
                "id": "420",
                "code": "Illaoi"
            }, {
                "img": "RekSai.png",
                "name": "虚空遁地兽",
                "title": "雷克塞",
                "tags": ["Fighter"],
                "id": "421",
                "code": "RekSai"
            }, {
                "img": "Kalista.png",
                "name": "复仇之矛",
                "title": "卡莉丝塔",
                "tags": ["Marksman"],
                "id": "429",
                "code": "Kalista"
            }, {
                "img": "Bard.png",
                "name": "星界游神",
                "title": "巴德",
                "tags": ["Support", "Mage"],
                "id": "432",
                "code": "Bard"
            }]

        var championMap = {
            "1": {"img": "Annie.png", "name": "黑暗之女", "title": "安妮", "tags": ["Mage"], "id": "1", "code": "Annie"},
            "2": {
                "img": "Olaf.png",
                "name": "狂战士",
                "title": "奥拉夫",
                "tags": ["Fighter", "Tank"],
                "id": "2",
                "code": "Olaf"
            },
            "3": {
                "img": "Galio.png",
                "name": "哨兵之殇",
                "title": "加里奥",
                "tags": ["Tank", "Mage"],
                "id": "3",
                "code": "Galio"
            },
            "4": {
                "img": "TwistedFate.png",
                "name": "卡牌大师",
                "title": "崔斯特",
                "tags": ["Mage"],
                "id": "4",
                "code": "TwistedFate"
            },
            "5": {
                "img": "XinZhao.png",
                "name": "德邦总管",
                "title": "赵信",
                "tags": ["Fighter", "Assassin"],
                "id": "5",
                "code": "XinZhao"
            },
            "6": {
                "img": "Urgot.png",
                "name": "首领之傲",
                "title": "厄加特",
                "tags": ["Marksman", "Fighter"],
                "id": "6",
                "code": "Urgot"
            },
            "7": {
                "img": "Leblanc.png",
                "name": "诡术妖姬",
                "title": "乐芙兰",
                "tags": ["Assassin", "Mage"],
                "id": "7",
                "code": "Leblanc"
            },
            "8": {
                "img": "Vladimir.png",
                "name": "猩红收割者",
                "title": "弗拉基米尔",
                "tags": ["Mage", "Tank"],
                "id": "8",
                "code": "Vladimir"
            },
            "9": {
                "img": "FiddleSticks.png",
                "name": "末日使者",
                "title": "费德提克",
                "tags": ["Mage", "Support"],
                "id": "9",
                "code": "FiddleSticks"
            },
            "10": {
                "img": "Kayle.png",
                "name": "审判天使",
                "title": "凯尔",
                "tags": ["Fighter", "Support"],
                "id": "10",
                "code": "Kayle"
            },
            "11": {
                "img": "MasterYi.png",
                "name": "无极剑圣",
                "title": "易",
                "tags": ["Assassin", "Fighter"],
                "id": "11",
                "code": "MasterYi"
            },
            "12": {
                "img": "Alistar.png",
                "name": "牛头酋长",
                "title": "阿利斯塔",
                "tags": ["Tank", "Support"],
                "id": "12",
                "code": "Alistar"
            },
            "13": {
                "img": "Ryze.png",
                "name": "流浪法师",
                "title": "瑞兹",
                "tags": ["Mage", "Fighter"],
                "id": "13",
                "code": "Ryze"
            },
            "14": {
                "img": "Sion.png",
                "name": "亡灵战神",
                "title": "赛恩",
                "tags": ["Tank", "Fighter"],
                "id": "14",
                "code": "Sion"
            },
            "15": {
                "img": "Sivir.png",
                "name": "战争女神",
                "title": "希维尔",
                "tags": ["Marksman"],
                "id": "15",
                "code": "Sivir"
            },
            "16": {
                "img": "Soraka.png",
                "name": "众星之子",
                "title": "索拉卡",
                "tags": ["Support", "Mage"],
                "id": "16",
                "code": "Soraka"
            },
            "17": {
                "img": "Teemo.png",
                "name": "迅捷斥候",
                "title": "提莫",
                "tags": ["Marksman", "Assassin"],
                "id": "17",
                "code": "Teemo"
            },
            "18": {
                "img": "Tristana.png",
                "name": "麦林炮手",
                "title": "崔丝塔娜",
                "tags": ["Marksman", "Assassin"],
                "id": "18",
                "code": "Tristana"
            },
            "19": {
                "img": "Warwick.png",
                "name": "嗜血猎手",
                "title": "沃里克",
                "tags": ["Fighter", "Tank"],
                "id": "19",
                "code": "Warwick"
            },
            "20": {
                "img": "Nunu.png",
                "name": "雪人骑士",
                "title": "努努",
                "tags": ["Support", "Fighter"],
                "id": "20",
                "code": "Nunu"
            },
            "21": {
                "img": "MissFortune.png",
                "name": "赏金猎人",
                "title": "厄运小姐",
                "tags": ["Marksman"],
                "id": "21",
                "code": "MissFortune"
            },
            "22": {
                "img": "Ashe.png",
                "name": "寒冰射手",
                "title": "艾希",
                "tags": ["Marksman", "Support"],
                "id": "22",
                "code": "Ashe"
            },
            "23": {
                "img": "Tryndamere.png",
                "name": "蛮族之王",
                "title": "泰达米尔",
                "tags": ["Fighter", "Assassin"],
                "id": "23",
                "code": "Tryndamere"
            },
            "24": {
                "img": "Jax.png",
                "name": "武器大师",
                "title": "贾克斯",
                "tags": ["Fighter", "Assassin"],
                "id": "24",
                "code": "Jax"
            },
            "25": {
                "img": "Morgana.png",
                "name": "堕落天使",
                "title": "莫甘娜",
                "tags": ["Mage", "Support"],
                "id": "25",
                "code": "Morgana"
            },
            "26": {
                "img": "Zilean.png",
                "name": "时光守护者",
                "title": "基兰",
                "tags": ["Support", "Mage"],
                "id": "26",
                "code": "Zilean"
            },
            "27": {
                "img": "Singed.png",
                "name": "炼金术士",
                "title": "辛吉德",
                "tags": ["Tank", "Fighter"],
                "id": "27",
                "code": "Singed"
            },
            "28": {
                "img": "Evelynn.png",
                "name": "寡妇制造者",
                "title": "伊芙琳",
                "tags": ["Assassin", "Mage"],
                "id": "28",
                "code": "Evelynn"
            },
            "29": {
                "img": "Twitch.png",
                "name": "瘟疫之源",
                "title": "图奇",
                "tags": ["Marksman", "Assassin"],
                "id": "29",
                "code": "Twitch"
            },
            "30": {
                "img": "Karthus.png",
                "name": "死亡颂唱者",
                "title": "卡尔萨斯",
                "tags": ["Mage"],
                "id": "30",
                "code": "Karthus"
            },
            "31": {
                "img": "Chogath.png",
                "name": "虚空恐惧",
                "title": "科加斯",
                "tags": ["Tank", "Mage"],
                "id": "31",
                "code": "Chogath"
            },
            "32": {
                "img": "Amumu.png",
                "name": "殇之木乃伊",
                "title": "阿木木",
                "tags": ["Tank", "Mage"],
                "id": "32",
                "code": "Amumu"
            },
            "33": {
                "img": "Rammus.png",
                "name": "披甲龙龟",
                "title": "拉莫斯",
                "tags": ["Tank", "Fighter"],
                "id": "33",
                "code": "Rammus"
            },
            "34": {
                "img": "Anivia.png",
                "name": "冰晶凤凰",
                "title": "艾尼维亚",
                "tags": ["Mage", "Support"],
                "id": "34",
                "code": "Anivia"
            },
            "35": {
                "img": "Shaco.png",
                "name": "恶魔小丑",
                "title": "萨科",
                "tags": ["Assassin"],
                "id": "35",
                "code": "Shaco"
            },
            "36": {
                "img": "DrMundo.png",
                "name": "祖安狂人",
                "title": "蒙多医生",
                "tags": ["Fighter", "Tank"],
                "id": "36",
                "code": "DrMundo"
            },
            "37": {
                "img": "Sona.png",
                "name": "琴瑟仙女",
                "title": "娑娜",
                "tags": ["Support", "Mage"],
                "id": "37",
                "code": "Sona"
            },
            "38": {
                "img": "Kassadin.png",
                "name": "虚空行者",
                "title": "卡萨丁",
                "tags": ["Assassin", "Mage"],
                "id": "38",
                "code": "Kassadin"
            },
            "39": {
                "img": "Irelia.png",
                "name": "刀锋意志",
                "title": "艾瑞莉娅",
                "tags": ["Fighter", "Assassin"],
                "id": "39",
                "code": "Irelia"
            },
            "40": {
                "img": "Janna.png",
                "name": "风暴之怒",
                "title": "迦娜",
                "tags": ["Support", "Mage"],
                "id": "40",
                "code": "Janna"
            },
            "41": {
                "img": "Gangplank.png",
                "name": "海洋之灾",
                "title": "普朗克",
                "tags": ["Fighter"],
                "id": "41",
                "code": "Gangplank"
            },
            "42": {
                "img": "Corki.png",
                "name": "英勇投弹手",
                "title": "库奇",
                "tags": ["Marksman"],
                "id": "42",
                "code": "Corki"
            },
            "43": {
                "img": "Karma.png",
                "name": "天启者",
                "title": "卡尔玛",
                "tags": ["Mage", "Support"],
                "id": "43",
                "code": "Karma"
            },
            "44": {
                "img": "Taric.png",
                "name": "宝石骑士",
                "title": "塔里克",
                "tags": ["Support", "Fighter"],
                "id": "44",
                "code": "Taric"
            },
            "45": {"img": "Veigar.png", "name": "邪恶小法师", "title": "维迦", "tags": ["Mage"], "id": "45", "code": "Veigar"},
            "48": {
                "img": "Trundle.png",
                "name": "巨魔之王",
                "title": "特朗德尔",
                "tags": ["Fighter", "Tank"],
                "id": "48",
                "code": "Trundle"
            },
            "50": {
                "img": "Swain.png",
                "name": "策士统领",
                "title": "斯维因",
                "tags": ["Mage", "Fighter"],
                "id": "50",
                "code": "Swain"
            },
            "51": {
                "img": "Caitlyn.png",
                "name": "皮城女警",
                "title": "凯特琳",
                "tags": ["Marksman"],
                "id": "51",
                "code": "Caitlyn"
            },
            "53": {
                "img": "Blitzcrank.png",
                "name": "蒸汽机器人",
                "title": "布里茨",
                "tags": ["Tank", "Fighter"],
                "id": "53",
                "code": "Blitzcrank"
            },
            "54": {
                "img": "Malphite.png",
                "name": "熔岩巨兽",
                "title": "墨菲特",
                "tags": ["Tank", "Fighter"],
                "id": "54",
                "code": "Malphite"
            },
            "55": {
                "img": "Katarina.png",
                "name": "不祥之刃",
                "title": "卡特琳娜",
                "tags": ["Assassin", "Mage"],
                "id": "55",
                "code": "Katarina"
            },
            "56": {
                "img": "Nocturne.png",
                "name": "永恒梦魇",
                "title": "魔腾",
                "tags": ["Assassin", "Fighter"],
                "id": "56",
                "code": "Nocturne"
            },
            "57": {
                "img": "Maokai.png",
                "name": "扭曲树精",
                "title": "茂凯",
                "tags": ["Tank", "Mage"],
                "id": "57",
                "code": "Maokai"
            },
            "58": {
                "img": "Renekton.png",
                "name": "荒漠屠夫",
                "title": "雷克顿",
                "tags": ["Fighter", "Tank"],
                "id": "58",
                "code": "Renekton"
            },
            "59": {
                "img": "JarvanIV.png",
                "name": "德玛西亚皇子",
                "title": "嘉文四世",
                "tags": ["Tank", "Fighter"],
                "id": "59",
                "code": "JarvanIV"
            },
            "60": {
                "img": "Elise.png",
                "name": "蜘蛛女皇",
                "title": "伊莉丝",
                "tags": ["Mage", "Fighter"],
                "id": "60",
                "code": "Elise"
            },
            "61": {
                "img": "Orianna.png",
                "name": "发条魔灵",
                "title": "奥莉安娜",
                "tags": ["Mage", "Support"],
                "id": "61",
                "code": "Orianna"
            },
            "62": {
                "img": "MonkeyKing.png",
                "name": "齐天大圣",
                "title": "孙悟空",
                "tags": ["Fighter", "Tank"],
                "id": "62",
                "code": "MonkeyKing"
            },
            "63": {"img": "Brand.png", "name": "复仇焰魂", "title": "布兰德", "tags": ["Mage"], "id": "63", "code": "Brand"},
            "64": {
                "img": "LeeSin.png",
                "name": "盲僧",
                "title": "李青",
                "tags": ["Fighter", "Assassin"],
                "id": "64",
                "code": "LeeSin"
            },
            "67": {
                "img": "Vayne.png",
                "name": "暗夜猎手",
                "title": "薇恩",
                "tags": ["Marksman", "Assassin"],
                "id": "67",
                "code": "Vayne"
            },
            "68": {
                "img": "Rumble.png",
                "name": "机械公敌",
                "title": "兰博",
                "tags": ["Fighter", "Mage"],
                "id": "68",
                "code": "Rumble"
            },
            "69": {
                "img": "Cassiopeia.png",
                "name": "魔蛇之拥",
                "title": "卡西奥佩娅",
                "tags": ["Mage"],
                "id": "69",
                "code": "Cassiopeia"
            },
            "72": {
                "img": "Skarner.png",
                "name": "水晶先锋",
                "title": "斯卡纳",
                "tags": ["Fighter", "Tank"],
                "id": "72",
                "code": "Skarner"
            },
            "74": {
                "img": "Heimerdinger.png",
                "name": "大发明家",
                "title": "黑默丁格",
                "tags": ["Mage", "Support"],
                "id": "74",
                "code": "Heimerdinger"
            },
            "75": {
                "img": "Nasus.png",
                "name": "沙漠死神",
                "title": "内瑟斯",
                "tags": ["Fighter", "Tank"],
                "id": "75",
                "code": "Nasus"
            },
            "76": {
                "img": "Nidalee.png",
                "name": "狂野女猎手",
                "title": "奈德丽",
                "tags": ["Assassin", "Fighter"],
                "id": "76",
                "code": "Nidalee"
            },
            "77": {
                "img": "Udyr.png",
                "name": "兽灵行者",
                "title": "乌迪尔",
                "tags": ["Fighter", "Tank"],
                "id": "77",
                "code": "Udyr"
            },
            "78": {
                "img": "Poppy.png",
                "name": "圣锤之毅",
                "title": "波比",
                "tags": ["Tank", "Fighter"],
                "id": "78",
                "code": "Poppy"
            },
            "79": {
                "img": "Gragas.png",
                "name": "酒桶",
                "title": "古拉加斯",
                "tags": ["Fighter", "Mage"],
                "id": "79",
                "code": "Gragas"
            },
            "80": {
                "img": "Pantheon.png",
                "name": "战争之王",
                "title": "潘森",
                "tags": ["Fighter", "Assassin"],
                "id": "80",
                "code": "Pantheon"
            },
            "81": {
                "img": "Ezreal.png",
                "name": "探险家",
                "title": "伊泽瑞尔",
                "tags": ["Marksman", "Mage"],
                "id": "81",
                "code": "Ezreal"
            },
            "82": {
                "img": "Mordekaiser.png",
                "name": "铁铠冥魂",
                "title": "莫德凯撒",
                "tags": ["Fighter", "Mage"],
                "id": "82",
                "code": "Mordekaiser"
            },
            "83": {
                "img": "Yorick.png",
                "name": "掘墓者",
                "title": "约里克",
                "tags": ["Fighter", "Mage"],
                "id": "83",
                "code": "Yorick"
            },
            "84": {
                "img": "Akali.png",
                "name": "暗影之拳",
                "title": "阿卡丽",
                "tags": ["Assassin"],
                "id": "84",
                "code": "Akali"
            },
            "85": {
                "img": "Kennen.png",
                "name": "狂暴之心",
                "title": "凯南",
                "tags": ["Mage", "Marksman"],
                "id": "85",
                "code": "Kennen"
            },
            "86": {
                "img": "Garen.png",
                "name": "德玛西亚之力",
                "title": "盖伦",
                "tags": ["Fighter", "Tank"],
                "id": "86",
                "code": "Garen"
            },
            "89": {
                "img": "Leona.png",
                "name": "曙光女神",
                "title": "蕾欧娜",
                "tags": ["Tank", "Support"],
                "id": "89",
                "code": "Leona"
            },
            "90": {
                "img": "Malzahar.png",
                "name": "虚空先知",
                "title": "玛尔扎哈",
                "tags": ["Mage", "Assassin"],
                "id": "90",
                "code": "Malzahar"
            },
            "91": {
                "img": "Talon.png",
                "name": "刀锋之影",
                "title": "泰隆",
                "tags": ["Assassin", "Fighter"],
                "id": "91",
                "code": "Talon"
            },
            "92": {
                "img": "Riven.png",
                "name": "放逐之刃",
                "title": "锐雯",
                "tags": ["Fighter", "Assassin"],
                "id": "92",
                "code": "Riven"
            },
            "96": {
                "img": "KogMaw.png",
                "name": "深渊巨口",
                "title": "克格莫",
                "tags": ["Marksman", "Mage"],
                "id": "96",
                "code": "KogMaw"
            },
            "98": {
                "img": "Shen.png",
                "name": "暮光之眼",
                "title": "慎",
                "tags": ["Tank", "Fighter"],
                "id": "98",
                "code": "Shen"
            },
            "99": {
                "img": "Lux.png",
                "name": "光辉女郎",
                "title": "拉克丝",
                "tags": ["Mage", "Support"],
                "id": "99",
                "code": "Lux"
            },
            "101": {
                "img": "Xerath.png",
                "name": "远古巫灵",
                "title": "泽拉斯",
                "tags": ["Mage", "Assassin"],
                "id": "101",
                "code": "Xerath"
            },
            "102": {
                "img": "Shyvana.png",
                "name": "龙血武姬",
                "title": "希瓦娜",
                "tags": ["Fighter", "Tank"],
                "id": "102",
                "code": "Shyvana"
            },
            "103": {
                "img": "Ahri.png",
                "name": "九尾妖狐",
                "title": "阿狸",
                "tags": ["Mage", "Assassin"],
                "id": "103",
                "code": "Ahri"
            },
            "104": {
                "img": "Graves.png",
                "name": "法外狂徒",
                "title": "格雷福斯",
                "tags": ["Marksman"],
                "id": "104",
                "code": "Graves"
            },
            "105": {
                "img": "Fizz.png",
                "name": "潮汐海灵",
                "title": "菲兹",
                "tags": ["Assassin", "Fighter"],
                "id": "105",
                "code": "Fizz"
            },
            "106": {
                "img": "Volibear.png",
                "name": "雷霆咆哮",
                "title": "沃利贝尔",
                "tags": ["Fighter", "Tank"],
                "id": "106",
                "code": "Volibear"
            },
            "107": {
                "img": "Rengar.png",
                "name": "傲之追猎者",
                "title": "雷恩加尔",
                "tags": ["Assassin", "Fighter"],
                "id": "107",
                "code": "Rengar"
            },
            "110": {
                "img": "Varus.png",
                "name": "惩戒之箭",
                "title": "韦鲁斯",
                "tags": ["Marksman", "Mage"],
                "id": "110",
                "code": "Varus"
            },
            "111": {
                "img": "Nautilus.png",
                "name": "深海泰坦",
                "title": "诺提勒斯",
                "tags": ["Tank", "Fighter"],
                "id": "111",
                "code": "Nautilus"
            },
            "112": {
                "img": "Viktor.png",
                "name": "机械先驱",
                "title": "维克托",
                "tags": ["Mage"],
                "id": "112",
                "code": "Viktor"
            },
            "113": {
                "img": "Sejuani.png",
                "name": "凛冬之怒",
                "title": "瑟庄妮",
                "tags": ["Tank", "Fighter"],
                "id": "113",
                "code": "Sejuani"
            },
            "114": {
                "img": "Fiora.png",
                "name": "无双剑姬",
                "title": "菲奥娜",
                "tags": ["Fighter", "Assassin"],
                "id": "114",
                "code": "Fiora"
            },
            "115": {"img": "Ziggs.png", "name": "爆破鬼才", "title": "吉格斯", "tags": ["Mage"], "id": "115", "code": "Ziggs"},
            "117": {
                "img": "Lulu.png",
                "name": "仙灵女巫",
                "title": "璐璐",
                "tags": ["Support", "Mage"],
                "id": "117",
                "code": "Lulu"
            },
            "119": {
                "img": "Draven.png",
                "name": "荣耀行刑官",
                "title": "德莱文",
                "tags": ["Marksman"],
                "id": "119",
                "code": "Draven"
            },
            "120": {
                "img": "Hecarim.png",
                "name": "战争之影",
                "title": "赫卡里姆",
                "tags": ["Fighter", "Tank"],
                "id": "120",
                "code": "Hecarim"
            },
            "121": {
                "img": "Khazix.png",
                "name": "虚空掠夺者",
                "title": "卡兹克",
                "tags": ["Assassin", "Fighter"],
                "id": "121",
                "code": "Khazix"
            },
            "122": {
                "img": "Darius.png",
                "name": "诺克萨斯之手",
                "title": "德莱厄斯",
                "tags": ["Fighter", "Tank"],
                "id": "122",
                "code": "Darius"
            },
            "126": {
                "img": "Jayce.png",
                "name": "未来守护者",
                "title": "杰斯",
                "tags": ["Fighter", "Marksman"],
                "id": "126",
                "code": "Jayce"
            },
            "127": {
                "img": "Lissandra.png",
                "name": "冰霜女巫",
                "title": "丽桑卓",
                "tags": ["Mage"],
                "id": "127",
                "code": "Lissandra"
            },
            "131": {
                "img": "Diana.png",
                "name": "皎月女神",
                "title": "黛安娜",
                "tags": ["Fighter", "Mage"],
                "id": "131",
                "code": "Diana"
            },
            "133": {
                "img": "Quinn.png",
                "name": "德玛西亚之翼",
                "title": "奎因",
                "tags": ["Marksman", "Fighter"],
                "id": "133",
                "code": "Quinn"
            },
            "134": {
                "img": "Syndra.png",
                "name": "暗黑元首",
                "title": "辛德拉",
                "tags": ["Mage", "Support"],
                "id": "134",
                "code": "Syndra"
            },
            "143": {
                "img": "Zyra.png",
                "name": "荆棘之兴",
                "title": "婕拉",
                "tags": ["Mage", "Support"],
                "id": "143",
                "code": "Zyra"
            },
            "150": {
                "img": "Gnar.png",
                "name": "迷失之牙",
                "title": "纳尔",
                "tags": ["Fighter", "Tank"],
                "id": "150",
                "code": "Gnar"
            },
            "154": {
                "img": "Zac.png",
                "name": "生化魔人",
                "title": "扎克",
                "tags": ["Tank", "Fighter"],
                "id": "154",
                "code": "Zac"
            },
            "157": {
                "img": "Yasuo.png",
                "name": "疾风剑豪",
                "title": "亚索",
                "tags": ["Fighter", "Assassin"],
                "id": "157",
                "code": "Yasuo"
            },
            "161": {
                "img": "Velkoz.png",
                "name": "虚空之眼",
                "title": "维克兹",
                "tags": ["Mage"],
                "id": "161",
                "code": "Velkoz"
            },
            "201": {
                "img": "Braum.png",
                "name": "弗雷尔卓德之心",
                "title": "布隆",
                "tags": ["Support", "Tank"],
                "id": "201",
                "code": "Braum"
            },
            "203": {
                "img": "Kindred.png",
                "name": "永猎双子",
                "title": "千珏",
                "tags": ["Marksman"],
                "id": "203",
                "code": "Kindred"
            },
            "222": {
                "img": "Jinx.png",
                "name": "暴走萝莉",
                "title": "金克丝",
                "tags": ["Marksman"],
                "id": "222",
                "code": "Jinx"
            },
            "223": {
                "img": "TahmKench.png",
                "name": "河流之王",
                "title": "塔姆",
                "tags": ["Support", "Tank"],
                "id": "223",
                "code": "TahmKench"
            },
            "236": {
                "img": "Lucian.png",
                "name": "圣枪游侠",
                "title": "卢锡安",
                "tags": ["Marksman"],
                "id": "236",
                "code": "Lucian"
            },
            "238": {
                "img": "Zed.png",
                "name": "影流之主",
                "title": "劫",
                "tags": ["Assassin", "Fighter"],
                "id": "238",
                "code": "Zed"
            },
            "245": {
                "img": "Ekko.png",
                "name": "时间刺客",
                "title": "艾克",
                "tags": ["Assassin", "Fighter"],
                "id": "245",
                "code": "Ekko"
            },
            "254": {
                "img": "Vi.png",
                "name": "皮城执法官",
                "title": "蔚",
                "tags": ["Fighter", "Assassin"],
                "id": "254",
                "code": "Vi"
            },
            "266": {
                "img": "Aatrox.png",
                "name": "暗裔剑魔",
                "title": "亚托克斯",
                "tags": ["Fighter", "Tank"],
                "id": "266",
                "code": "Aatrox"
            },
            "267": {
                "img": "Nami.png",
                "name": "唤潮鲛姬",
                "title": "娜美",
                "tags": ["Support", "Mage"],
                "id": "267",
                "code": "Nami"
            },
            "268": {
                "img": "Azir.png",
                "name": "沙漠皇帝",
                "title": "阿兹尔",
                "tags": ["Mage", "Marksman"],
                "id": "268",
                "code": "Azir"
            },
            "412": {
                "img": "Thresh.png",
                "name": "魂锁典狱长",
                "title": "锤石",
                "tags": ["Support", "Fighter"],
                "id": "412",
                "code": "Thresh"
            },
            "420": {
                "img": "Illaoi.png",
                "name": "海兽祭司",
                "title": "俄洛伊",
                "tags": ["Fighter", "Tank"],
                "id": "420",
                "code": "Illaoi"
            },
            "421": {
                "img": "RekSai.png",
                "name": "虚空遁地兽",
                "title": "雷克塞",
                "tags": ["Fighter"],
                "id": "421",
                "code": "RekSai"
            },
            "429": {
                "img": "Kalista.png",
                "name": "复仇之矛",
                "title": "卡莉丝塔",
                "tags": ["Marksman"],
                "id": "429",
                "code": "Kalista"
            },
            "432": {
                "img": "Bard.png",
                "name": "星界游神",
                "title": "巴德",
                "tags": ["Support", "Mage"],
                "id": "432",
                "code": "Bard"
            },
            "136": {
                "img": "AurelionSol.png",
                "name": "奥瑞利安索尔",
                "title": "铸星龙王",
                "tags": ["Mage"],
                "id": "136",
                "code": "AurelionSol"
            },
            "202": {"img": "Jhin.png", "name": "烬", "title": "戏命师", "tags": ["Mage"], "id": "202", "code": "Jhin"}
        }

        rt.getAllChampion = function () {
            return champions;
        }

        rt.getChampionBySlice = function (num) {
            var result = [];
            for (var i = 0, len = champions.length; i < len; i += num) {
                result.push(champions.slice(i, i + num));
            }
            return result;
        }
        rt.findChampionName = function (id) {
            var championDate = championMap[id]
            return championDate.title;
        }
        rt.findChampionImg = function (id) {
            var championDate = championMap[id]
            return championDate.img;
        }
        return rt;
    }
)
