# 中国色

<!-- <ChineseColors /> -->


<!-- <template> -->
<div class="chinese-colors">
  <div class="left-colors-container">
    <div v-for="series in lstAllColors" :key="series.series" class="color-series">
      <h2>{{ series.name }}</h2>
      <div class="color-grid">
        <div
          v-for="color in series.colors"
          :key="color[1]"
          class="color-block"
          :style="{ backgroundColor: '#' + color[2] }"
          @click="onColorClick(color)"
        >
          <div class="color-info" :style="{ color: calcTextColor(color[2]) }">
            <div class="color-name">{{ color[0] }}</div>
            <div class="color-pinyin">{{ color[1] }}</div>
            <div class="color-hex">#{{ color[2] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="right-colors-container">
    <div class="selected-color-block" :style="{ backgroundColor: '#' + selectedColor[2] }">
      <!-- 大字体显示中国色3个字 -->
      <div class="selected-color-text" :style="{ color: calcTextColor(selectedColor[2]) }">中国色</div>
      <!-- 小字体显示选中的颜色 -->
      <div class="selected-color-text-info" :style="{ color: calcTextColor(selectedColor[2]) }">{{ selectedColor[0] }}</div>
      <!-- 小字体显示选中的颜色拼音 -->
      <div class="selected-color-text-info" :style="{ color: calcTextColor(selectedColor[2]) }">{{ selectedColor[1] }}</div>
      <!-- 小字体显示选中的颜色十六进制 -->
      <div class="selected-color-text-info" :style="{ color: calcTextColor(selectedColor[2]) }">#{{ selectedColor[2] }}</div>
    </div>
  </div>
</div>
<!-- </template> -->

<script setup>
import { ref, onMounted, computed } from 'vue'
// import ChineseColors from 'ChineseColors.js'

