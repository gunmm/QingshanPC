//var ip = 'http://192.168.100.5:8080/QingShansProject/';
var ip = 'http://39.107.113.157:8080/QingShansProject/';

//var ip = 'http://21i5632e17.51mypc.cn/QingShansProject/';
//var ip = 'http://mzandsyl.info:10196/';

var provinceCity = '[{"deep":1,"name":"北京市","id":1,"sort":0,"parentId":0},{"deep":1,"name":"天津市","id":2,"sort":0,"parentId":0},{"deep":1,"name":"河北省","id":3,"sort":0,"parentId":0},{"deep":1,"name":"山西省","id":4,"sort":0,"parentId":0},{"deep":1,"name":"内蒙古","id":5,"sort":0,"parentId":0},{"deep":1,"name":"辽宁省","id":6,"sort":0,"parentId":0},{"deep":1,"name":"吉林省","id":7,"sort":0,"parentId":0},{"deep":1,"name":"黑龙江省","id":8,"sort":0,"parentId":0},{"deep":1,"name":"上海市","id":9,"sort":0,"parentId":0},{"deep":1,"name":"江苏省","id":10,"sort":0,"parentId":0},{"deep":1,"name":"浙江省","id":11,"sort":0,"parentId":0},{"deep":1,"name":"安徽省","id":12,"sort":0,"parentId":0},{"deep":1,"name":"福建省","id":13,"sort":0,"parentId":0},{"deep":1,"name":"江西省","id":14,"sort":0,"parentId":0},{"deep":1,"name":"山东省","id":15,"sort":0,"parentId":0},{"deep":1,"name":"河南省","id":16,"sort":0,"parentId":0},{"deep":1,"name":"湖北省","id":17,"sort":0,"parentId":0},{"deep":1,"name":"湖南省","id":18,"sort":0,"parentId":0},{"deep":1,"name":"广东省","id":19,"sort":0,"parentId":0},{"deep":1,"name":"广西","id":20,"sort":0,"parentId":0},{"deep":1,"name":"海南省","id":21,"sort":0,"parentId":0},{"deep":1,"name":"重庆市","id":22,"sort":0,"parentId":0},{"deep":1,"name":"四川省","id":23,"sort":0,"parentId":0},{"deep":1,"name":"贵州省","id":24,"sort":0,"parentId":0},{"deep":1,"name":"云南省","id":25,"sort":0,"parentId":0},{"deep":1,"name":"西藏","id":26,"sort":0,"parentId":0},{"deep":1,"name":"陕西省","id":27,"sort":0,"parentId":0},{"deep":1,"name":"甘肃省","id":28,"sort":0,"parentId":0},{"deep":1,"name":"青海省","id":29,"sort":0,"parentId":0},{"deep":1,"name":"宁夏","id":30,"sort":0,"parentId":0},{"deep":1,"name":"新疆","id":31,"sort":0,"parentId":0},{"deep":2,"name":"东城区","id":37,"sort":0,"parentId":1},{"deep":2,"name":"西城区","id":38,"sort":0,"parentId":1},{"deep":2,"name":"朝阳区","id":41,"sort":0,"parentId":1},{"deep":2,"name":"丰台区","id":42,"sort":0,"parentId":1},{"deep":2,"name":"石景山区","id":43,"sort":0,"parentId":1},{"deep":2,"name":"海淀区","id":44,"sort":0,"parentId":1},{"deep":2,"name":"门头沟区","id":45,"sort":0,"parentId":1},{"deep":2,"name":"房山区","id":46,"sort":0,"parentId":1},{"deep":2,"name":"通州区","id":47,"sort":0,"parentId":1},{"deep":2,"name":"顺义区","id":48,"sort":0,"parentId":1},{"deep":2,"name":"昌平区","id":49,"sort":0,"parentId":1},{"deep":2,"name":"大兴区","id":50,"sort":0,"parentId":1},{"deep":2,"name":"怀柔区","id":51,"sort":0,"parentId":1},{"deep":2,"name":"平谷区","id":52,"sort":0,"parentId":1},{"deep":2,"name":"密云县","id":53,"sort":0,"parentId":1},{"deep":2,"name":"延庆县","id":54,"sort":0,"parentId":1},{"deep":2,"name":"和平区","id":55,"sort":0,"parentId":2},{"deep":2,"name":"河东区","id":56,"sort":0,"parentId":2},{"deep":2,"name":"河西区","id":57,"sort":0,"parentId":2},{"deep":2,"name":"南开区","id":58,"sort":0,"parentId":2},{"deep":2,"name":"河北区","id":59,"sort":0,"parentId":2},{"deep":2,"name":"红桥区","id":60,"sort":0,"parentId":2},{"deep":2,"name":"塘沽区","id":61,"sort":0,"parentId":2},{"deep":2,"name":"东丽区","id":64,"sort":0,"parentId":2},{"deep":2,"name":"西青区","id":65,"sort":0,"parentId":2},{"deep":2,"name":"津南区","id":66,"sort":0,"parentId":2},{"deep":2,"name":"北辰区","id":67,"sort":0,"parentId":2},{"deep":2,"name":"武清区","id":68,"sort":0,"parentId":2},{"deep":2,"name":"宝坻区","id":69,"sort":0,"parentId":2},{"deep":2,"name":"宁河县","id":70,"sort":0,"parentId":2},{"deep":2,"name":"静海县","id":71,"sort":0,"parentId":2},{"deep":2,"name":"蓟县","id":72,"sort":0,"parentId":2},{"deep":2,"name":"石家庄市","id":73,"sort":0,"parentId":3},{"deep":2,"name":"唐山市","id":74,"sort":0,"parentId":3},{"deep":2,"name":"秦皇岛市","id":75,"sort":0,"parentId":3},{"deep":2,"name":"邯郸市","id":76,"sort":0,"parentId":3},{"deep":2,"name":"邢台市","id":77,"sort":0,"parentId":3},{"deep":2,"name":"保定市","id":78,"sort":0,"parentId":3},{"deep":2,"name":"张家口市","id":79,"sort":0,"parentId":3},{"deep":2,"name":"承德市","id":80,"sort":0,"parentId":3},{"deep":2,"name":"衡水市","id":81,"sort":0,"parentId":3},{"deep":2,"name":"廊坊市","id":82,"sort":0,"parentId":3},{"deep":2,"name":"沧州市","id":83,"sort":0,"parentId":3},{"deep":2,"name":"太原市","id":84,"sort":0,"parentId":4},{"deep":2,"name":"大同市","id":85,"sort":0,"parentId":4},{"deep":2,"name":"阳泉市","id":86,"sort":0,"parentId":4},{"deep":2,"name":"长治市","id":87,"sort":0,"parentId":4},{"deep":2,"name":"晋城市","id":88,"sort":0,"parentId":4},{"deep":2,"name":"朔州市","id":89,"sort":0,"parentId":4},{"deep":2,"name":"晋中市","id":90,"sort":0,"parentId":4},{"deep":2,"name":"运城市","id":91,"sort":0,"parentId":4},{"deep":2,"name":"忻州市","id":92,"sort":0,"parentId":4},{"deep":2,"name":"临汾市","id":93,"sort":0,"parentId":4},{"deep":2,"name":"吕梁市","id":94,"sort":0,"parentId":4},{"deep":2,"name":"呼和浩特市","id":95,"sort":0,"parentId":5},{"deep":2,"name":"包头市","id":96,"sort":0,"parentId":5},{"deep":2,"name":"乌海市","id":97,"sort":0,"parentId":5},{"deep":2,"name":"赤峰市","id":98,"sort":0,"parentId":5},{"deep":2,"name":"通辽市","id":99,"sort":0,"parentId":5},{"deep":2,"name":"鄂尔多斯市","id":100,"sort":0,"parentId":5},{"deep":2,"name":"呼伦贝尔市","id":101,"sort":0,"parentId":5},{"deep":2,"name":"巴彦淖尔市","id":102,"sort":0,"parentId":5},{"deep":2,"name":"乌兰察布市","id":103,"sort":0,"parentId":5},{"deep":2,"name":"兴安盟","id":104,"sort":0,"parentId":5},{"deep":2,"name":"锡林郭勒盟","id":105,"sort":0,"parentId":5},{"deep":2,"name":"阿拉善盟","id":106,"sort":0,"parentId":5},{"deep":2,"name":"沈阳市","id":107,"sort":0,"parentId":6},{"deep":2,"name":"大连市","id":108,"sort":0,"parentId":6},{"deep":2,"name":"鞍山市","id":109,"sort":0,"parentId":6},{"deep":2,"name":"抚顺市","id":110,"sort":0,"parentId":6},{"deep":2,"name":"本溪市","id":111,"sort":0,"parentId":6},{"deep":2,"name":"丹东市","id":112,"sort":0,"parentId":6},{"deep":2,"name":"锦州市","id":113,"sort":0,"parentId":6},{"deep":2,"name":"营口市","id":114,"sort":0,"parentId":6},{"deep":2,"name":"阜新市","id":115,"sort":0,"parentId":6},{"deep":2,"name":"辽阳市","id":116,"sort":0,"parentId":6},{"deep":2,"name":"盘锦市","id":117,"sort":0,"parentId":6},{"deep":2,"name":"铁岭市","id":118,"sort":0,"parentId":6},{"deep":2,"name":"朝阳市","id":119,"sort":0,"parentId":6},{"deep":2,"name":"葫芦岛市","id":120,"sort":0,"parentId":6},{"deep":2,"name":"长春市","id":121,"sort":0,"parentId":7},{"deep":2,"name":"吉林市","id":122,"sort":0,"parentId":7},{"deep":2,"name":"四平市","id":123,"sort":0,"parentId":7},{"deep":2,"name":"辽源市","id":124,"sort":0,"parentId":7},{"deep":2,"name":"通化市","id":125,"sort":0,"parentId":7},{"deep":2,"name":"白山市","id":126,"sort":0,"parentId":7},{"deep":2,"name":"松原市","id":127,"sort":0,"parentId":7},{"deep":2,"name":"白城市","id":128,"sort":0,"parentId":7},{"deep":2,"name":"延边","id":129,"sort":0,"parentId":7},{"deep":2,"name":"哈尔滨市","id":130,"sort":0,"parentId":8},{"deep":2,"name":"齐齐哈尔市","id":131,"sort":0,"parentId":8},{"deep":2,"name":"鸡西市","id":132,"sort":0,"parentId":8},{"deep":2,"name":"鹤岗市","id":133,"sort":0,"parentId":8},{"deep":2,"name":"双鸭山市","id":134,"sort":0,"parentId":8},{"deep":2,"name":"大庆市","id":135,"sort":0,"parentId":8},{"deep":2,"name":"伊春市","id":136,"sort":0,"parentId":8},{"deep":2,"name":"佳木斯市","id":137,"sort":0,"parentId":8},{"deep":2,"name":"七台河市","id":138,"sort":0,"parentId":8},{"deep":2,"name":"牡丹江市","id":139,"sort":0,"parentId":8},{"deep":2,"name":"黑河市","id":140,"sort":0,"parentId":8},{"deep":2,"name":"绥化市","id":141,"sort":0,"parentId":8},{"deep":2,"name":"大兴安岭","id":142,"sort":0,"parentId":8},{"deep":2,"name":"黄浦区","id":143,"sort":0,"parentId":9},{"deep":2,"name":"卢湾区","id":144,"sort":0,"parentId":9},{"deep":2,"name":"徐汇区","id":145,"sort":0,"parentId":9},{"deep":2,"name":"长宁区","id":146,"sort":0,"parentId":9},{"deep":2,"name":"静安区","id":147,"sort":0,"parentId":9},{"deep":2,"name":"普陀区","id":148,"sort":0,"parentId":9},{"deep":2,"name":"闸北区","id":149,"sort":0,"parentId":9},{"deep":2,"name":"虹口区","id":150,"sort":0,"parentId":9},{"deep":2,"name":"杨浦区","id":151,"sort":0,"parentId":9},{"deep":2,"name":"闵行区","id":152,"sort":0,"parentId":9},{"deep":2,"name":"宝山区","id":153,"sort":0,"parentId":9},{"deep":2,"name":"嘉定区","id":154,"sort":0,"parentId":9},{"deep":2,"name":"浦东新区","id":155,"sort":0,"parentId":9},{"deep":2,"name":"金山区","id":156,"sort":0,"parentId":9},{"deep":2,"name":"松江区","id":157,"sort":0,"parentId":9},{"deep":2,"name":"青浦区","id":158,"sort":0,"parentId":9},{"deep":2,"name":"南汇区","id":159,"sort":0,"parentId":9},{"deep":2,"name":"奉贤区","id":160,"sort":0,"parentId":9},{"deep":2,"name":"崇明县","id":161,"sort":0,"parentId":9},{"deep":2,"name":"南京市","id":162,"sort":0,"parentId":10},{"deep":2,"name":"无锡市","id":163,"sort":0,"parentId":10},{"deep":2,"name":"徐州市","id":164,"sort":0,"parentId":10},{"deep":2,"name":"常州市","id":165,"sort":0,"parentId":10},{"deep":2,"name":"苏州市","id":166,"sort":0,"parentId":10},{"deep":2,"name":"南通市","id":167,"sort":0,"parentId":10},{"deep":2,"name":"连云港市","id":168,"sort":0,"parentId":10},{"deep":2,"name":"淮安市","id":169,"sort":0,"parentId":10},{"deep":2,"name":"盐城市","id":170,"sort":0,"parentId":10},{"deep":2,"name":"扬州市","id":171,"sort":0,"parentId":10},{"deep":2,"name":"镇江市","id":172,"sort":0,"parentId":10},{"deep":2,"name":"泰州市","id":173,"sort":0,"parentId":10},{"deep":2,"name":"宿迁市","id":174,"sort":0,"parentId":10},{"deep":2,"name":"杭州市","id":175,"sort":0,"parentId":11},{"deep":2,"name":"宁波市","id":176,"sort":0,"parentId":11},{"deep":2,"name":"温州市","id":177,"sort":0,"parentId":11},{"deep":2,"name":"嘉兴市","id":178,"sort":0,"parentId":11},{"deep":2,"name":"湖州市","id":179,"sort":0,"parentId":11},{"deep":2,"name":"绍兴市","id":180,"sort":0,"parentId":11},{"deep":2,"name":"舟山市","id":181,"sort":0,"parentId":11},{"deep":2,"name":"衢州市","id":182,"sort":0,"parentId":11},{"deep":2,"name":"金华市","id":183,"sort":0,"parentId":11},{"deep":2,"name":"台州市","id":184,"sort":0,"parentId":11},{"deep":2,"name":"丽水市","id":185,"sort":0,"parentId":11},{"deep":2,"name":"合肥市","id":186,"sort":0,"parentId":12},{"deep":2,"name":"芜湖市","id":187,"sort":0,"parentId":12},{"deep":2,"name":"蚌埠市","id":188,"sort":0,"parentId":12},{"deep":2,"name":"淮南市","id":189,"sort":0,"parentId":12},{"deep":2,"name":"马鞍山市","id":190,"sort":0,"parentId":12},{"deep":2,"name":"淮北市","id":191,"sort":0,"parentId":12},{"deep":2,"name":"铜陵市","id":192,"sort":0,"parentId":12},{"deep":2,"name":"安庆市","id":193,"sort":0,"parentId":12},{"deep":2,"name":"黄山市","id":194,"sort":0,"parentId":12},{"deep":2,"name":"滁州市","id":195,"sort":0,"parentId":12},{"deep":2,"name":"阜阳市","id":196,"sort":0,"parentId":12},{"deep":2,"name":"宿州市","id":197,"sort":0,"parentId":12},{"deep":2,"name":"巢湖市","id":198,"sort":0,"parentId":12},{"deep":2,"name":"六安市","id":199,"sort":0,"parentId":12},{"deep":2,"name":"亳州市","id":200,"sort":0,"parentId":12},{"deep":2,"name":"池州市","id":201,"sort":0,"parentId":12},{"deep":2,"name":"宣城市","id":202,"sort":0,"parentId":12},{"deep":2,"name":"福州市","id":203,"sort":0,"parentId":13},{"deep":2,"name":"厦门市","id":204,"sort":0,"parentId":13},{"deep":2,"name":"莆田市","id":205,"sort":0,"parentId":13},{"deep":2,"name":"三明市","id":206,"sort":0,"parentId":13},{"deep":2,"name":"泉州市","id":207,"sort":0,"parentId":13},{"deep":2,"name":"漳州市","id":208,"sort":0,"parentId":13},{"deep":2,"name":"南平市","id":209,"sort":0,"parentId":13},{"deep":2,"name":"龙岩市","id":210,"sort":0,"parentId":13},{"deep":2,"name":"宁德市","id":211,"sort":0,"parentId":13},{"deep":2,"name":"南昌市","id":212,"sort":0,"parentId":14},{"deep":2,"name":"景德镇市","id":213,"sort":0,"parentId":14},{"deep":2,"name":"萍乡市","id":214,"sort":0,"parentId":14},{"deep":2,"name":"九江市","id":215,"sort":0,"parentId":14},{"deep":2,"name":"新余市","id":216,"sort":0,"parentId":14},{"deep":2,"name":"鹰潭市","id":217,"sort":0,"parentId":14},{"deep":2,"name":"赣州市","id":218,"sort":0,"parentId":14},{"deep":2,"name":"吉安市","id":219,"sort":0,"parentId":14},{"deep":2,"name":"宜春市","id":220,"sort":0,"parentId":14},{"deep":2,"name":"抚州市","id":221,"sort":0,"parentId":14},{"deep":2,"name":"上饶市","id":222,"sort":0,"parentId":14},{"deep":2,"name":"济南市","id":223,"sort":0,"parentId":15},{"deep":2,"name":"青岛市","id":224,"sort":0,"parentId":15},{"deep":2,"name":"淄博市","id":225,"sort":0,"parentId":15},{"deep":2,"name":"枣庄市","id":226,"sort":0,"parentId":15},{"deep":2,"name":"东营市","id":227,"sort":0,"parentId":15},{"deep":2,"name":"烟台市","id":228,"sort":0,"parentId":15},{"deep":2,"name":"潍坊市","id":229,"sort":0,"parentId":15},{"deep":2,"name":"济宁市","id":230,"sort":0,"parentId":15},{"deep":2,"name":"泰安市","id":231,"sort":0,"parentId":15},{"deep":2,"name":"威海市","id":232,"sort":0,"parentId":15},{"deep":2,"name":"日照市","id":233,"sort":0,"parentId":15},{"deep":2,"name":"莱芜市","id":234,"sort":0,"parentId":15},{"deep":2,"name":"临沂市","id":235,"sort":0,"parentId":15},{"deep":2,"name":"德州市","id":236,"sort":0,"parentId":15},{"deep":2,"name":"聊城市","id":237,"sort":0,"parentId":15},{"deep":2,"name":"滨州市","id":238,"sort":0,"parentId":15},{"deep":2,"name":"菏泽市","id":239,"sort":0,"parentId":15},{"deep":2,"name":"郑州市","id":240,"sort":0,"parentId":16},{"deep":2,"name":"开封市","id":241,"sort":0,"parentId":16},{"deep":2,"name":"洛阳市","id":242,"sort":0,"parentId":16},{"deep":2,"name":"平顶山市","id":243,"sort":0,"parentId":16},{"deep":2,"name":"安阳市","id":244,"sort":0,"parentId":16},{"deep":2,"name":"鹤壁市","id":245,"sort":0,"parentId":16},{"deep":2,"name":"新乡市","id":246,"sort":0,"parentId":16},{"deep":2,"name":"焦作市","id":247,"sort":0,"parentId":16},{"deep":2,"name":"濮阳市","id":248,"sort":0,"parentId":16},{"deep":2,"name":"许昌市","id":249,"sort":0,"parentId":16},{"deep":2,"name":"漯河市","id":250,"sort":0,"parentId":16},{"deep":2,"name":"三门峡市","id":251,"sort":0,"parentId":16},{"deep":2,"name":"南阳市","id":252,"sort":0,"parentId":16},{"deep":2,"name":"商丘市","id":253,"sort":0,"parentId":16},{"deep":2,"name":"信阳市","id":254,"sort":0,"parentId":16},{"deep":2,"name":"周口市","id":255,"sort":0,"parentId":16},{"deep":2,"name":"驻马店市","id":256,"sort":0,"parentId":16},{"deep":2,"name":"济源市","id":257,"sort":0,"parentId":16},{"deep":2,"name":"武汉市","id":258,"sort":0,"parentId":17},{"deep":2,"name":"黄石市","id":259,"sort":0,"parentId":17},{"deep":2,"name":"十堰市","id":260,"sort":0,"parentId":17},{"deep":2,"name":"宜昌市","id":261,"sort":0,"parentId":17},{"deep":2,"name":"襄樊市","id":262,"sort":0,"parentId":17},{"deep":2,"name":"鄂州市","id":263,"sort":0,"parentId":17},{"deep":2,"name":"荆门市","id":264,"sort":0,"parentId":17},{"deep":2,"name":"孝感市","id":265,"sort":0,"parentId":17},{"deep":2,"name":"荆州市","id":266,"sort":0,"parentId":17},{"deep":2,"name":"黄冈市","id":267,"sort":0,"parentId":17},{"deep":2,"name":"咸宁市","id":268,"sort":0,"parentId":17},{"deep":2,"name":"随州市","id":269,"sort":0,"parentId":17},{"deep":2,"name":"恩施","id":270,"sort":0,"parentId":17},{"deep":2,"name":"仙桃市","id":271,"sort":0,"parentId":17},{"deep":2,"name":"潜江市","id":272,"sort":0,"parentId":17},{"deep":2,"name":"天门市","id":273,"sort":0,"parentId":17},{"deep":2,"name":"长沙市","id":275,"sort":0,"parentId":18},{"deep":2,"name":"株洲市","id":276,"sort":0,"parentId":18},{"deep":2,"name":"湘潭市","id":277,"sort":0,"parentId":18},{"deep":2,"name":"衡阳市","id":278,"sort":0,"parentId":18},{"deep":2,"name":"邵阳市","id":279,"sort":0,"parentId":18},{"deep":2,"name":"岳阳市","id":280,"sort":0,"parentId":18},{"deep":2,"name":"常德市","id":281,"sort":0,"parentId":18},{"deep":2,"name":"张家界市","id":282,"sort":0,"parentId":18},{"deep":2,"name":"益阳市","id":283,"sort":0,"parentId":18},{"deep":2,"name":"郴州市","id":284,"sort":0,"parentId":18},{"deep":2,"name":"永州市","id":285,"sort":0,"parentId":18},{"deep":2,"name":"怀化市","id":286,"sort":0,"parentId":18},{"deep":2,"name":"娄底市","id":287,"sort":0,"parentId":18},{"deep":2,"name":"广州市","id":289,"sort":0,"parentId":19},{"deep":2,"name":"韶关市","id":290,"sort":0,"parentId":19},{"deep":2,"name":"深圳市","id":291,"sort":0,"parentId":19},{"deep":2,"name":"珠海市","id":292,"sort":0,"parentId":19},{"deep":2,"name":"汕头市","id":293,"sort":0,"parentId":19},{"deep":2,"name":"佛山市","id":294,"sort":0,"parentId":19},{"deep":2,"name":"江门市","id":295,"sort":0,"parentId":19},{"deep":2,"name":"湛江市","id":296,"sort":0,"parentId":19},{"deep":2,"name":"茂名市","id":297,"sort":0,"parentId":19},{"deep":2,"name":"肇庆市","id":298,"sort":0,"parentId":19},{"deep":2,"name":"惠州市","id":299,"sort":0,"parentId":19},{"deep":2,"name":"梅州市","id":300,"sort":0,"parentId":19},{"deep":2,"name":"汕尾市","id":301,"sort":0,"parentId":19},{"deep":2,"name":"河源市","id":302,"sort":0,"parentId":19},{"deep":2,"name":"阳江市","id":303,"sort":0,"parentId":19},{"deep":2,"name":"清远市","id":304,"sort":0,"parentId":19},{"deep":2,"name":"东莞市","id":305,"sort":0,"parentId":19},{"deep":2,"name":"中山市","id":306,"sort":0,"parentId":19},{"deep":2,"name":"潮州市","id":307,"sort":0,"parentId":19},{"deep":2,"name":"揭阳市","id":308,"sort":0,"parentId":19},{"deep":2,"name":"云浮市","id":309,"sort":0,"parentId":19},{"deep":2,"name":"南宁市","id":310,"sort":0,"parentId":20},{"deep":2,"name":"柳州市","id":311,"sort":0,"parentId":20},{"deep":2,"name":"桂林市","id":312,"sort":0,"parentId":20},{"deep":2,"name":"梧州市","id":313,"sort":0,"parentId":20},{"deep":2,"name":"北海市","id":314,"sort":0,"parentId":20},{"deep":2,"name":"防城港市","id":315,"sort":0,"parentId":20},{"deep":2,"name":"钦州市","id":316,"sort":0,"parentId":20},{"deep":2,"name":"贵港市","id":317,"sort":0,"parentId":20},{"deep":2,"name":"玉林市","id":318,"sort":0,"parentId":20},{"deep":2,"name":"百色市","id":319,"sort":0,"parentId":20},{"deep":2,"name":"贺州市","id":320,"sort":0,"parentId":20},{"deep":2,"name":"河池市","id":321,"sort":0,"parentId":20},{"deep":2,"name":"来宾市","id":322,"sort":0,"parentId":20},{"deep":2,"name":"崇左市","id":323,"sort":0,"parentId":20},{"deep":2,"name":"海口市","id":324,"sort":0,"parentId":21},{"deep":2,"name":"三亚市","id":325,"sort":0,"parentId":21},{"deep":2,"name":"五指山市","id":326,"sort":0,"parentId":21},{"deep":2,"name":"琼海市","id":327,"sort":0,"parentId":21},{"deep":2,"name":"儋州市","id":328,"sort":0,"parentId":21},{"deep":2,"name":"文昌市","id":329,"sort":0,"parentId":21},{"deep":2,"name":"万宁市","id":330,"sort":0,"parentId":21},{"deep":2,"name":"东方市","id":331,"sort":0,"parentId":21},{"deep":2,"name":"定安县","id":332,"sort":0,"parentId":21},{"deep":2,"name":"屯昌县","id":333,"sort":0,"parentId":21},{"deep":2,"name":"澄迈县","id":334,"sort":0,"parentId":21},{"deep":2,"name":"临高县","id":335,"sort":0,"parentId":21},{"deep":2,"name":"万州区","id":345,"sort":0,"parentId":22},{"deep":2,"name":"涪陵区","id":346,"sort":0,"parentId":22},{"deep":2,"name":"渝中区","id":347,"sort":0,"parentId":22},{"deep":2,"name":"大渡口区","id":348,"sort":0,"parentId":22},{"deep":2,"name":"江北区","id":349,"sort":0,"parentId":22},{"deep":2,"name":"沙坪坝区","id":350,"sort":0,"parentId":22},{"deep":2,"name":"九龙坡区","id":351,"sort":0,"parentId":22},{"deep":2,"name":"南岸区","id":352,"sort":0,"parentId":22},{"deep":2,"name":"北碚区","id":353,"sort":0,"parentId":22},{"deep":2,"name":"双桥区","id":354,"sort":0,"parentId":22},{"deep":2,"name":"万盛区","id":355,"sort":0,"parentId":22},{"deep":2,"name":"渝北区","id":356,"sort":0,"parentId":22},{"deep":2,"name":"巴南区","id":357,"sort":0,"parentId":22},{"deep":2,"name":"黔江区","id":358,"sort":0,"parentId":22},{"deep":2,"name":"长寿区","id":359,"sort":0,"parentId":22},{"deep":2,"name":"綦江县","id":360,"sort":0,"parentId":22},{"deep":2,"name":"潼南县","id":361,"sort":0,"parentId":22},{"deep":2,"name":"铜梁县","id":362,"sort":0,"parentId":22},{"deep":2,"name":"大足县","id":363,"sort":0,"parentId":22},{"deep":2,"name":"荣昌县","id":364,"sort":0,"parentId":22},{"deep":2,"name":"璧山县","id":365,"sort":0,"parentId":22},{"deep":2,"name":"梁平县","id":366,"sort":0,"parentId":22},{"deep":2,"name":"城口县","id":367,"sort":0,"parentId":22},{"deep":2,"name":"丰都县","id":368,"sort":0,"parentId":22},{"deep":2,"name":"垫江县","id":369,"sort":0,"parentId":22},{"deep":2,"name":"武隆县","id":370,"sort":0,"parentId":22},{"deep":2,"name":"忠县","id":371,"sort":0,"parentId":22},{"deep":2,"name":"开县","id":372,"sort":0,"parentId":22},{"deep":2,"name":"云阳县","id":373,"sort":0,"parentId":22},{"deep":2,"name":"奉节县","id":374,"sort":0,"parentId":22},{"deep":2,"name":"巫山县","id":375,"sort":0,"parentId":22},{"deep":2,"name":"巫溪县","id":376,"sort":0,"parentId":22},{"deep":2,"name":"江津市","id":381,"sort":0,"parentId":22},{"deep":2,"name":"合川市","id":382,"sort":0,"parentId":22},{"deep":2,"name":"永川市","id":383,"sort":0,"parentId":22},{"deep":2,"name":"南川市","id":384,"sort":0,"parentId":22},{"deep":2,"name":"成都市","id":385,"sort":0,"parentId":23},{"deep":2,"name":"自贡市","id":386,"sort":0,"parentId":23},{"deep":2,"name":"攀枝花市","id":387,"sort":0,"parentId":23},{"deep":2,"name":"泸州市","id":388,"sort":0,"parentId":23},{"deep":2,"name":"德阳市","id":389,"sort":0,"parentId":23},{"deep":2,"name":"绵阳市","id":390,"sort":0,"parentId":23},{"deep":2,"name":"广元市","id":391,"sort":0,"parentId":23},{"deep":2,"name":"遂宁市","id":392,"sort":0,"parentId":23},{"deep":2,"name":"内江市","id":393,"sort":0,"parentId":23},{"deep":2,"name":"乐山市","id":394,"sort":0,"parentId":23},{"deep":2,"name":"南充市","id":395,"sort":0,"parentId":23},{"deep":2,"name":"眉山市","id":396,"sort":0,"parentId":23},{"deep":2,"name":"宜宾市","id":397,"sort":0,"parentId":23},{"deep":2,"name":"广安市","id":398,"sort":0,"parentId":23},{"deep":2,"name":"达州市","id":399,"sort":0,"parentId":23},{"deep":2,"name":"雅安市","id":400,"sort":0,"parentId":23},{"deep":2,"name":"巴中市","id":401,"sort":0,"parentId":23},{"deep":2,"name":"资阳市","id":402,"sort":0,"parentId":23},{"deep":2,"name":"贵阳市","id":406,"sort":0,"parentId":24},{"deep":2,"name":"六盘水市","id":407,"sort":0,"parentId":24},{"deep":2,"name":"遵义市","id":408,"sort":0,"parentId":24},{"deep":2,"name":"安顺市","id":409,"sort":0,"parentId":24},{"deep":2,"name":"昆明市","id":415,"sort":0,"parentId":25},{"deep":2,"name":"曲靖市","id":416,"sort":0,"parentId":25},{"deep":2,"name":"玉溪市","id":417,"sort":0,"parentId":25},{"deep":2,"name":"保山市","id":418,"sort":0,"parentId":25},{"deep":2,"name":"昭通市","id":419,"sort":0,"parentId":25},{"deep":2,"name":"丽江市","id":420,"sort":0,"parentId":25},{"deep":2,"name":"思茅市","id":421,"sort":0,"parentId":25},{"deep":2,"name":"临沧市","id":422,"sort":0,"parentId":25},{"deep":2,"name":"拉萨市","id":431,"sort":0,"parentId":26},{"deep":2,"name":"西安市","id":438,"sort":0,"parentId":27},{"deep":2,"name":"铜川市","id":439,"sort":0,"parentId":27},{"deep":2,"name":"宝鸡市","id":440,"sort":0,"parentId":27},{"deep":2,"name":"咸阳市","id":441,"sort":0,"parentId":27},{"deep":2,"name":"渭南市","id":442,"sort":0,"parentId":27},{"deep":2,"name":"延安市","id":443,"sort":0,"parentId":27},{"deep":2,"name":"汉中市","id":444,"sort":0,"parentId":27},{"deep":2,"name":"榆林市","id":445,"sort":0,"parentId":27},{"deep":2,"name":"安康市","id":446,"sort":0,"parentId":27},{"deep":2,"name":"商洛市","id":447,"sort":0,"parentId":27},{"deep":2,"name":"兰州市","id":448,"sort":0,"parentId":28},{"deep":2,"name":"嘉峪关市","id":449,"sort":0,"parentId":28},{"deep":2,"name":"金昌市","id":450,"sort":0,"parentId":28},{"deep":2,"name":"白银市","id":451,"sort":0,"parentId":28},{"deep":2,"name":"天水市","id":452,"sort":0,"parentId":28},{"deep":2,"name":"武威市","id":453,"sort":0,"parentId":28},{"deep":2,"name":"张掖市","id":454,"sort":0,"parentId":28},{"deep":2,"name":"平凉市","id":455,"sort":0,"parentId":28},{"deep":2,"name":"酒泉市","id":456,"sort":0,"parentId":28},{"deep":2,"name":"庆阳市","id":457,"sort":0,"parentId":28},{"deep":2,"name":"定西市","id":458,"sort":0,"parentId":28},{"deep":2,"name":"陇南市","id":459,"sort":0,"parentId":28},{"deep":2,"name":"西宁市","id":462,"sort":0,"parentId":29},{"deep":2,"name":"银川市","id":470,"sort":0,"parentId":30},{"deep":2,"name":"石嘴山市","id":471,"sort":0,"parentId":30},{"deep":2,"name":"吴忠市","id":472,"sort":0,"parentId":30},{"deep":2,"name":"固原市","id":473,"sort":0,"parentId":30},{"deep":2,"name":"中卫市","id":474,"sort":0,"parentId":30},{"deep":2,"name":"乌鲁木齐市","id":475,"sort":0,"parentId":31},{"deep":2,"name":"克拉玛依市","id":476,"sort":0,"parentId":31},{"deep":2,"name":"石河子市","id":489,"sort":0,"parentId":31},{"deep":2,"name":"阿拉尔市","id":490,"sort":0,"parentId":31},{"deep":2,"name":"图木舒克市","id":491,"sort":0,"parentId":31},{"deep":2,"name":"五家渠市","id":492,"sort":0,"parentId":31}]';

