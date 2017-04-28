<template>
  <div class="aly">
    <div class="bg-asia">

      <div class="header">
        <img src="../assets/img/arrow2.svg" @click="home" />
        <img src="../assets/img/mari.png" class="flag" />
        <img src="../assets/img/分享.svg" />
      </div>
      <div class="ban">
        <h3>马来西亚旅游签-全国受理</h3>
        <div class="detail">
          <span><em>￥</em>329</span>
          <span>明细</span>
        </div>
        <div class="progress">
          <span>办理时长</span>
          <span>5-6</span>
          <span>工作日</span>
          <span><img src="../assets/img/arrowleft.svg" /></span>
        </div>
        <div class="some-info">
          <a>
            <span><em>3</em>个月</span>
            <span>有效期限</span>
          </a>
          <a>
            <span><em>30</em>天</span>
            <span>最长停留</span>
          </a>
          <a>
            <span><em>1</em>次</span>
            <span>入境次数</span>
          </a>
        </div>
      </div>                         
    </div>
    <div class="nav-1">
      <div class="nav-out">
        <div class="rate">
          <div class="rate-suc">
          
            <span>出签率<em>99</em><b>%</b></span>
            
          </div>
          <div class="comment">
            <a>
              <span>评价</span>
              <span>
                <img src="../assets/img/星星.svg" />
                <img src="../assets/img/星星.svg" />
                <img src="../assets/img/星星.svg" />
                <img src="../assets/img/星星.svg" />
                <img src="../assets/img/星星.svg" />
                <em>(23)</em>
              </span>
              <span>
                <img src="../assets/img/arrowright.svg" />
              </span>
              
            </a>
          </div>
        </div>
        <div class="way-out">
          <img src="../assets/img/icon_reject_refund.png" />
          <img src="../assets/img/icon_no_need_deposit.png" />
          <img src="../assets/img/icon_photo_free.png" />
          <img src="../assets/img/icon_need_express.png" />
        </div>
      </div>
    </div>
    <div class="need-thing">
      <h3>所需资料</h3>
      
    
    </div>
      
    <div class="select">
      <div class="select-wrapper">
        <div class="select-wrap">
          <img src="../assets/img/house.svg" />
        </div>
        <div class="select-wrap">
          <img src="../assets/img/hat.svg" />
        </div>
        <div class="select-wrap">
          <img src="../assets/img/bag.svg" />
        </div>
        <div class="select-wrap">
          <img src="../assets/img/coffee.svg" />
        </div>
        <div class="select-wrap">
          <img src="../assets/img/glass.svg" />
        </div>
      </div>
    </div>

    <div class="out" v-show="ok">
      <div class="out-info">
        <a @click="go"><img src="../assets/img/mul.svg" /></a>
        <h3>出行信息</h3>
      </div>
      <div class="out-date">
        <h3>预计出行日期</h3>
        
        <div class="date" @click="getDate">选择日期</div>
      </div>
      <router-view></router-view>
      <div class="apply-who">
        <h3>申请人信息</h3>
        <a>选择申请人</a>
      </div>
      <div class="next">下一步</div>
    </div>
    <div class="footer">
      <a><img src="../assets/img/tel.svg" />咨询</a>
      <span @click="del">开始办理</span>
    </div>
    <Outinfo @aa="aaff" v-show="hide"></Outinfo>
  </div>
</template>

