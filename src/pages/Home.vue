<template>
  <div class="panda">
    <div class="src-l">
      <div class="src-top">
        <input type="text" value="搜索国家或地区" />
      </div>
      <div class="src-wrapper">
          <img src="../assets/img/logo-y.png" />
          <input type="text" placeholder="搜索国家或地区" />
      </div>
  	  <div class="hi">
        Hi :  )
      </div>
      <div class="dis">
        你离出国只有一纸签证的距离
      </div>
      <div class="p-v">
        <img src="../assets/img/播放.svg"/>
      </div>
      <div class="tip-info">
        <div class="in-1">
         
          <img src="../assets/img/gou.svg" />
          <a>拒签退全款</a>

        </div>
        <div class="in-2">
        
          <img src="../assets/img/gou.svg" />
          <a>免费拍签证照</a>

        </div>
        <div class="in-3">
        
          <img src="../assets/img/gou.svg" />
          <a>自动填写申请表</a>

        </div>
      </div>
      <div class="pic-tips">
        <img src="../assets/img/visa.png"/>
        <img src="../assets/img/invite.png"/>
      </div>
    </div>
    
    <div class="nav">
      <ul>
        <li><a>#热门</a></li>
        <li><a>#亚洲</a></li>
        <li><a>#美洲</a></li>
        <li><a>#大洋洲</a></li>
        <li><a>#欧洲</a></li>
        <li><a>#非洲</a></li>
      </ul>
    </div>
   
    <div class="banner">
      <div class="banner-wrapper">
        <div class="ban-1">
          <h3>热门商品</h3>
          <img src="../assets/img/ameri.jpg" />
          <h4>美国旅游签证-全国受理</h4>
          <span>￥1399</span>
        </div>
        <div class="ban-1">

          <img src="../assets/img/austri.jpg" />
          <h4>澳大利亚旅游签证-全国受理</h4>
          <span>￥1199</span>
        </div>
       
        <div class="ban-1">

          <img src="../assets/img/ma.jpg" />
          <h4>马来西亚旅游签证-全国受理</h4>
          <span>￥399</span>
        </div>
      </div>
     
      <div class="area">
        <div class="top-info">
          <a>
            亚洲
            <img src="../assets/img/箭头 (1).svg" />
          </a>
          <span>已支持14个国家和地区</span>
        </div>
        <div class="area-wrapper">

          <img src="../assets/img/miandian.jpg" />
          <img src="../assets/img/japan.png" />
          <img src="../assets/img/thai.png" />
          <img src="../assets/img/mar.png" />
          <img src="../assets/img/xin.png" />
        <!-- <ul>
          <li><img src="../assets/img/miandian.jpg" /></li>
          <li><img src="../assets/img/japan.png" /></li>
          <li><img src="../assets/img/thai.png" /></li>
          <li><img src="../assets/img/mar.png" /></li>
          <li><img src="../assets/img/xin.png" /></li> -->
          <div class="more">
            <a>MORE</a>
            <a>-</a>
            <a>查看全部</a>
          </div>
        <!-- </ul> -->
        </div>
      </div>
      <div class="area">
        <div class="top-info">
          <a>
            美洲
            <img src="../assets/img/箭头 (1).svg" />
          </a>
          <span>已支持2个国家和地区</span>
        </div>
        <div class="area-wrapper">
          <img src="../assets/img/miandian.jpg" />
          <img src="../assets/img/japan.png" />
          <img src="../assets/img/thai.png" />
          <img src="../assets/img/mar.png" />
          <img src="../assets/img/xin.png" />
          <div class="more">
            <a>MORE</a>
            <a>-</a>
            <a>查看全部</a>
          </div>
        </div>
        
      </div>
      <div class="area">
        <div class="top-info">
          <a>
            大洋洲
            <img src="../assets/img/箭头 (1).svg" />
          </a>
          <span>已支持2个国家和地区</span>
        </div>
        <div class="area-wrapper">
          <img src="../assets/img/miandian.jpg" />
          <img src="../assets/img/japan.png" />
          <img src="../assets/img/thai.png" />
          <img src="../assets/img/mar.png" />
          <img src="../assets/img/xin.png" />
          <div class="more">
            <a>MORE</a>
            <a>-</a>
            <a>查看全部</a>
          </div>
        </div>
        
      </div>
      <div class="area">
        <div class="top-info">
          <a>
            欧洲
            <img src="../assets/img/箭头 (1).svg" />
          </a>
          <span>已支持17个国家和地区</span>
        </div>
        <div class="area-wrapper">
          <img src="../assets/img/miandian.jpg" />
          <img src="../assets/img/japan.png" />
          <img src="../assets/img/thai.png" />
          <img src="../assets/img/mar.png" />
          <img src="../assets/img/xin.png" />
          <div class="more">
            <a>MORE</a>
            <a>-</a>
            <a>查看全部</a>
          </div>
        </div>
        
      </div>
      <div class="area">
        <div class="top-info">
          <a>
            非洲
            <img src="../assets/img/箭头 (1).svg" />
          </a>
          <span>已支持2个国家和地区</span>
        </div>
        <div class="area-wrapper">
          <img src="../assets/img/miandian.jpg" />
          <img src="../assets/img/japan.png" />
          <img src="../assets/img/thai.png" />
          <img src="../assets/img/mar.png" />
          <img src="../assets/img/xin.png" />
          <div class="more">
            <a>MORE</a>
            <a>-</a>
            <a>查看全部</a>
          </div>
        </div>
        
      </div>
    </div>
	</div>
    


    
  </div>
