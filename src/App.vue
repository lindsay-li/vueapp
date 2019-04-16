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
  height: 100%;
}
*{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 24px;
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
  line-height: 100px;
}
.van-tab--active{
  font-weight: 600;
}
[class*=van-hairline]::after{
  border: none;
}
.van-tabs__line{
  bottom: 40px;
  height: 4px;
  border-radius: 3px;
}
.van-tabs--line .van-tabs__wrap{
  height: 100px;
}
.van-hairline--top-bottom::after{
  border: none;
}
.van-tabs--line{
  padding-top: 100px;
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
  width: 228px;
  height: 228px;
}
.van-card{
  height: 246px;
  padding: 10px 30px 10px 260px;
  background-color: #fff;
}
.van-card__desc{
  position: absolute;
  left: 148px;
  bottom:10px; 
  color: #fff;
}
.van-card__tag{
  background-color: transparent !important;
  position: absolute;
  display: inline-block;
  width: 228px;
  height: 228px;
  text-align: center;
  line-height: 228px;
}
.van-card__tag::before{
  display: inline-block;
  content:'';
  width: 100px;
  height: 100px;
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
  width: 64px;
  height: 64px;
  background:url(./assets/play.png) 0 0 no-repeat ;
  background-size:80%; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: 10px 0 0 10px;
}
.van-tag--mark{
  padding: 0;
  border-radius: 6px;
}
.van-card__header{
  position: absolute;
  left: 0;
  top: 0;
}
.van-card__content{
  height: 180px;
}
.van-card__title{
  line-height: 32px;
  max-height: 64px;
}
.van-card__footer{
  position: absolute;
  width: 430px;
  right: 0;
  left: 260px;
  border-top: 1px solid #E1E2E3;
  padding-top:160px; 
}
.van-tabbar{
  height: 100px;
}
.van-tabbar-item__icon{
  font-size: 36px;
  margin-bottom: 10px;
}
.van-tabbar-item__icon img{
  height: 36px;
}
</style>