<script>
import Outinfo from "../components/Outinfo"
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  // name: 'hello',

  components:{
     swiper,
     swiperSlide,
     Outinfo
  },
  data () {
    return {
     ok:false,
     hide:false,
     a: ''
    }
  },
  methods:{
    home(){
      this.$router.push("./home")
    },
    getDate(){
      console.log(3);
     this.$router.push({name:'Outinfo'})
     // this.hide=true
    },
    go:function(){
      this.ok=false
    },
    del:function(){
      this.ok=true
    },
    aaff(tm) {
      this.a = tm;
      console.log(1213)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.d{background: red;height: 1rem;width: 100%}*/
.ban span{color: #fff}
.bg-asia{width: 100%;height: 3.64rem;background: url("../assets/img/bg-asia.png")no-repeat;background-position:bottom center; }
.header{display: flex;justify-content:space-between;}
.header img{margin: .2rem .1rem 0;}
.header img:first-child{width: .1rem;height: .18rem}
.header img:last-child{width: .2rem;height: .25rem;}
.flag{width: .45rem;height: .45rem;border-radius: 50%;border:.02rem solid #fff;}
.ban{width: 100%}
.ban h3{color: #fff;font-size: .17rem;font-style: normal;font-weight: 200;text-align: center;margin-top: .33rem}
.detail{text-align: center;margin-top: .5rem}
.detail span{display:inline-block;font-size: .25rem;}
.detail span:last-child{width: .46rem;height: .24rem;background: #f26055;border-radius: .08rem;line-height: .24rem;font-size: .12rem;margin-top: .03rem;vertical-align: middle;margin-top: -.08rem}

.detail span em{font-style: normal;font-size: .15rem}
.progress{text-align: center;margin-top: .4rem}
.progress span:first-child{color: #ffaca6;margin-right: .09rem}
.progress span:nth-child(2){margin-left: .04rem}
.progress span:nth-child(3){margin-right: .07rem}
.progress span:last-child img{width: .06rem;height: .1rem;vertical-align: middle;}
.some-info{display: flex;justify-content:space-around;margin-top: .4rem}
.some-info a{display: block;text-align: center;}
.some-info span{display: block;}
.some-info a span:last-child{color: #ffaca6;margin-top: .13rem}
.some-info a em{font-style: normal;font-size: .17rem}
.nav-1{position: relative;width: 100%;height: 1.4rem;background: #f3f4f6}
.nav-out{width: 3.36rem;position: absolute;top:-.1rem;background: #fff;z-index: 999;margin-left: .2rem;height: 1.38rem;color: #c1c1c1}
.rate{justify-content:space-around;width: 100%;display: flex;margin-top: .15rem;height: .54rem}

.nav-out img{display: inline-block;}
.rate-suc{height: .36rem;line-height: .36rem}
.rate-suc em{font-style: normal;font-size: .35rem;color: #ff7e82;margin-left: .15rem}
.rate-suc b{color: #ff7e82}
.comment{height: .36rem;margin-right: -.2rem;}
.comment a{display: flex;color: #c1c1c1}
.comment em{font-style: normal;display: block;text-align: center;}
.comment span:first-child{display: block;line-height: .36rem;margin-right: .18rem}
.comment span:last-child{line-height: .4rem;margin-left: .18rem;}
.way-out{display: flex;justify-content:space-around;border-top: 1px solid #eee;height: .69rem}
.way-out img{width: .34rem;height: .3rem;margin: 0 auto;margin-top: .18rem}


.need-thing{text-align: center;}
.need-thing h3{font-style: normal;}
.select{height: .5rem;width: 100%;}
.select-wrapper{width: 1200px;overflow-x:auto;height: .6rem}

.select-wrap{width: .48rem;height: .48rem;border-radius: 50%;border: 1px solid #d5d5d5;margin-right: .4rem;display: inline-block;}
.select-wrap img{vertical-align: middle;width: .28rem;height: .24rem;margin: .1rem auto 0;}

.footer{width: 100%;position: fixed;bottom: 0.1rem}

.footer a{display: block;float: left;margin-left: .26rem;color: #d0d0d0;text-align: center;}
.footer img{display: block;}
.footer span{display: block;width: 2.9rem;height: .45rem;background: #ff5a60;font-size: .17rem;color: #fff;line-height: .45rem;text-align: center;float: right;margin-right: .1rem}

.out{margin-top: -3.6rem;background: #fff;height: 6rem;position: fixed;z-index: 1100;width: 100%}
.out-info{text-align: center;overflow: hidden;padding: .15rem 0}
.out-info img{float: left;width: .2rem;height: .2rem;margin-left: .1rem}
.out-date h3{text-align: left;border-top: 1px solid #f4f4f4;padding: .25rem 0;
  margin-left: .1rem}
.out-date .date{display:block;width: 3.5rem;height: .4rem;margin-left: .1rem;border: .01rem solid #f4f4f4;outline: medium;line-height: .4rem;text-align: left;color: #afafaf}
.apply-who{margin-left: .1rem}
.apply-who a{display: block;width: 3.5rem;height: .25rem;border: .01rem solid red;text-align: center;line-height: .25rem;color: #ff5a60}
.apply-who h3{padding: .21rem 0}
.apply-who span{text-align: left;display: block;}
.next{height: .45rem;width: 3.5rem;background: #ffa8ab;font-size: .16rem;color: #fff;text-align: center;margin: 2.04rem auto 0;line-height: .45rem;}

</style>