</template>

<script>
import Search from "../components/Search.vue"

import End from "../components/End.vue"

export default {
 
  data () {
    return {
     
    }
  },
  components:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0;
}                                                                                                          

a {
  color: #757575;
}
.panda{width: 100%;height: 100%}
.src-l{width:100%;height: 4.82rem;background-image: url(../assets/img/bg1.jpg);position: absolute;background-size: cover;background-position:center;z-index: 200; }
.src-top{position: absolute;top:0;width: 100%;margin-top: 0.28rem}
.src-top input{width:84%;height:0.3rem;margin-left: 0.15rem;border-radius: 0.14rem;padding-left: 0.2rem;background-color:rgba(0,0,0,0.2);color:#fff;outline: medium;border: 1px solid #aaa}

.src-wrapper{height:0.7rem;width: 100%;background:#fff;line-height: 0.9rem;display: none;}
.src-wrapper img{width: 0.4rem;height: 0.4rem;vertical-align: middle;margin-left: 0.2rem}
.src-wrapper input{width:70%;height: 0.31rem;opacity: 0.5;border-radius:0.14rem;padding-left: 0.2rem;background: #f3f4f6;margin-left: 0.1rem}
.hi{margin-top: 1.1rem;color: #fff;font-size: .32rem;margin-left: .42rem}
.dis{font-size: .17rem;margin-top: .23rem;color: #fff;text-align: center;}
.p-v{margin-left: 1.58rem;margin-top: .44rem}
.p-v img{width:.6rem;height:.6rem;}
.tip-info{display: flex;margin-left:.48rem;margin-top: .45rem}
.tip-info img{width:.13rem;height:.13rem;}
.tip-info a{margin-right: .07rem;color: #fff}
.pic-tips{display: flex;overflow-x:auto;line-height: 1.2rem;margin-top: .22rem;height: 1rem}
.pic-tips img{width:2.2rem;height: 1rem}
.pic-tips img:first-child{margin-right: 0.06rem;margin-left: .1rem}

.nav{height: .4rem;width: 100%;line-height: .4rem;border-bottom: 2px solid #f6f6f6;overflow: hidden;position: absolute;top:4.8rem;}
.nav ul{width: 100%;height: .6rem;display: flex;overflow-x:auto; }
.nav ul li{color: #787878;width: .7rem;font-size: .15rem;}
.nav ul li a{width: .8rem;display:block;text-align: center;}

.banner{position: absolute;top:5.4rem;text-align: center;bottom: .5rem;height: 100%;}

.banner h3{font-size: .19rem;font-style: normal;margin-bottom: .1rem}
.banner img{width: 3.75rem;height: 1.4rem;}
.banner span{display: block;color: #ff4950;margin-top: .15rem;font-size: .15rem;margin-bottom: .1rem}
.ban-1 h4{color: #000;margin-top: .1rem}
.banner-wrapper{display: flex;flex-direction:column;}
.area{border-top: .05rem solid #ddd;margin-top: .3rem;display: flex;flex-direction:column;}
.area:last-child{margin-bottom: .6rem}
.area-wrapper{width: 3.55rem; overflow-x: auto;display: flex;height: 1.5rem;margin-right: .2rem}
.area-wrapper img{margin-right: 0.05rem;width: 3rem;height: 1.5rem}


.more{width: 1.8rem;height: 1rem;border: 1px solid #ff4950;;margin-top: .35rem;margin-left: .1rem;padding: 0 0.3rem;margin-right: .2rem}
.more a{display: block;color: #ff4950;width: .6rem}
.more a:first-child{margin-top:.25rem;}
.top-info{margin-top: .16rem;}
.top-info a{font-size: .18rem}
.top-info span{color: #ddd;font-size: .12rem;margin-top: .08rem;margin-bottom: .13rem}
.top-info img{width: .14rem;height: .14rem;margin:0;padding: 0;vertical-align: middle;}

</style>

