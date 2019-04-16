<template>
  <div class="wrapper">
    <div class="nav" v-show="!startSearch">
      <div class="top">
        <div class="logo"></div>
        <div class="input" @click="openSearch">
          <Icon name='search'></Icon>
          <span>搜Samsara</span>
        </div>
        <div class="head"></div>
      </div>
      <div class="tabs">
        <Tabs @click="onClick" color="#fff" :line-width="30" sticky>
          <Tab title="个性推荐">
             <recomend></recomend>
          </Tab>
          <Tab title="主播电台"></Tab>
        </Tabs>
      </div>
    </div>
    <search v-if="startSearch" @close="closeSearch"></search>
  </div>
</template>

<script>
import { Icon ,Swipe, SwipeItem,Tab, Tabs} from 'vant';
import recomend from './recomend.vue';
import search from './search.vue';
import ajax from '../server/index.js'
export default {
  name: 'index',
  data () {
    return {
      value:'',
      startSearch:false
    }
  },
  components:{
    Icon,
    Swipe,
    SwipeItem,
    Tab,
    Tabs,
    recomend,
    search
  },
  created(){
    // ajax('/banner').then(res=>{console.log(JSON.stringify(res))})
  },
  methods:{
    onClick(index, title) {
      
    },
    openSearch(){
        this.startSearch = true;
    },
    closeSearch(){
      this.startSearch = false;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  width: 100%;
  height: 100%;
  
}
.nav{
  width: 100%;
  height:207px;
  background-color:  #09B6F2;
}
.top{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 26px;
}
.input{
  width:257px;
  height:29px;
  background-color: #2EC1F4;
  border-radius: 29px;
  text-align: center;
  line-height: 29px;
  color:#97E0F9;
  font-size: 10px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
.input span{
  font-size: 10px;
}
.logo{
  width: 15%;
  /* height: 48px; */
}
.head{
  width: 15%;
  /* height: 48px; */
}

.tabs{
  padding-bottom: 50px;
}
</style>