function getloginIp() {
	return ip;
}

function getRegularIp() {
	return ip + "mobile/";
}

function postLogin(url, data, callback, callback1) {
	var head = {

	};
	var param = {
		"body": data,
		"head": head
	};
	addLoading();
	$.ajax({
		type: "post",
		url: getloginIp() + url,
		async: true,
		traditional: true,
		data: JSON.stringify(param),
		success: function(data) {
			removeLoading();
			if(data.result_code != 1) {
				myAlert(data.result);
				if(callback1 != null) {
					callback1();
				}
				return;
			}
			callback(data);
		},
		error: function(data) {
			removeLoading();
			myAlert('服务器连接失败');
		}
	});
}

function postNoCheckRegular(url, data, callback, callback1) {
	var param;
	var head = {
		"token": sessionStorage.token,
		"userId": sessionStorage.userId,
	};
	var param = {
		"body": data,
		"head": head
	};

	addLoading();
	$.ajax({
		type: "post",
		url: getloginIp() + url,
		async: true,
		traditional: true,
		data: JSON.stringify(param),
		success: function(data) {
			if((typeof data == 'string') && data.constructor == String) {
				data = JSON.parse(data);
			}
			console.log(data);

			removeLoading();
			if(data.result_code == 0) {
				myAlert(data.result);
				if(callback1 != null) {
					callback1();
				}
				return;
			} else if(data.result_code == -9) {
				var urlStr = window.location.href;
				if(urlStr.indexOf('bankNumberDetail.html') > 0) {
					window.location.replace('index.html');
				}else {
					window.location.replace('../index.html');
				}
				return;
			}
			callback(data);
		},
		error: function(data) {
			removeLoading();
			myAlert('服务器连接失败');
		}
	});
}

