<template>
  <div class="wrapper">
    <div class="nav">
      <div class="top">
        <div class="logo"></div>
        <div class="input">
          <Icon name='search'></Icon>
          <span>搜Samsara</span>
        </div>
        <div class="head"></div>
      </div>
      
      
    </div>
    <div class="swip"></div>
    <div class=content></div>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  name: 'index',
  data () {
    return {
      value:''
    }
  },
  components:{
    Icon
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
  height:200px;
  background-color:  #09B6F2;

}
.top{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input{
  width: 67%;
  height:36px;
  background-color: #2EC1F4;
  border-radius: 30px;
  text-align: center;
  line-height: 36px;
  color:#97E0F9;
  font-size: 10pt;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
.logo{
  width: 15%;
  height: 50px;
}
.head{
  width: 15%;
  height: 50px;
}
</style>