// 中国色
const ChineseColors = [
  // 红色系
  {
      series: 'red',
      name: '红色系',
      colors: [
          ["艳红", "yanhong", "ed5a65"],
          ["玉红", "yuhong", "c04851"],
          ["茶花红", "chahuahong", "ee3f4d"],
          ["高粱红", "gaolianghong", "c02c38"],
          ["满江红", "manjianghong", "a7535a"],
          ["鼠鼻红", "shubihong", "e3b4b8"],
          ["合欢红", "hehuanhong", "f0a1a8"],
          ["春梅红", "chunmeihong", "f1939c"],
          ["苋菜红", "xiancaihong", "a61b29"],
          ["烟红", "yanhong", "894e54"],
          ["莓红", "meihong", "c45a65"],
          ["鹅冠红", "eguanhong", "d11a2d"],
          ["枫叶红", "fengyehong", "c21f30"],
          ["唐菖蒲红", "tangchangpuhong", "de1c31"],
          ["枣红", "zaohong", "7c1823"],
          ["殷红", "yanhong", "82111f"],
          ["草茉莉红", "caomolihong", "ef475d"],
          ["山茶红", "shanchahong", "ed556a"],
          ["海棠红", "haitanghong", "f03752"],
          ["蓟粉红", "jifenhong", "e6d2d5"],
          ["石蕊红", "shiruihong", "f0c9cf"],
          ["淡曙红", "danshuhong", "ee2746"],
          ["石竹红", "shizhuhong", "ee4863"],
          ["淡茜红", "danqianhong", "e77c8e"],
          ["山黎豆红", "shanlidouhong", "c27c88"],
          ["淡蕊香红", "danruixianghong", "ee4866"],
          ["月季红", "yuejihong", "ce5777"],
          ["尖晶玉红", "jianjingyuhong", "cc163a"],
          ["水红", "shuihong", "f1c4cd"],
          ["姜红", "jianghong", "eeb8c3"],
          ["锦葵红", "jinkuihong", "bf3553"],
          ["粉团花红", "fentuanhuahong", "ec9bad"],
          ["晶红", "jinghong", "eea6b7"],
          ["芍药耕红", "shaoyaogenghong", "eba0b3"],
          ["豇豆红", "jiangdouhong", "ed9db2"],
          ["报春红", "baochunhong", "ec8aa4"],
          ["淡绛红", "danjianghong", "ec7696"],
          ["凤仙花红", "fengxianhuahong", "ea7293"],
          ["霞光红", "xiaguanghong", "ef82a0"],
          ["喜蛋红", "xidanhong", "ec2c64"],
          ["夹竹桃红", "jiazhutaohong", "eb507e"],
          ["松叶牡丹红", "songyemudanhong", "eb3c70"],
          ["莲瓣红", "lianbanhong", "ea517f"],
          ["白芨红", "baijihong", "de7897"],
          ["榲桲红", "wenpohong", "ed2f6a"],
          ["酢酱草红", "cujiangcaohong", "c5708b"],
          ["品红", "pinhong", "ef3473"],
          ["初荷红", "chuhehong", "e16c96"],
          ["菠根红", "bogenhong", "d13c74"],
          ["兔眼红", "tuyanhong", "ec4e8a"],
          ["嫩菱红", "nenlinghong", "de3f7c"],
          ["吊钟花红", "diaozhonghuahong", "ce5e8a"],
          ["紫荆红", "zijinghong", "ee2c79"],
          ["扁豆花红", "biandouhuahong", "ef498b"],
          ["藏花红", "canghuahong", "ec2d7a"],
          ["丹紫红", "danzihong", "d2568c"],
          ["玫瑰红", "meiguihong", "d2357d"],
          ["菱锰红", "lingmenghong", "d276a3"],
          ["龙须红", "longxuhong", "cc5595"],
          ["电气石红", "dianqishihong", "c35691"],
          ["淡菽红", "danshuhong", "ed4845"],
          ["枸枢红", "goushuhong", "ed3333"],
      ]
  },

  // 橙色系
  {
      series: 'orange',
      name: '橙色系',
      colors: [
          ["淡橘橙", "danjucheng", "fba414"],
          ["橘橙", "jucheng", "f97d1c"],
          ["美人焦橙", "meirenjiaocheng", "fa7e23"],
          ["海螺橙", "hailuocheng", "f0945d"],
          ["金莲花橙", "jinlianhuacheng", "f86b1d"],
      ]
  },

  // 黄色系
  {
      series: 'yellow',
      name: '黄色系',
      colors: [
          ["姚黄", "yaohuang", "d0deaa"],
          ["佛手黄", "foshouhuang", "fed71a"],
          ["香蕉黄", "xiangjiaohuang", "e4bf11"],
          ["油菜花黄", "youcaihuahuang", "fbda41"],
          ["秋葵黄", "qiukuihuang", "eed045"],
          ["柚黄", "youhuang", "f1ca17"],
          ["草黄", "caohuang", "d2b42c"],
          ["硫华黄", "liuhuahuang", "f2ce2b"],
          ["姜黄", "jianghuang", "e2c027"],
          ["金瓜黄", "jinguahuang", "fcd217"],
          ["麦秆黄", "maiganhuang", "f8df70"],
          ["蒿黄", "haohuang", "dfc243"],
          ["茉莉黄", "molihuang", "f8df72"],
          ["藤黄", "tenghuang", "ffd111"],
          ["芒果黄", "mangguohuang", "ddc871"],
          ["柠檬黄", "ningmenghuang", "fcd337"],
          ["向日葵黄", "xiangrikuihuang", "fecc11"],
          ["素馨黄", "suxinhuang", "fccb16"],
          ["乳鸭黄", "ruyahuang", "ffc90c"],
          ["葵扇黄", "kuishanhuang", "f8d86a"],
          ["大豆黄", "dadouhuang", "fbcd31"],
          ["金盏黄", "jinzhanhuang", "fcc307"],
          ["黄连黄", "huanglianhuang", "fcc515"],
          ["杏仁黄", "xingrenhuang", "f7e8aa"],
          ["谷黄", "guhuang", "e8b004"],
          ["木瓜黄", "muguahuang", "f9c116"],
          ["淡茧黄", "danjianhuang", "f9d770"],
          ["雅梨黄", "yalihuang", "fbc82f"],
          ["鹦鹉冠黄", "yingwuguanhuang", "f6c430"],
          ["浅烙黄", "qianlaohuang", "f9bd10"],
          ["淡密黄", "danmihuang", "f9d367"],
          ["芥黄", "jiehuang", "d9a40e"],
          ["栀子黄", "zhizihuang", "ebb10d"],
          ["篾黄", "miehuang", "f7de98"],
          ["炒米黄", "chaomihuang", "f4ce69"],
          ["琥珀黄", "hupohuang", "feba07"],
          ["鼬黄", "youhuang", "fcb70a"],
          ["土黄", "tuhuang", "d6a01d"],
          ["虎皮黄", "hupihuang", "eaad1a"],
          ["鸡蛋黄", "jidanhuang", "fbb612"],
          ["初熟杏黄", "chushuxinghuang", "f8bc31"],
          ["山鸡黄", "shanjihuang", "b78b26"],
          ["沙石黄", "shashihuang", "e5b751"],
          ["甘草黄", "gancaohuang", "f3bf4c"],
          ["鹅掌黄", "ezhanghuang", "fbb929"],
          ["麦芽糖黄", "maiyatanghuang", "f9d27d"],
          ["酪黄", "laohuang", "f6dead"],
          ["橙皮黄", "chengpihuang", "fca104"],
          ["莱阳梨黄", "laiyanglihuang", "815f25"],
          ["枇杷黄", "pipahuang", "fca106"],
          ["金叶黄", "jinyehuang", "ffa60f"],
          ["苍黄", "canghuang", "806332"],
          ["雄黄", "xionghuang", "ff9900"],
          ["蜜黄", "mihuang", "fbb957"],
          ["风帆黄", "fengfanhuang", "dc9123"],
          ["金莺黄", "jinyinghuang", "f4a83a"],
          ["软木黄", "ruanmuhuang", "de9e44"],
          ["榴萼黄", "liuehuang", "f9a633"],
          ["玳瑁黄", "daimaohuang", "daa45a"],
          ["万寿菊黄", "wanshoujuhuang", "fb8b05"],
          ["蛋壳黄", "dankehuang", "f8c387"],
          ["杏黄", "xinghuang", "f28e16"],
          ["北瓜黄", "beiguahuang", "fc8c23"],
          ["金黄", "jinhuang", "f26b1f"],
      ]
  },

  // 绿色系
  {
      series: 'green',
      name: '绿色系',
      colors: [
          ["石绿", "shilv", "57c3c2"],
          ["美蝶绿", "meidielv", "12aa9c"],
          ["蓝绿", "lanlv", "12a182"],
          ["竹绿", "zhulv", "1ba784"],
          ["亚丁绿", "yadinglv", "428675"],
          ["海王绿", "haiwanglv", "248067"],
          ["深海绿", "shenhailv", "1a3b32"],
          ["青矾绿", "qingfanlv", "2c9678"],
          ["苍绿", "canglv", "223e36"],
          ["飞泉绿", "feiquanlv", "497568"],
          ["莽丛绿", "mangconglv", "141e1b"],
          ["梧枝绿", "wuzhilv", "69a794"],
          ["铜绿", "tonglv", "2bae85"],
          ["草原远绿", "caoyuanyuanlv", "9abeaf"],
          ["蛙绿", "walv", "45b787"],
          ["浪花绿", "langhualv", "92b3a5"],
          ["苷蓝绿", "ganlanlv", "1f2623"],
          ["粉绿", "fenlv", "83cbac"],
          ["麦苗绿", "maimiaolv", "55bb8a"],
          ["翠绿", "cuilv", "20a162"],
          ["葱绿", "conglv", "40a070"],
          ["荷叶绿", "heyelv", "1a6840"],
          ["淡绿", "danlv", "61ac85"],
          ["田园绿", "tianyuanlv", "68b88e"],
          ["玉簪绿", "yuzanlv", "a4cab6"],
          ["蟾绿", "chanlv", "3c9566"],
          ["蔻梢绿", "koushaolv", "5dbe8a"],
          ["薄荷绿", "bohelv", "207f4c"],
          ["蛋白石绿", "danbaishilv", "579572"],
          ["竹篁绿", "zhuhuanglv", "b9dec9"],
          ["孔雀绿", "kongquelv", "229453"],
          ["宫殿绿", "gongdianlv", "20894d"],
          ["云杉绿", "yunshanlv", "15231b"],
          ["毛绿", "maolv", "66c18c"],
          ["明绿", "minglv", "9eccab"],
          ["松霜绿", "songshuanglv", "83a78d"],
          ["白屈菜绿", "baiqucailv", "485b4d"],
          ["瓦松绿", "wasonglv", "6e8b74"],
          ["槲寄生绿", "hujishenglv", "2b312c"],
          ["淡翠绿", "dancuilv", "c6dfc8"],
          ["玉髓绿", "yusuilv", "41b349"],
          ["鲜绿", "xianlv", "43b244"],
          ["油绿", "youlv", "253d24"],
          ["宝石绿", "baoshilv", "41ae3c"],
          ["嘉陵水绿", "jialingshuilv", "add5a2"],
          ["田螺绿", "tianluolv", "5e665b"],
          ["水绿", "shuilv", "8cc269"],
          ["鹦鹉绿", "yingwulv", "5bae23"],
          ["艾背绿", "aibeilv", "dfecd5"],
          ["艾绿", "ailv", "cad3c3"],
          ["橄榄石绿", "ganlanshilv", "b2cf87"],
          ["芽绿", "yalv", "96c24e"],
          ["嫩菊绿", "nenjulv", "f0f5e5"],
          ["芦苇绿", "luweilv", "b7d07a"],
          ["蒽油绿", "enyoulv", "373834"],
          ["苹果绿", "pingguolv", "bacf65"],
          ["海沬绿", "haimeilv", "e2e7bf"],
          ["橄榄黄绿", "ganlanhuanglv", "bec936"],
          ["槐花黄绿", "huaihuahuanglv", "d2d97a"],
          ["潭水绿", "tanshuilv", "645822"],
          ["碧螺春绿", "biluochunlv", "867018"],
          ["苔绿", "tailv", "887322"],
          ["草灰绿", "caohuilv", "8e804b"],
          ["棕榈绿", "zonglvlv", "5b4913"],
          ["枯绿", "kulv", "b78d12"],
          ["暗海水绿", "anhaishuilv", "584717"],
          ["灰绿", "huilv", "8a6913"],
          ["粽叶绿", "zongyelv", "876818"],
          ["蜴蜊绿", "yililv", "835e1d"],
          ["古铜绿", "gutonglv", "533c1b"],
          ["焦茶绿", "jiaochalv", "553b18"],
          ["蟹壳绿", "xiekelv", "513c20"],
          ["橄榄绿", "ganlanlv", "5e5314"],
          ["新禾绿", "xinhelv", "d2b116"],
      ]
  },

  // 青色系
  {
      series: 'cyan',
      name: '青色系',
      colors: [
          ["虾壳青", "xiakeqing", "869d9d"],
          ["鲛青", "jiaoqing", "87723e"],
          ["钢青", "gangqing", "142334"],
          ["靛青", "dianqing", "1661ab"],
          ["碧青", "biqing", "5cb3cc"],
          ["花青", "huaqing", "2376b7"],
          ["群青", "qunqing", "1772b4"],
          ["海青", "haiqing", "22a2c3"],
          ["霁青", "jiqing", "63bbd0"],
      ]
  },

  // 蓝色系
  {
      series: 'blue',
      name: '蓝色系',
      colors: [
          ["钢蓝", "ganglan", "0f1423"],
          ["燕颔蓝", "yanhanlan", "131824"],
          ["鸽蓝", "gelan", "1c2938"],
          ["暗蓝", "anlan", "101f30"],
          ["海涛蓝", "haitaolan", "15559a"],
          ["飞燕草蓝", "feiyancaolan", "0f59a4"],
          ["安安蓝", "ananlan", "3170a7"],
          ["海军蓝", "haijunlan", "346c9c"],
          ["景泰蓝", "jingtailan", "2775b6"],
          ["品蓝", "pinlan", "2b73af"],
          ["尼罗蓝", "niluolan", "2474b5"],
          ["蝶翅蓝", "diechilan", "4e7ca1"],
          ["鷃蓝", "yanlan", "144a74"],
          ["星蓝", "xinglan", "93b5cf"],
          ["虹蓝", "honglan", "2177b8"],
          ["柏林蓝", "bolinlan", "126bae"],
          ["云水蓝", "yunshuilan", "baccd9"],
          ["羽扇豆蓝", "yushandoulan", "619ac3"],
          ["晴山蓝", "qingshanlan", "8fb2c9"],
          ["睛蓝", "jinglan", "5698c3"],
          ["搪磁蓝", "tangcilan", "11659a"],
          ["潮蓝", "chaolan", "2983bb"],
          ["天蓝", "tianlan", "1677b3"],
          ["牵牛花蓝", "qianniuhualan", "1177b0"],
          ["宝石蓝", "baoshilan", "2486b9"],
          ["釉蓝", "youlan", "1781b5"],
          ["涧石蓝", "jianshilan", "66a9c9"],
          ["远天蓝", "yuantianlan", "d0dfe6"],
          ["云山蓝", "yunshanlan", "2f90b9"],
          ["秋波蓝", "qiubolan", "8abcd1"],
          ["井天蓝", "jingtianlan", "c3d7df"],
          ["鸢尾蓝", "yuanweilan", "158bb8"],
          ["钴蓝", "gulan", "1a94bc"],
          ["苍蓝", "canglan", "134857"],
          ["深灰蓝", "shenhuilan", "132c33"],
          ["灰蓝", "huilan", "21373d"],
          ["湖水蓝", "hushuilan", "b0d5df"],
          ["玉鈫蓝", "yuqinlan", "126e82"],
          ["胆矾蓝", "danfanlan", "0f95b0"],
          ["樫鸟蓝", "jianniaolan", "1491a8"],
          ["鸥蓝", "oulan", "c7d2d4"],
          ["翠蓝", "cuilan", "1e9eb3"],
          ["蜻蜓蓝", "qingtinglan", "3b818c"],
          ["孔雀蓝", "kongquelan", "0eb0c9"],
          ["蔚蓝", "weilan", "29b7cb"],
          ["瀑布蓝", "pubulan", "51c4d3"],
          ["闪蓝", "shanlan", "7cabb1"],
          ["甸子蓝", "dianzilan", "10aec2"],
          ["晚波蓝", "wanbolan", "648e93"],
          ["清水蓝", "qingshuilan", "93d5dc"],
          ["海天蓝", "haitianlan", "c6e6e8"],
      ],
  },

  // 紫色系
  {
      series: 'purple',
      name: '紫色系',
      colors: [
          ["暗玉紫", "anyuzi", "5c2223"],
          ["栗紫", "lizi", "5a191b"],
          ["葡萄酱紫", "putaojiangzi", "5a1216"],
          ["猪肝紫", "zhuganzi", "541e24"],
          ["葡萄紫", "putaozi", "4c1f24"],
          ["酱紫", "jiangzi", "4d1018"],
          ["玫瑰紫", "meiguizi", "ba2f7b"],
          ["苋菜紫", "xiancaizi", "9b1e64"],
          ["青蛤壳紫", "qinghakezi", "bc84a8"],
          ["萝兰紫", "luolanzi", "c08eaf"],
          ["豆蔻紫", "doukouzi", "ad6598"],
          ["扁豆紫", "biandouzi", "a35c8f"],
          ["芓紫", "zizi", "894276"],
          ["葛巾紫", "gejinzi", "7e2065"],
          ["芥花紫", "jiehuazi", "983680"],
          ["魏紫", "weizi", "7e1671"],
          ["桔梗紫", "jiegengzi", "813c85"],
          ["蕈紫", "xunzi", "815c94"],
          ["槿紫", "jinzi", "806d9e"],
          ["藤萝紫", "tengluozi", "8076a3"],
          ["野菊紫", "yejuzi", "525288"],
          ["螺甸紫", "luodianzi", "74759b"],
          ["满天星紫", "mantianxingzi", "2e317c"],
          ["山梗紫", "shangengzi", "61649f"],
          ["深牵牛紫", "shenqianniuzi", "1c0d1a"],
          ["乌梅紫", "wumeizi", "1e131d"],
          ["龙葵紫", "longkuizi", "322f3b"],
          ["暗龙胆紫", "anlongdanzi", "22202e"],
          ["暗蓝紫", "anlanzi", "131124"],
          ["野葡萄紫", "yeputaozi", "302f4b"],
          ["晶石紫", "jingshizi", "1f2040"],
          ["淡藤萝紫", "dantengluozi", "f2e7e5"],
          ["丁香淡紫", "dingxiangdanzi", "e9d7df"],
          ["淡牵牛紫", "danqianniuzi", "d1c2d3"],
          ["远山紫", "yuanshanzi", "ccccd6"],
          ["淡蓝紫", "danlanzi", "a7a8bd"],
          ["马鞭草紫", "mabiancaozi", "ede3e7"],
          ["淡青紫", "danqingzi", "e0c8d1"],
          ["芝兰紫", "zhilanzi", "e9ccd3"],
          ["凤信紫", "fengxinzi", "c8adc4"],
          ["貂紫", "diaozi", "5d3131"],
          ["青莲", "qinglian", "8b2671"],
      ]
  },

  // 灰色系
  {
      series: 'gray',
      name: '灰色系',
      colors: [
          ["锌灰", "xinhui", "7a7374"],
          ["鼠背灰", "shubeihui", "73575c"],
          ["芦灰", "luhui", "856d72"],
          ["苍蝇灰", "cangyinghui", "36282b"],
          ["暮云灰", "muyunhui", "4f383e"],
          ["隐红灰", "yinhonghui", "b598a1"],
          ["战舰灰", "zhanjianhui", "495c69"],
          ["大理石灰", "dalishihui", "c4cbcf"],
          ["淡蓝灰", "danlanhui", "5e7987"],
          ["嫩灰", "nenhui", "74787a"],
          ["星灰", "xinghui", "b2bbbe"],
          ["黄昏灰", "huanghunhui", "474b4c"],
          ["斑鸠灰", "banjiuhui", "482936"],
          ["古鼎灰", "gudinghui", "36292f"],
          ["紫灰", "zihui", "5d3f51"],
          ["沙鱼灰", "shayuhui", "35333c"],
          ["水牛灰", "shuiniuhui", "2f2f35"],
          ["牛角灰", "niujiaohui", "2d2e36"],
          ["鱼尾灰", "yuweihui", "5e616d"],
          ["瓦罐灰", "waguanhui", "47484c"],
          ["鲸鱼灰", "jingyuhui", "475164"],
          ["青灰", "qinghui", "2b333e"],
          ["夏云灰", "xiayunhui", "617172"],
          ["穹灰", "qionghui", "c4d7d6"],
          ["垩灰", "ehui", "737c7b"],
          ["绿灰", "lvhui", "314a43"],
          ["淡绿灰", "danlvhui", "70887d"],
          ["镍灰", "niehui", "9fa39a"],
          ["月灰", "yuehui", "b7ae8f"],
          ["银鼠灰", "yinshuhui", "b5aa90"],
          ["燕羽灰", "yanyuhui", "685e48"],
          ["百灵鸟灰", "bailingniaohui", "b4a992"],
          ["河豚灰", "hetunhui", "393733"],
          ["珍珠灰", "zhenzhuhui", "e4dfd7"],
          ["浅灰", "qianhui", "dad4cb"],
          ["铅灰", "qianhui", "bbb5ac"],
          ["中灰", "zhonghui", "bbb5ac"],
          ["猴毛灰", "houmaohui", "97846c"],
          ["玛瑙灰", "manaohui", "cfccc9"],
          ["淡银灰", "danyinhui", "c1b2a3"],
          ["瓦灰", "wahui", "867e76"],
          ["夜灰", "yehui", "847c74"],
          ["松鼠灰", "songshuhui", "4f4032"],
          ["深灰", "shenhui", "81776e"],
          ["海鸥灰", "haiouhui", "9a8878"],
          ["银灰", "yinhui", "918072"],
          ["晓灰", "xiaohui", "d4c4b7"],
          ["雁灰", "yanhui", "80766e"],
          ["蛛网灰", "zhuwanghui", "b7a091"],
          ["长石灰", "changshihui", "363433"],
          ["中红灰", "zhonghonghui", "8b614d"],
          ["淡玫瑰灰", "danmeiguihui", "b89485"],
          ["珠母灰", "zhumuhui", "64483d"],
          ["淡铁灰", "dantiehui", "5b423a"],
          ["石板灰", "shibanhui", "624941"],
          ["玫瑰灰", "meiguihui", "4b2e2b"],
          ["芦穗灰", "lusuihui", "bdaead"],
          ["海报灰", "haibaohui", "483332"],
      ]
  },

  // 白色系
  {
      series: 'white',
      name: '白色系',
      colors: [
          ["汉白玉", "hanbaiyu", "f8f4ed"],
          ["芡食白", "qianshibai", "e2e1e4"],
          ["象牙白", "xiangyabai", "fffef8"],
          ["雪白", "xuebai", "fffef9"],
          ["乳白", "rubai", "f9f4dc"],
          ["海参灰", "haishenhui", "fffefa"],
          ["月影白", "yueyingbai", "c0c4c3"],
          ["银白", "yinbai", "f1f0ed"],
          ["蚌肉白", "bangroubai", "f9f1db"],
          ["鱼肚白", "yudubai", "f7f4ed"],
          ["莲子白", "lianzibai", "e5d3aa"],
          ["荔肉白", "liroubai", "f2e6ce"],
          ["云峰白", "yunfengbai", "d8e3e7"],
          ["淡米粉", "danmifen", "fbeee2"],
          ["粉白", "fenbai", "fbf2e3"],
          ["荷花白", "hehuabai", "fbecde"],
          ["月白", "yuebai", "eef7f2"],
      ]
  },

  // 其他
  {
      series: 'other',
      name: '其他',
      colors: [
          ["桂皮淡棕", "guipidanzong", "c09351"],
          ["凋叶棕", "diaoyezong", "e7a23f"],
      ]
  }
];