function postRegular(url, data, callback, callback1) {
	var param;
	var head = {
		"token": sessionStorage.token,
		"userId": sessionStorage.userId,
	};
	var param = {
		"body": data,
		"head": head
	};

	addLoading();
	$.ajax({
		type: "post",
		url: getRegularIp() + url,
		async: true,
		traditional: true,
		data: JSON.stringify(param),
		success: function(data) {
			if((typeof data == 'string') && data.constructor == String) {
				data = JSON.parse(data);
			}
						console.log(data);


			removeLoading();
			if(data.result_code == 0) {
				myAlert(data.result);
				if(callback1 != null) {
					callback1();
				}
				return;
			} else if(data.result_code == -9) {
				var urlStr = window.location.href;
				if(urlStr.indexOf('bankNumberDetail.html') > 0) {
					window.location.replace('index.html');
				}else {
					window.location.replace('../index.html');
				}
				return;
			}
			callback(data);
		},
		error: function(data) {
			removeLoading();
			myAlert('服务器连接失败');
		}
	});
}

function bgPostRegular(url, data, callback, callback1) {
	var param;
	var head = {
		"token": sessionStorage.token,
		"userId": sessionStorage.userId,
	};
	var param = {
		"body": data,
		"head": head
	};

	$.ajax({
		type: "post",
		url: getRegularIp() + url,
		async: true,
		traditional: true,
		data: JSON.stringify(param),
		success: function(data) {
			if((typeof data == 'string') && data.constructor == String) {
				data = JSON.parse(data);
			}

			if(data.result_code == 0) {
				myAlert(data.result);
				if(callback1 != null) {
					callback1();
				}
				return;
			} else if(data.result_code == -9) {
				var urlStr = window.location.href;
				if(urlStr.indexOf('bankNumberDetail.html') > 0) {
					window.location.replace('index.html');
				}else {
					window.location.replace('../index.html');
				}
				return;
			}
			callback(data);
		},
		error: function(data) {
			myAlert('服务器连接失败');
		}
	});
}

