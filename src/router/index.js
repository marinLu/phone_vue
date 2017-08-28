import Vue from 'vue';
import Router from 'vue-router';

// 引入首页组件
import Index from "@/components/index/index"
import IndexRec from "@/components/index/indexRec"
import IndexExpert from "@/components/index/indexExpert"
import IndexGood from "@/components/index/indexGood"
import IndexDay from "@/components/index/indexDay"
import IndexSearch from "@/components/index/indexSearch"
import IndexPerson from "@/components/index/indexPerson"
import IndexTalk from "@/components/index/indexTalk"
import MyMessage from "@/components/index/myMessage"
import DayUtails from "@/components/index/dayUtails"
import HumTalkRecommend from "@/components/humorous/humTalkRecommend"
import HumOtherInfo from "@/components/humorous/humOtherInfo"

// 引入逗圈组件
import IndexHum from "@/components/humorous/indexHum";
import HumRecommend from '@/components/humorous/humRecommend';
import HumClass from '@/components/humorous/humClass';
import HumJoin from '@/components/humorous/humJoin';
import HumCreate from '@/components/humorous/humCreate';
import HumEditorInfo from '@/components/humorous/humEditorInfo'
import HumHomePage from '@/components/humorous/humHomePage'
import HumTalk from '@/components/humorous/humTalk'
import HumEditorNewTalk from '@/components/humorous/humEditorNewTalk'
import HumTalkJoy from '@/components/humorous/humTalkJoy'
import HumGroup from '@/components/humorous/humGroup'

// 引入论逗组件
import IndexFunny from "@/components/thefunny/indexFunny";
import Move from "@/components/thefunny/move";
import Book from "@/components/thefunny/book";
import Game from "@/components/thefunny/game";
import Music from "@/components/thefunny/music";
import HotMove from "@/components/thefunny/hot_move";
import MoveDetails from "@/components/thefunny/move_details";
import MusicDetails from "@/components/thefunny/music_details";
import BookDetails from "@/components/thefunny/book_details";
import GameDetails from "@/components/thefunny/game_details";
import NewGame from "@/components/thefunny/new_game";
import NewMusic from "@/components/thefunny/new_music";
import NewBook from "@/components/thefunny/new_book";

// 引入我的组件
import IndexMine from "@/components/mine/indexMine";
import Wode from "@/components/mine/wode";
import Shoucang from "@/components/mine/shoucang";
import Doubi from "@/components/mine/doubi";
import Yingpiao from "@/components/mine/yingpiao";
import Shezhi from "@/components/mine/shezhi";
import Dingyue from "@/components/mine/dingyue";
import Xingqu from "@/components/mine/xingqu";
import Anquan from "@/components/mine/anquan";
import Heiname from "@/components/mine/heiname";
import Login from "@/components/mine/login";
import Dongtai from "@/components/mine/dongtai";
import Xiangce from "@/components/mine/xiangce";
import Guanzhu from "@/components/mine/guanzhu";
import Fensi from "@/components/mine/fensi";
import Sixin from "@/components/mine/sixin";
import Pinglun from "@/components/mine/pinglun";
//import Pinglun from "@/components/mine/pinglun";
import Tongzhi from "@/components/mine/tongzhi";




Vue.use(Router)

