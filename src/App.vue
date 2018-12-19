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
  background-color: #09B6F2 !important;
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
.van-card__thumb{
  width: 119px;
  height: 119px;
}
.van-card{
  height: 129px;
  padding: 5px 15px 5px 130px;
  background-color: #fff;
}
.van-card__desc{
  position: absolute;
  left: 80px;
  bottom:5px; 
  color: #fff;
}
.van-card__tag{
  background-color: transparent !important;
  position: absolute;
  display: inline-block;
  width: 119px;
  height: 119px;
  text-align: center;
  line-height: 119px;
}
.van-card__tag::before{
  display: inline-block;
  content:'';
  width: 50px;
  height: 50px;
  background-color: rgba(255,255,255,0.6);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.van-card__tag::after{
  display: inline-block;
  content:'';
  width: 32px;
  height: 32px;
  background:url(./assets/play.png) 0 0 no-repeat ;
  background-size:80%; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: 5px 0 0 5px;
}
.van-tag--mark{
  padding: 0;
  border-radius: 6px;
}
.van-card__footer{
  width: 215px;
  right: 0;
  left: 130px;
  border-top: 1px solid #E1E2E3;
  padding-top:10px; 
}
</style>