function addLoading() {
	if($('#loading11111').html()) {
		return;
	}

	$('body').append('<div id="loading11111" style="width: 100%;height: 100%;position: fixed;top: 0;z-index: 10001;display: flex;">' +
		'<div style="margin: auto;padding: 0.8rem; text-align: center;background: rgba(0, 0, 0, 0.5);border-radius: 10px;">' +
		'<div class="load-1" style="height: 1.1rem;">' +
		'<div class="k-line k-line3-1"></div>' +
		'<div class="k-line k-line3-2"></div>' +
		'<div class="k-line k-line3-3"></div>' +
		'<div class="k-line k-line3-4"></div>' +
		'<div class="k-line k-line3-5"></div>' +
		'</div>' +
		'<span style="color: white;text-align: center;font-size: 0.84rem;">正在加载</span>' +
		'</div>' +
		'</div>');
}

function removeLoading() {
	$('#loading11111').remove();
}

function myAlert(str) {
	if($('#alert11111').html()) {
		return;
	}
	if(!str) {
		return;
	}
	$('body').append('<div id="alert11111" style="width: 100%;height: 100%;position: fixed;top: 0;z-index: 100000;display: flex;">' +
		'<div style="margin: auto;padding: 1rem; text-align: center;background: rgba(0, 0, 0, 0.8);border-radius: 10px;color: white;">' +
		'<div style="max-width: 10rem;min-width: 4rem;font-size:1rem; word-wrap: break-word;overflow: auto;max-height: 10rem;">' + str + '</div>' +
		'<div style="height: 1px;background: white;margin-top: 0.8rem;"></div>' +
		'<div style="cursor: pointer;padding-top: 0.8rem;font-weight: bold;font-size:1rem;" onclick="$(this).parent().parent().remove()">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>' +
		'</div>' +
		'</div>');
}

