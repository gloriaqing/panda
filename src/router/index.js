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


Vue.use(Router)

export default new Router({
  routes: [
   
    {
    	path:'/Home',
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
  ]
})
