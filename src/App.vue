<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './components/tabbar'
export default {
  name: 'App',
  components:{
    tabbar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: auto;
}
*{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 10pt;
}
.van-icon{
  top:2px;
}
.van-tabs__nav{
  background-color: inherit;
}
.van-tab{
  color:#fff;
  background-color: inherit;
}
.van-tab--active{
  font-weight: 600;
}
[class*=van-hairline]::after{
  border: none;
}
.van-tabs__line{
  bottom: 20px;
  height: 2px;
  border-radius: 2px;
}
/*************/
#app .van-tabbar{
  /* background-color: #2EC1F4; */
  border-top:1px solid #D0CECB;
}
.van-card__thumb{
  left: 0;
}
</style>