export default new Router({
  routes: [
  // 首页路由
   {
      path:'/',
      name:'Index',
      component:Index,
      redirect:"/indexRec",
      children:[
         {
            path:"indexRec",
            name:'indexRec',
            component:IndexRec
         },
         {
            path:"indexExpert",
            name:'indexExpert',
            component:IndexExpert
         },
         {
            path:"indexGood",
            name:'indexGood',
            component:IndexGood
         },
         {
            path:"indexDay",
            name:'indexDay',
            component:IndexDay
         }
      ]
   },

   {
    path:'/indexSearch',
    name:'indexSearch',
    component:IndexSearch
   },
   
   {
    path:'/humTalkRecommend',
    name:'humTalkRecommend',
    component:HumTalkRecommend
   },
  {
    path:'/humOtherInfo',
    name:'humOtherInfo',
    component:HumOtherInfo
   },
   {
    path:'/myMessage',
    name:"myMessage",
    component:MyMessage
   },
   {
    path:'/indexTalk',
    name:'indexTalk',
    component:IndexTalk
   },
   {
    path:'/dayUtails',
    name:'dayUtails',
    component:DayUtails
   },




//首页路由  end

   
   
   
   
   
   {
    path:'/book_details',
    name:'BookDetails',
    component:BookDetails
   },
   {
    path:'/game_details',
    name:'GameDetails',
    component:GameDetails
   },
   {
    path:'/new_game',
    name:'NewGame',
    component:NewGame
   },
   {
    path:'/music_details',
    name:'MusicDetails',
    component:MusicDetails
   },
   {
    path:'/new_music',
    name:'NewMusic',
    component:NewMusic
   },
   {
    path:'/new_book',
    name:'NewBook',
    component:NewBook
   },
   {
    path:'/move_details',
    name:'MoveDetails',
    component:MoveDetails
   },
   {
    path:'/hot_move',
    name:'HotMove',
    component:HotMove
   },


   //逗圈路由

   {
     path:'/humorous',
     name:'IndexHum',
     component:IndexHum,
      redirect:"/humorous/recommend",
      children:[
         {
            path:'recommend',
            name:'HumRecommend',
            component:HumRecommend
         },
         {
            path:'class',
            name:'HumClass',
            component:HumClass
         },
         {
            path:'join',
            name:'HumJoin',
            component:HumJoin
         },
         {
            path:'create',
            name:'HumCreate',
            component:HumCreate
         }
      ]
    },
    {
      path:'/editorinfo',
      name:'HumEditorInfo',
      component:HumEditorInfo
    },
    {
      path:'/homepage',
      name:'HumHomePage',
      component:HumHomePage
    },
    {
      path:'/talk',
      name:'HumTalk',
      component:HumTalk
    },
    {
      path:'/editortalk',
      name:'HumEditorNewTalk',
      component:HumEditorNewTalk
    },
    {
      path:'/talkjoy',
      name:'HumTalkJoy',
      component:HumTalkJoy
    },
    {
      path:'/group',
      name:'HumGroup',
      component:HumGroup
    },

    //论逗路由
    {
      path:'/thefunny',
      name:'IndexFunny',
      component:IndexFunny,
      redirect:'/thefunny/move',
      children:[
            {
          path: 'move',
          name: 'Move',
          component: Move
        },
        {
          path: 'book',
          name: 'Book',
          component: Book
        },
        {
          path: 'game',
          name: 'Game',
          component: Game
        },
        {
          path: 'music',
          name: 'Music',
          component: Music
        }
      ]
   },

   
   


 //我的路由
   {
      path: '/pinglun',
      name: 'Pinglun',
      component: Pinglun
    },
    {
      path: '/sixin',
      name: 'Sixin',
      component:Sixin
    },
    {
      path: '/tongzhi',
      name: 'Tongzhi',
      component:Tongzhi
    },
   {
      path: '/shoucang',
      name: 'Shoucang',
      component: Shoucang
    },
    {
      path: '/doubi',
      name: 'Doubi',
      component: Doubi
    },
    {
      path: '/yingpiao',
      name: 'Yingpiao',
      component: Yingpiao
    },
    {
      path: '/dingyue',
      name: 'Dingyue',
      component: Dingyue
    },
    {
      path: '/shezhi',
      name: 'Shezhi',
      component: Shezhi
    },
    {
      path: '/xingqu',
      name: 'Xingqu',
      component: Xingqu
    },
    {
      path: '/anquan',
      name: 'Anquan',
      component: Anquan
    },
    {
      path: '/heiname',
      name: 'Heiname',
      component: Heiname
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dongtai',
      name: 'Dongtai',
      component: Dongtai
    },
    {
      path: '/xiangce',
      name: 'Xiangce',
      component: Xiangce
    },
    {
      path: '/guanzhu',
      name: 'Guanzhu',
      component: Guanzhu
    },
    {
      path: '/fensi',
      name: 'Fensi',
      component: Fensi
    },
   {
    path:'/mine',
    name:'IndexMine',
    component:IndexMine,
    redirect:'/wode'
   },
   {
    path:'/wode',
    name:'Wode',
    component:Wode
   }


  ]
})
