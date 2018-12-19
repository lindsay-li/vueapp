<template>
<div class="wrapper">
    <div class="_navbar">
        <div class="_left">
            <Icon name='arrow-left'></Icon>
        </div>
        <div class="_center">歌手分类</div>
        <div class="_right"></div>    
    </div>
    <div class="classify">
        <div class="zu">
            <span :class="[a==current1?'active':'']" v-for="(itm,a) in zu" :key="a" @click="head(a,itm)">{{itm}}</span>
        </div>
        <div class="he">
            <span :class="[b==current2?'active':'']" v-for="(itt,b) in he" :key="b"  @click="search(b,itt)">{{itt}}</span>
        </div>
    </div>  
    <div class="artist">
        <div class="title">
            <span>热门歌手</span>    
        </div> 
        <div class="list">
            <div class="content">
                <div class="avator">
                    <img src="../assets/artist.jpg" />
                </div>
                <div class="info">
                    <span class="name">薛之谦</span>
                </div>
            </div>    
        </div>   
    </div>  
</div>    
</template>
<script>
import { Icon } from 'vant';
export default {
    data(){
        return{
            zu:['华语','欧美','日本','韩国','其他'],
            he:['男','女','乐队/组合'],
            current1:1,
            current2:2,
            keyword1:'',
            keyword2:''
        }
    },
    components:{
        Icon
    },
    methods:{
        head(index,text){
            this.keyword1 = text;
            this.current1 = index;
        },
        search(index,text){
            this.current2 = index;
            this.keyword2 = text;
        }
    }
}
</script>
<style scoped>
._navbar{
    width: 100%;
    height: 48px;
    background-color: #09B6F2;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
._center{
    color: #fff;
}
._left{
    color: #fff;
    font-size: 14pt;
}
._left,
._right{
    width: 45px;
    height: 100%;
    line-height: 48px;
    text-align: center;
}
.classify{
    width: 96%;
    height: 90px;
    margin: 0 auto;
    overflow: hidden;
}
.zu span.active,
.he span.active{
    color: #09B6F2;
}
.zu{
    margin: 20px 0;
}
.zu span{
    color: #646566;
    margin-right:32px; 
}
.he span{
    color: #646566;
    margin-right:45px; 
}
.title{
    width: 100%;
    height: 25px;
    line-height: 25px;
    color: #5A5B5C;
    background-color: #E2E3E4;
}
.title>span{
    margin-left:10px;
}
</style>
