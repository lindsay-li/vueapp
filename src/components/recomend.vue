<template>
  <div>
      <div class="swip">
        <Swipe :autoplay="3000" indicator-color="white"  :height="135">
          <SwipeItem>
            <div class="bgg">1</div>
          </SwipeItem>
          <SwipeItem><div class="bgg">2</div></SwipeItem>
          <SwipeItem><div class="bgg">3</div></SwipeItem>
          <SwipeItem><div class="bgg">4</div></SwipeItem>
        </Swipe>
      </div>
      <div class="menu">
          <div class="menu_item">
              <div class="icon">
                  <img src="../assets/fm.png" />
              </div>
              <span>私人FM</span>
          </div>
          <div class="menu_item">
              <div class="icon">
                  <img src="../assets/rili.png" />
              </div>
              <span>每日推荐</span>
          </div>
          <div class="menu_item">
              <div class="icon">
                  <img src="../assets/menu.png" />
              </div>
              <span>歌单</span>
          </div>
          <div class="menu_item">
              <div class="icon">
                  <img src="../assets/top.png" />
              </div>
              <span>排行榜</span>
          </div>
      </div>
      <div class="line"></div>
      <div class=content>
          <div class="title">
              <span>最新视频</span>
              <Icon name='arrow'></Icon>
          </div>
          <div class="list">
              <div class="l_item" v-for="(item,index) in list" :key="index">
                  <div class="pic"></div>
                  <p class="tit">花语速爆新歌</p>
              </div>
          </div>
          <div class="title">
              <span>热门视频</span>
              <Icon name='arrow'></Icon>
          </div>
          <div class="hots">
              <div class="card">
                <Card
                 desc="03:10"  
                 title="亡灵序曲大集合，燃爆荷尔蒙大大大所大所多所"
                 tag="."
                 :thumb="imageURL"
                >
                <div slot="tags">
                    <span class="play_num">18654</span>
                    <span class="commend">35</span>
                </div>
                <div slot="footer">
                    <div class="_info">
                        <div class="_user">
                            <div class="_img"><img src="../assets/test_user.png" /></div>
                            <span>周铁男</span>
                        </div>
                        <span class="esli">...</span>
                    </div>
                </div>
                </Card>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import { Icon ,Swipe, SwipeItem,Card } from 'vant';
export default {
    data(){
        return{
            list:6,
            imageURL:require('../assets/testimg.png'),
        }
    },
    components:{
        Icon,
        Swipe,
        SwipeItem,
        Card
    }
}
</script>
<style scoped>
.swip{
  width: 100%;
  height:135px; 
}
.bgg{
  width: 97%;
  height: 100%;
  background-color: blanchedalmond;
  border-radius: 8px;
  margin: 0 auto;
}
.menu{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 16px;
}
.menu_item{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.icon{
    width:50px;
    height: 50px;
    border-radius: 50%;
    background-color: #09B6F2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
}
.icon img{
    width: 25px;
    height: 25px;
}
.line{
    width: 100%;
    height: 1px;
    background-color: #E2E3E4;
    margin: 20px 0;
}
.content{
    width: 97%;
    margin: 0 auto;
}
.title {
    font-size: 14pt;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}
.title span{
    font-size: inherit;
    margin-right: 8px;
}
.list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.list .l_item{
    width: 114px;
    margin-bottom: 10px;
}
.l_item .pic{
    width: 114px;
    height: 114px;
    background-color: #09B6F2;
    border-radius: 6px;
}
.l_item .tit{
    width: 104px;
    padding: 5px 5px;
    font-size: 10pt;
    color: #323233;
}
.play_num,
.commend{
    color: #979798;
    font-size: 8pt;
}
.play_num::before{
    display: inline-block;
    content:'';
    width: 16px;
    height: 16px;
    background: url(../assets/play_num.png) 0 0 no-repeat;
    position: relative;
    top: 3px;
    margin-right: 1px;
}
.play_num{
    margin-right: 15px;
}
.commend::before{
   display: inline-block;
    content:'';
    width: 16px;
    height: 16px;
    background: url(../assets/commend.png) 0 0 no-repeat;
    position: relative;
    top: 3px;
    margin-right: 2px; 
}
._info{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
._user{
    display: flex;
    align-items: center;
}
._user ._img{
    width: 27px;
    height: 27px;
    margin-right: 5px;
}
._img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.esli{
    font-size: 16pt;
    color: #979798;
}
</style>
