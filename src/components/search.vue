<template>
<div class="wrapper">
    <div class="head">
        <div class="search">
            <div class="input">
                <span class="logo">
                    <Icon name='search'></Icon>
                </span>
                <input type="text" placeholder="搜Samsara" v-model="inputValue" ref="input">
            </div>
            <span class="text" @click="closeSearch">取消</span>
        </div>    
    </div>    
    <div class="recommend">
        <span class="tit">按歌手搜索</span>
        <div class="avator">
            <img src="../assets/avator.jpg" />
        </div>
    </div>
    <div class="line"></div>
    <div class="hot_search">
        <div class="title">
           <span>热门搜索</span>
        </div>
        <div class="list">
            <span class="crux" v-for="(item,index) in hots" :key="index" >
                {{item}}
            </span>
        </div>
    </div>
    <div class="history">
        <div class="title">
           <span>搜索历史</span>
        </div>
        <div class="list">
            <span class="crux" v-for="(item,index) in hots" :key="index" >
                {{item}}
            </span>
        </div>
    </div>
</div>    
</template>
<script>
import { Icon } from 'vant';
export default {
    data(){
        return{
            inputValue:'',
            hots:['海王','Sati空间','陈奕迅','乐华七子','年底转运神曲','Move Your Body','Pop/stars','薛之谦','张学友','沙漠骆驼'],
            history:['海王','Sati空间','陈奕迅','乐华七子','年底转运神曲','Move Your Body','Pop/stars','薛之谦','张学友','沙漠骆驼'],
        }
    },
    components:{
        Icon
    },
    mounted(){
       this.$refs.input.focus();
    },
    methods:{
        closeSearch(){
            this.$emit('close')
        }
    }
}
</script>
<style scoped>
.head{
    width: 100%;
    height: 48px;
    background-color: #09B6F2;
}
.search{
    width: 96%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}
.input{
   width: 313px;
   height: 30px;
   border-radius: 30px; 
   background-color: #2EC1F4;
   color: #97E0F9;
}
.input input{
    background-color: transparent;
    border: none;
    outline: none;
    color:#97E0F9;
    font-size: 10pt;
    line-height: 30px;
    height: 30px;
    width: 280px;
}
::-webkit-input-placeholder{
    color: #97E0F9;
} 
.logo{
    margin-left: 8px;
}
.text{
    color: #fff;
}
.recommend{
    width:96%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}
.tit{
    font-size: 14pt;
    color: #323233;
    font-weight: bold;
}
.tit::after{
    display: inline-block;
    content:'';
    width: 16px;
    height: 16px;
    background: url(../assets/right.png) 0 0 no-repeat;
    margin-left: 7px;
    position: relative;
    top: 2px;
}
.avator{
    width: 69px;
    height: 28px;
}
.avator img{
    width: 100%;
    height: 100%;
}
.line{
    width: 100%;
    height: 1px;
    background-color: #E2E3E4;
}
.hot_search,
.history{
    width: 96%;
    margin: 5px auto 0;
}
.title{
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12pt;
    font-weight: bold;
}
.crux{
    color: #323233;
    padding: 9px 15px;
    border-radius: 30px;
    background-color: #EEEFF0;
    margin-bottom: 7px;
    margin-right: 8px;
}
.list{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
}
</style>
