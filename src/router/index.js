import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/Search'
import Top from '@/components/Top'
import End from '@/components/End'
import Home from '../pages/Home'
import List from '../pages/List'
import Me from '../pages/Me'
import Left from '../pages/Left'
import Apply from '../components/Apply'
import Outinfo from '../components/Outinfo'

Vue.use(Router)

export default new Router({
  routes: [
    // mode:'history'
    {
        path:'/',
        redirect:{name:'Home'}
        
    },
   
    {
    	path:'/home',
    	name:'Home',
    	component:Home
    },
    {
    	path:'/list',
    	name:'List',
    	component:List
    },
    {
    	path:'/me',
    	name:'Me',
    	component:Me
        
    },
    {
        path:'/left',
        name:'Left',
        component:Left
    }
    ,
    {
       path:'/Apply',
       name:'Apply',
       component:Apply,
       children:[
               {
                path:"/Outinfo",
                name:"Outinfo",
                component:Outinfo
               }
       ]
    }
   
  ]
})
