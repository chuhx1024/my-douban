import fetchData from '@/config/fetch'
// import { stat } from 'fs';
const state = {
  events: [
    {
      "image":"https://img3.doubanio.com/pview/event_poster/median/public/2a878b1def99656.jpg",
      "adapt_url":"https://www.douban.com/location/partner/event/30295220/",
      "loc_name":"北京",
      "owner":{
          "name":"泡泡圈同城吃喝玩乐",
          "avatar":"https://img1.doubanio.com/view/site/small/public/c2d9f4b2d6481fa.jpg",
          "uid":"285988",
          "alt":"https://site.douban.com/285988/",
          "type":"site",
          "id":"285988",
          "large_avatar":"https://img3.doubanio.com/f/shire/12a185c5e266280902fc44b102cf9833155f41ae/pics/site/icon_default_large.png"
      },
      "alt":"https://www.douban.com/event/30295220/",
      "label":null,
      "id":"30295220",
      "category":"sports",
      "title":"免费徒步活动---北京教堂行（老少皆宜）!",
      "wisher_count":1213,
      "has_ticket":false,
      "content":"活动咨询微信：blueeye918<br><br>查看近期活动请扫码关注页面底部“泡泡圈公众号”<br>承接企业团建及场地租赁服务<br>报名请扫码关注“泡泡圈”报名！切记！切记！切记！<br><br><br>【强度提醒】<br>马路溜达，没强度，老少皆宜<br>纯休闲活动，无需什么装备，带上好心情，穿上花衣服，带上相机，就出发吧。怎么欢乐怎么得瑟。<br><br>【行程安排】<br>8:45，王府井集合（ 地铁五号线灯市口A口集合 找飓风户外红色旗子）<br>（出发前一天 注意查收集合短信 下班左右出 领队信息）<br>9:00，东交民巷教堂<br>10:00，崇文门教堂<br>11:00，南岗子教堂<br>12:00，午饭时间 （就近自由午餐）<br>14:00，宣武门教堂<br>15:00，西什库教堂<br>16:00，西直门教堂<br>16:30，活动结束 各回各家<br><br>以上时间均为大概时间，如果赶上婚礼或者有仪式可以体验参加。提前领队打招呼 随时行走<br><br>活动100%成行，想去的朋友抓紧时间早点报名。<br><br>活动亮点：<br>中国各种问题，个人觉得根本原因是信仰缺失，人无信则无畏，所以，需找丢失的信仰，让我们走起来。<br>本次活动将把市区主要的天主教堂走个遍，东西南北四大天主堂，东交民巷教堂（圣米厄尔教堂），南岗子教堂，如果时间允许，还可以去宽街基督堂，崇文门基督堂，珠市口基督堂，中华圣公会教堂，缸瓦市教堂等基督教堂。<br>当天的亮点就是看几座天主教堂的建筑样式，各有不同，欧洲的建筑来到中国，又是一番什么样子？等候大家去慧眼发现了。<br><br><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p54330392-1.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p54330392-2.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p54330392-3.jpg' alt=''><br><span class='pic-title'></span></div>",
      "can_invite":"no",
      "time_str":"2019.03.01 周五 起",
      "album":"1686247415",
      "participant_count":516,
      "tags":"旅行,健康,交友,聚会,徒步",
      "image_hlarge":"https://img3.doubanio.com/pview/event_poster/hlarge/public/2a878b1def99656.jpg",
      "begin_time":"2019-03-01 09:00:00",
      "price_range":"免费",
      "geo":"39.907059 116.414726",
      "image_lmobile":"https://img3.doubanio.com/pview/event_poster/lmobile/public/2a878b1def99656.jpg",
      "category_name":"运动",
      "loc_id":"108288",
      "url":"https://www.douban.com/event/30295220/",
      "uri":"douban://douban.com/event/30295220",
      "fee_str":"免费",
      "end_time":"2019-05-30 17:30:00",
      "address":"北京 北京市东城区东华门街道东长安街中华人民共和国商务部 王府井"
  },
  {
      "image":"https://img3.doubanio.com/pview/event_poster/median/public/275f3a72b8e34df.jpg",
      "adapt_url":"https://www.douban.com/location/partner/event/31752826/",
      "loc_name":"北京",
      "owner":{
          "name":"本心之旅",
          "is_banned":false,
          "is_suicide":false,
          "avatar":"https://img3.doubanio.com/icon/u146795355-4.jpg",
          "uid":"146795355",
          "alt":"https://www.douban.com/people/146795355/",
          "type":"user",
          "id":"146795355",
          "large_avatar":"https://img3.doubanio.com/icon/up146795355-4.jpg"
      },
      "alt":"https://www.douban.com/event/31752826/",
      "label":null,
      "id":"31752826",
      "category":"travel",
      "title":"换种方式去旅行与心灵独处，五台山古佛寺每周末禅文化体验义工之旅",
      "wisher_count":605,
      "has_ticket":false,
      "content":"<div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-1.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-2.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-3.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-4.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-5.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-6.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img1.doubanio.com/view/page_note/large/public/p68267556-7.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img1.doubanio.com/view/page_note/large/public/p68267556-8.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img1.doubanio.com/view/page_note/large/public/p68267556-9.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-10.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-11.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-12.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-13.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-14.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-15.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-16.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img1.doubanio.com/view/page_note/large/public/p68267556-17.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img1.doubanio.com/view/page_note/large/public/p68267556-18.jpg' alt=''><br><span class='pic-title'></span></div>",
      "can_invite":"no",
      "time_str":"2019.05.24 周五 起",
      "album":"1686122936",
      "participant_count":246,
      "tags":"禅,佛,义工,寺院,打坐",
      "image_hlarge":"https://img3.doubanio.com/pview/event_poster/hlarge/public/275f3a72b8e34df.jpg",
      "begin_time":"2019-05-24 19:30:00",
      "price_range":"0.00元(费用AA)",
      "geo":"38.882771 113.683037",
      "image_lmobile":"https://img3.doubanio.com/pview/event_poster/lmobile/public/275f3a72b8e34df.jpg",
      "category_name":"旅行",
      "loc_id":"108288",
      "url":"https://www.douban.com/event/31752826/",
      "uri":"douban://douban.com/event/31752826",
      "fee_str":"0.00元(费用AA)",
      "end_time":"2019-08-11 20:00:00",
      "address":"北京 朝阳区 惠新西街南口地铁站d口集合出发"
  },
  {
      "subcategory_name":"生活",
      "image":"https://img3.doubanio.com/pview/event_poster/median/public/3183f7c3334dbcd.jpg",
      "adapt_url":"https://www.douban.com/location/partner/event/31791948/",
      "loc_name":"北京",
      "owner":{
          "name":"萌面金刚",
          "is_banned":false,
          "is_suicide":false,
          "avatar":"https://img3.doubanio.com/icon/u186274652-2.jpg",
          "uid":"186274652",
          "alt":"https://www.douban.com/people/186274652/",
          "type":"user",
          "id":"186274652",
          "large_avatar":"https://img3.doubanio.com/icon/up186274652-2.jpg"
      },
      "alt":"https://www.douban.com/event/31791948/",
      "label":null,
      "id":"31791948",
      "category":"party",
      "title":"小伙伴们，周末不要宅着了，来一起参加活动吧！",
      "wisher_count":418,
      "has_ticket":false,
      "content":"下面我来介绍一些活动内容：<br>①自我介绍——这是一个脱离了低级趣味的自我介绍~ <br>②角色扮演——来来来，看看你们有没有演戏的天赋<br>③攀岩挑战——分组挑战岩壁，看哪个小组最快吧！<br>④形体传话——一个比划一个猜，看看到底谁厉害~ <br>⑤加强版丢手绢——让我们找回童年扎着红领巾奔跑的感觉<br>⑥完成神秘任务——全新游戏 <br>⑦现场演绎（重点推荐）——我们的吉他手早就在一旁准备完毕了，想唱歌？我们不要去K房，就在大厅让吉他手为你伴奏，体会一下现场演唱的感觉，唱的不好？不要紧，我们几十个人的掌声足以满足你明星的愿望。 <br>⑧互动环节——想怎么互动就怎么互动，你懂的。 <br>⑨杀人游戏——满足一下很多人的要求而开辟出的环节，不会玩？不紧要，我们有帅哥美女现场手把手教到你会~ <br><br>咳咳。。下面说下重点，组织者的联系方式微信号：xiaodou985 加我的时候请备注 所在位置 谢谢<br>（欢迎踊跃提出好的意见和建议,有创意的好活动一旦采纳，给予精神奖励，欢迎组织能力强的人一起开展活动，）<br><div class='left'><img src='https://img3.doubanio.com/view/page_note/large/public/p69247886-2.jpg' alt=''><br><span class='pic-title'></span></div><br><br>眼睁眼，真相在黑夜间 <br>真话假话，伪装于言语间 <br>智商和情商的对决 <br>比心态，比伪装，到底谁更胜一筹？<br>一场谎言与推理的对抗<br>一次猜疑与信任的抱团取暖<br><div class='left'><img src='https://img3.doubanio.com/view/page_note/large/public/p69247886-3.jpg' alt=''><br><span class='pic-title'></span></div><br><br>世界上有一种专门拆散亲子关系的怪物，叫做长大<br>那些别人眼中的天真，都是我以梦为马的狂奔<br>越是强手，越是喜欢强有力的对手。<br><div class='left'><img src='https://img3.doubanio.com/view/page_note/large/public/p69247886-4.jpg' alt=''><br><span class='pic-title'></span></div>",
      "can_invite":"no",
      "time_str":"2019.04.21 周日 起",
      "album":"1686247445",
      "participant_count":406,
      "tags":"游历,城市行走,休闲,聚会,交友",
      "image_hlarge":"https://img3.doubanio.com/pview/event_poster/hlarge/public/3183f7c3334dbcd.jpg",
      "begin_time":"2019-04-21 13:00:00",
      "price_range":"免费",
      "geo":"39.869987 116.416206",
      "image_lmobile":"https://img3.doubanio.com/pview/event_poster/lmobile/public/3183f7c3334dbcd.jpg",
      "category_name":"聚会",
      "loc_id":"108288",
      "url":"https://www.douban.com/event/31791948/",
      "uri":"douban://douban.com/event/31791948",
      "fee_str":"免费",
      "end_time":"2019-07-20 17:30:00",
      "address":"北京 丰台区 蒲黄榆"
  },
    {
      "image":"https://img3.doubanio.com/pview/event_poster/median/public/2a878b1def99656.jpg",
      "adapt_url":"https://www.douban.com/location/partner/event/30295220/",
      "loc_name":"北京",
      "owner":{
          "name":"泡泡圈同城吃喝玩乐",
          "avatar":"https://img1.doubanio.com/view/site/small/public/c2d9f4b2d6481fa.jpg",
          "uid":"285988",
          "alt":"https://site.douban.com/285988/",
          "type":"site",
          "id":"285988",
          "large_avatar":"https://img3.doubanio.com/f/shire/12a185c5e266280902fc44b102cf9833155f41ae/pics/site/icon_default_large.png"
      },
      "alt":"https://www.douban.com/event/30295220/",
      "label":null,
      "id":"30295220",
      "category":"sports",
      "title":"免费徒步活动---北京教堂行（老少皆宜）!",
      "wisher_count":1213,
      "has_ticket":false,
      "content":"活动咨询微信：blueeye918<br><br>查看近期活动请扫码关注页面底部“泡泡圈公众号”<br>承接企业团建及场地租赁服务<br>报名请扫码关注“泡泡圈”报名！切记！切记！切记！<br><br><br>【强度提醒】<br>马路溜达，没强度，老少皆宜<br>纯休闲活动，无需什么装备，带上好心情，穿上花衣服，带上相机，就出发吧。怎么欢乐怎么得瑟。<br><br>【行程安排】<br>8:45，王府井集合（ 地铁五号线灯市口A口集合 找飓风户外红色旗子）<br>（出发前一天 注意查收集合短信 下班左右出 领队信息）<br>9:00，东交民巷教堂<br>10:00，崇文门教堂<br>11:00，南岗子教堂<br>12:00，午饭时间 （就近自由午餐）<br>14:00，宣武门教堂<br>15:00，西什库教堂<br>16:00，西直门教堂<br>16:30，活动结束 各回各家<br><br>以上时间均为大概时间，如果赶上婚礼或者有仪式可以体验参加。提前领队打招呼 随时行走<br><br>活动100%成行，想去的朋友抓紧时间早点报名。<br><br>活动亮点：<br>中国各种问题，个人觉得根本原因是信仰缺失，人无信则无畏，所以，需找丢失的信仰，让我们走起来。<br>本次活动将把市区主要的天主教堂走个遍，东西南北四大天主堂，东交民巷教堂（圣米厄尔教堂），南岗子教堂，如果时间允许，还可以去宽街基督堂，崇文门基督堂，珠市口基督堂，中华圣公会教堂，缸瓦市教堂等基督教堂。<br>当天的亮点就是看几座天主教堂的建筑样式，各有不同，欧洲的建筑来到中国，又是一番什么样子？等候大家去慧眼发现了。<br><br><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p54330392-1.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p54330392-2.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p54330392-3.jpg' alt=''><br><span class='pic-title'></span></div>",
      "can_invite":"no",
      "time_str":"2019.03.01 周五 起",
      "album":"1686247415",
      "participant_count":516,
      "tags":"旅行,健康,交友,聚会,徒步",
      "image_hlarge":"https://img3.doubanio.com/pview/event_poster/hlarge/public/2a878b1def99656.jpg",
      "begin_time":"2019-03-01 09:00:00",
      "price_range":"免费",
      "geo":"39.907059 116.414726",
      "image_lmobile":"https://img3.doubanio.com/pview/event_poster/lmobile/public/2a878b1def99656.jpg",
      "category_name":"运动",
      "loc_id":"108288",
      "url":"https://www.douban.com/event/30295220/",
      "uri":"douban://douban.com/event/30295220",
      "fee_str":"免费",
      "end_time":"2019-05-30 17:30:00",
      "address":"北京 北京市东城区东华门街道东长安街中华人民共和国商务部 王府井"
  },
  {
      "image":"https://img3.doubanio.com/pview/event_poster/median/public/275f3a72b8e34df.jpg",
      "adapt_url":"https://www.douban.com/location/partner/event/31752826/",
      "loc_name":"北京",
      "owner":{
          "name":"本心之旅",
          "is_banned":false,
          "is_suicide":false,
          "avatar":"https://img3.doubanio.com/icon/u146795355-4.jpg",
          "uid":"146795355",
          "alt":"https://www.douban.com/people/146795355/",
          "type":"user",
          "id":"146795355",
          "large_avatar":"https://img3.doubanio.com/icon/up146795355-4.jpg"
      },
      "alt":"https://www.douban.com/event/31752826/",
      "label":null,
      "id":"31752826",
      "category":"travel",
      "title":"换种方式去旅行与心灵独处，五台山古佛寺每周末禅文化体验义工之旅",
      "wisher_count":605,
      "has_ticket":false,
      "content":"<div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-1.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-2.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-3.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-4.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-5.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-6.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img1.doubanio.com/view/page_note/large/public/p68267556-7.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img1.doubanio.com/view/page_note/large/public/p68267556-8.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img1.doubanio.com/view/page_note/large/public/p68267556-9.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-10.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-11.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-12.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-13.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-14.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-15.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img3.doubanio.com/view/page_note/large/public/p68267556-16.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img1.doubanio.com/view/page_note/large/public/p68267556-17.jpg' alt=''><br><span class='pic-title'></span></div><div class='middle'><img src='https://img1.doubanio.com/view/page_note/large/public/p68267556-18.jpg' alt=''><br><span class='pic-title'></span></div>",
      "can_invite":"no",
      "time_str":"2019.05.24 周五 起",
      "album":"1686122936",
      "participant_count":246,
      "tags":"禅,佛,义工,寺院,打坐",
      "image_hlarge":"https://img3.doubanio.com/pview/event_poster/hlarge/public/275f3a72b8e34df.jpg",
      "begin_time":"2019-05-24 19:30:00",
      "price_range":"0.00元(费用AA)",
      "geo":"38.882771 113.683037",
      "image_lmobile":"https://img3.doubanio.com/pview/event_poster/lmobile/public/275f3a72b8e34df.jpg",
      "category_name":"旅行",
      "loc_id":"108288",
      "url":"https://www.douban.com/event/31752826/",
      "uri":"douban://douban.com/event/31752826",
      "fee_str":"0.00元(费用AA)",
      "end_time":"2019-08-11 20:00:00",
      "address":"北京 朝阳区 惠新西街南口地铁站d口集合出发"
  },
  {
      "subcategory_name":"生活",
      "image":"https://img3.doubanio.com/pview/event_poster/median/public/3183f7c3334dbcd.jpg",
      "adapt_url":"https://www.douban.com/location/partner/event/31791948/",
      "loc_name":"北京",
      "owner":{
          "name":"萌面金刚",
          "is_banned":false,
          "is_suicide":false,
          "avatar":"https://img3.doubanio.com/icon/u186274652-2.jpg",
          "uid":"186274652",
          "alt":"https://www.douban.com/people/186274652/",
          "type":"user",
          "id":"186274652",
          "large_avatar":"https://img3.doubanio.com/icon/up186274652-2.jpg"
      },
      "alt":"https://www.douban.com/event/31791948/",
      "label":null,
      "id":"31791948",
      "category":"party",
      "title":"小伙伴们，周末不要宅着了，来一起参加活动吧！",
      "wisher_count":418,
      "has_ticket":false,
      "content":"下面我来介绍一些活动内容：<br>①自我介绍——这是一个脱离了低级趣味的自我介绍~ <br>②角色扮演——来来来，看看你们有没有演戏的天赋<br>③攀岩挑战——分组挑战岩壁，看哪个小组最快吧！<br>④形体传话——一个比划一个猜，看看到底谁厉害~ <br>⑤加强版丢手绢——让我们找回童年扎着红领巾奔跑的感觉<br>⑥完成神秘任务——全新游戏 <br>⑦现场演绎（重点推荐）——我们的吉他手早就在一旁准备完毕了，想唱歌？我们不要去K房，就在大厅让吉他手为你伴奏，体会一下现场演唱的感觉，唱的不好？不要紧，我们几十个人的掌声足以满足你明星的愿望。 <br>⑧互动环节——想怎么互动就怎么互动，你懂的。 <br>⑨杀人游戏——满足一下很多人的要求而开辟出的环节，不会玩？不紧要，我们有帅哥美女现场手把手教到你会~ <br><br>咳咳。。下面说下重点，组织者的联系方式微信号：xiaodou985 加我的时候请备注 所在位置 谢谢<br>（欢迎踊跃提出好的意见和建议,有创意的好活动一旦采纳，给予精神奖励，欢迎组织能力强的人一起开展活动，）<br><div class='left'><img src='https://img3.doubanio.com/view/page_note/large/public/p69247886-2.jpg' alt=''><br><span class='pic-title'></span></div><br><br>眼睁眼，真相在黑夜间 <br>真话假话，伪装于言语间 <br>智商和情商的对决 <br>比心态，比伪装，到底谁更胜一筹？<br>一场谎言与推理的对抗<br>一次猜疑与信任的抱团取暖<br><div class='left'><img src='https://img3.doubanio.com/view/page_note/large/public/p69247886-3.jpg' alt=''><br><span class='pic-title'></span></div><br><br>世界上有一种专门拆散亲子关系的怪物，叫做长大<br>那些别人眼中的天真，都是我以梦为马的狂奔<br>越是强手，越是喜欢强有力的对手。<br><div class='left'><img src='https://img3.doubanio.com/view/page_note/large/public/p69247886-4.jpg' alt=''><br><span class='pic-title'></span></div>",
      "can_invite":"no",
      "time_str":"2019.04.21 周日 起",
      "album":"1686247445",
      "participant_count":406,
      "tags":"游历,城市行走,休闲,聚会,交友",
      "image_hlarge":"https://img3.doubanio.com/pview/event_poster/hlarge/public/3183f7c3334dbcd.jpg",
      "begin_time":"2019-04-21 13:00:00",
      "price_range":"免费",
      "geo":"39.869987 116.416206",
      "image_lmobile":"https://img3.doubanio.com/pview/event_poster/lmobile/public/3183f7c3334dbcd.jpg",
      "category_name":"聚会",
      "loc_id":"108288",
      "url":"https://www.douban.com/event/31791948/",
      "uri":"douban://douban.com/event/31791948",
      "fee_str":"免费",
      "end_time":"2019-07-20 17:30:00",
      "address":"北京 丰台区 蒲黄榆"
  },
  ],
  temp: [],
  skip: 0,
  eventItem: {}
}

const mutations = {
  loadMore (state, data) {
    state.skip += 3
    state.events = state.events.concat(data.res)
  },
  getSingleEvent (state, data) {
    state.eventItem = data.res
  }
}

const actions = {
  //  获取list页的列表数据
  loadMore ({commit, state}) {
    fetchData('/api/event/list',{
      loc: '108288',
      start: state.skip,
      count: 3
    },'GET').then(res => {
      commit({
        type:'loadMore',
        res: res.districts
      })
      
    })
  },
  // 根据list页的id  获取详情页的数据
  getSingleEvent ({commit}, data) {
    console.log(data, 123)
    return new Promise ((resolve) => {
      fetchData(`/api/event/${data.id}`).then(res => {
        commit({
          type:"getSingleEvent",
          res: res
        })
        resolve (res)
      })
    })
  }
}



export default {
  state,
  mutations,
  actions
}