function checkTel(phoneStr) {
	if(!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(phoneStr))) {
		return false;
	}
	return true;
}

/**
 * 获取城市列表
 * @param {Object} callback
 */
function getCity(callback) {
	var list = JSON.parse(provinceCity);
	var province = [];
	var city = [];
	var cityM = {};
	for(var i = 0; i < list.length; i++) {
		var obj = list[i];
		if(obj.deep == 1) {
			province.push(obj);
		} else if(obj.deep == 2) {
			city.push(obj);
		}
	}
	for(var i = 0; i < province.length; i++) {
		var array = [];
		for(var j = 0; j < city.length; j++) {
			if(city[j].parentId == i + 1) {
				array.push(city[j]);
				cityM['' + (i + 1)] = array;
			}
		}
	}
	callback(province, cityM);
}

function datetransform(e) {
	var pattern = "yyyy-MM-dd hh:mm:ss";
	var s = new Date(e);
	return s.format(pattern);
}
Date.prototype.format = function(format) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	}
	if(/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for(var k in o) {
		if(new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}

function dealImage(path, obj, callback) {
	if(path.length < 1 * 1024 * 1024) {
		callback(path);
		return;
	}

	//	addLoading();

	setTimeout(function() {
		var img = new Image();
		img.src = path;
		img.onload = function() {
			var that = this;
			// 默认按比例压缩
			var w = that.width,
				h = that.height,
				scale = w / h;
			w = obj.width || w;
			h = obj.height || (w / scale);
			var quality = 0.7; // 默认图片质量为0.7
			//生成canvas
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');
			// 创建属性节点
			var anw = document.createAttribute("width");
			anw.nodeValue = w;
			var anh = document.createAttribute("height");
			anh.nodeValue = h;
			canvas.setAttributeNode(anw);
			canvas.setAttributeNode(anh);
			ctx.drawImage(that, 0, 0, w, h);
			// 图像质量
			if(obj.quality && obj.quality <= 1 && obj.quality > 0) {
				quality = obj.quality;
			}
			// quality值越小，所绘制出的图像越模糊
			var base64 = canvas.toDataURL('image/jpeg', quality);

			if(base64.length > 1 * 1024 * 1024) {
				dealImage(base64, {
					quality: 0.1
				}, callback);
			} else {
				//				removeLoading();
				var Orientation = null;
				//获取照片方向角属性，用户旋转控制  
				EXIF.getData(img, function() {
					EXIF.getAllTags(this);
					Orientation = EXIF.getTag(this, 'Orientation');
				});
				managerotateImg(base64, Orientation, function(data) {
					callback(data);
				})
			}
		}
	})
}

function managerotateImg(value, Orientation, callback) {
	var image = new Image();
	image.src = value;
	image.onload = function() {
		var expectWidth = this.naturalWidth;
		var expectHeight = this.naturalHeight;

		if(this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
			expectWidth = 800;
			expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
		} else if(this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
			expectHeight = 1200;
			expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
		}
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		canvas.width = expectWidth;
		canvas.height = expectHeight;
		ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
		var base64 = null;

		if(Orientation != "" && Orientation != 1) {
			//alert('旋转处理');  
			switch(Orientation) {
				case 6: //需要顺时针（向左）90度旋转  
					rotateImg(this, 'left', canvas);
					break;
				case 8: //需要逆时针（向右）90度旋转  
					rotateImg(this, 'right', canvas);
					break;
				case 3: //需要180度旋转  
					rotateImg(this, 'right', canvas); //转两次  
					rotateImg(this, 'right', canvas);
					break;
			}
		}

		base64 = canvas.toDataURL("image/jpeg", 0.8);
		callback(base64);
	}
}

Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if(index > -1) {
		this.splice(index, 1);
	}
};

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = decodeURIComponent(window.location.search).substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

function judgeStatus(siteCheckStatus) {
	if(siteCheckStatus == 0) {
		return "待审核";
	} else if(siteCheckStatus == 1) {
		return "审核通过";
	} else {
		return "审核未通过";
	}

}

function judgeOrderStatus(orderStatus, appointStatus, type) {

	if(orderStatus == 0) {
		return "待接单";
	} else if(orderStatus == 1) {
		return "已被抢单";
	} else if(orderStatus == 2) {
		if(type == '2') {
			if(appointStatus == '0') {
				return "等待执行";
			}
		}
		return "已被接单";

	} else if(orderStatus == 3) {
		return "已发货";
	} else if(orderStatus == 4) {
		return "已完成";
	} else if(orderStatus == 9) {
		return "订单取消";
	} else if(orderStatus == 8) {
		return "订单异常";
	}

}

function judgeSiteOrderRoleBelongStr(type) {

	if(type == '3') {
		return "货主、司机";
	} else if(type == '2') {
		return "司机";
	} else {
		return "货主";
	}
}

addInfoDiv();

var bankCardNumber = '';

function addInfoDiv() {
	var urlStr = window.location.href;
	if(urlStr.indexOf('List.html') > 0) {
		postRegular('getUserInfoById', {
			userId: sessionStorage.userId,
		}, function(data) {
			bankCardNumber = data.object.bankCardNumber;
			personinfoview(data.object.nickname, data.object.personImageUrl, data.object.phoneNumber, data.object.type);
		})
	}
}

function personinfoview(name, imgurl, telephone, type) {
	if(imgurl) {
		imgurl = ip + imgurl;
	} else {
		imgurl = '../img/avatar_96x96.png';
	}
	var typeStr = '';
	if(type == '0') {
		typeStr = "超级管理员";
	} else if(type == '1') {
		typeStr = "平台管理员";
	} else if(type == '2') {
		typeStr = "";
	} else if(type == '3') {
		typeStr = "站点管理员";
	} else if(type == '4') {
		typeStr = "站点业务员";
	}
	setTimeout(function() {
		$('body').append(
			'<div onmouseenter="showdetail()" onmouseleave="hidedetail()">' +

			'<div style="background: #27303f;height: 50px;width: 220px;z-index: 19999;position: fixed;right: 0px;top: 0px;margin-right: 0px;display: flex;float: left;">' +
			'<div style="background: white; width: 36px;height: 36px;margin: 0px;margin-top: 7px;margin-left: 10px;border-radius: 18px;">' +
			'<img style="margin: 0px;width: 36px;height: 36px;border-radius: 18px;" id="headImg" src="' + imgurl + '" alt="" />' +
			'</div>' +
			'<div style="padding-left: 10px;margin-top: 0px;line-height: 50px;height: 50px;font-size:15px;color: white;"><nobr style="font-size:18px;">' + name + '</nobr></div>' +
			'<div style="padding-left: 10px;margin-top: 10px;line-height: 34px;height: 34px;font-size:15px;color:#CCCCCC;"><nobr style="font-size:13px;">' + typeStr + '</nobr></div>' +

			'</div>' +

			'<div id="infodetaildiv" style="z-index: 9999;background: white;top: 50px;right:0px;margin-right: 0px;width: 220px;position: fixed;" hidden>' +
			'<div style="width: 200px;text-align: center;margin: 10px;font-size: 14px;color: #27303f;">手机号码：' + telephone + '</div>' +
			'<div id="changeinfoheadimg" style="width: 200px;text-align: center;margin: 10px;"><a style="color:orange;" href="javascript:changeinfoheadimg()">修改图像</a></div>' +
			'<input id="changeinfoheadimginput" class="fr compile-pic" type="file" accept="image/jpg,image/jpeg,image/png,image/gif" hidden="true" onchange="changeinfoheadimgact(this)">' +
			'<div id="changebanknumber" onclick="changeBankNumberAct()" style="width: 200px;text-align: center;margin: 10px;font-size: 14px;color: orange;cursor: pointer;">银行卡号</div>' +
			'<div style="width: 200px;text-align: center;margin: 10px;"><a style="color:gray;" href="javascript:loginOut()">退出</a></div>' +
			'</div>' +
			'</div>'
		);
		if(type == 3) {
			$('#changebanknumber').show();
		} else {
			$('#changebanknumber').hide();
		}
	}, 50);

}

function changeBankNumberAct() {
	window.location = '../bankNumberDetail.html?bankCardNumber=' + bankCardNumber;
}

function loginOut() {
	sessionStorage.clear();

	window.location.replace('../index.html');
}

function showdetail() {
	$('#infodetaildiv').show();
}

function hidedetail() {
	$('#infodetaildiv').hide();
}

function changeinfoheadimg() {
	$('#changeinfoheadimginput').click();
}

function changeinfoheadimgact(input) {
	var files = input.files;
	var file = files[0];
	var imageType = /^image\//;
	if(!imageType.test(file.type)) {
		alert("请选择图片类型上传");
		return;
	}

	var Orientation = null;
	//获取照片方向角属性，用户旋转控制  
	EXIF.getData(file, function() {
		EXIF.getAllTags(this);
		Orientation = EXIF.getTag(this, 'Orientation');
	});

	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function(e) {

		dealImage(e.target.result, {
			quality: 0.1
		}, function(value) {

			managerotateImg(value, Orientation, function(base64) {

				postRegular('uploadImage', {
					"imgStr": base64.split(",")[1]
				}, function(data) {
					postRegular('updateUserInfo', {
						"userId": sessionStorage.userId,
						"personImageUrl": data.object
					}, function(data) {
						myAlert("修改成功！");
						window.location.reload();
					})

				})

			})

		});
	};
}

//跳至订单详情
function jumpToOrderDetail(itemId, $event) {
	$event.stopPropagation();
	window.open("../order/orderDetail.html?orderId=" + itemId);
}

function BMapSetPointCenterWithPoint(lat1, lng1, lat2, lng2) {
	var point1 = new BMap.Point(lng1, lat1);
	var point2 = new BMap.Point(lng2, lat2);
	var zoom = 13;
	var zooms = [50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 25000, 50000,
		100000, 200000, 500000, 1000000, 2000000
	];
	var distance = map.getDistance(point1, point2);
	for(var i = 0; i < 16; i++) {
		if((zooms[i] - distance) > 0) {
			zoom = 18 - i + 2;
			break;
		}
	}
	var pointLng = (lng1 + lng2) / 2;
	var pointLat = (lat1 + lat2) / 2;
	var pointCenter = new BMap.Point(pointLng, pointLat);
	map.centerAndZoom(pointCenter, zoom + 0.3);
}

function getlastMonth() {

	var now = new Date();
	var year = now.getFullYear(); //getYear()+1900=getFullYear()
	var month = now.getMonth() + 1; //0-11表示1-12月
	var day = now.getDate();
	if(parseInt(month) < 10) {
		month = "0" + month;
	}
	if(parseInt(day) < 10) {
		day = "0" + day;
	}

	now = year + '-' + month + '-' + day;

	if(parseInt(month) == 1) { //如果是1月份，则取上一年的12月份
		return(parseInt(year) - 1) + '-12-' + day;
	}

	var preSize = new Date(year, parseInt(month) - 1, 0).getDate(); //上月总天数
	if(preSize < parseInt(day)) { //上月总天数<本月日期，比如3月的30日，在2月中没有30
		return year + '-' + month + '-01';
	}

	if(parseInt(month) <= 10) {
		return year + '-0' + (parseInt(month) - 1);
	} else {
		return year + '-' + (parseInt(month) - 1);
	}

}