const lstAllColors = ref(ChineseColors);


const selectedColor = ref(ChineseColors[0].colors[0]);

const showToast = (hex) => {
  // 这里使用 VitePress 的 toast 组件
  // 实际使用时需要根据 VitePress 的 API 调整
  alert(`颜色值: #${hex}`)
}

const onColorClick = (colorCell) => {
  selectedColor.value = colorCell;
  // showToast(hex);
}

onMounted(() => {
    selectedColor.value = ChineseColors[0].colors[0];
    console.log('selectedColor.value:', selectedColor.value)
})

// 如果是比较亮的颜色，则返回黑色，否则返回白色
const calcTextColor = (hex) => {
  // 把hex中的3原色分别取出来
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  // 计算亮度
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  // 如果亮度大于128，则返回黑色，否则返回白色
  return brightness > 200 ? 'black' : 'white';
}

</script>

<style scoped>
.chinese-colors {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.left-colors-container {
  width: 66.67%;
  display: flex;
  flex-direction: column;
}

.right-colors-container {
  width: 33.33%;
  height: 600px;
  display: flex;
  flex-direction: column;
  /* background-color: #f0f0f0; */
  position: fixed;
  right: 0;
  bottom: 0;
  top: 100px;
  z-index: 100;
}

.color-series {
  margin-bottom: 2rem;
}

.color-series h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.color-block {
  position: relative;
  aspect-ratio: 1;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s;
}

.color-block:hover {
  transform: scale(1.05);
}

.selected-color-block {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform 3s;
}

.color-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  /* background-color: rgba(0, 0, 0, 0.7); */
  color: white;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.color-name {
  font-size: 0.9rem;
  font-weight: bold;
}

.color-pinyin {
  font-size: 0.8rem;
  opacity: 0.9;
}

.color-hex {
  font-size: 0.7rem;
  opacity: 0.8;
}

.selected-color-text {
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
}

.selected-color-text-info {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
}
</style> 