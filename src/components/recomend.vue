<template>
  <div>
      <div class="swip">
        <Swipe :autoplay="3000" indicator-color="white"  >
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
  height:270px; 
}
.bgg{
  width: 97%;
  height: 270px;
  background-color: blanchedalmond;
  border-radius: 8px;
  margin: 0 auto;
}
.menu{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
}
.menu_item{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.icon{
    width:100px;
    height: 100px;
    border-radius: 50%;
    background-color: #09B6F2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
}
.icon img{
    width: 50px;
    height: 50px;
}
.line{
    width: 100%;
    height: 2px;
    background-color: #E2E3E4;
    margin: 40px 0;
}
.content{
    width: 97%;
    margin: 0 auto;
}
.title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
}
.title span{
    font-size: inherit;
    margin-right: 10px;
}
.list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.list .l_item{
    width: 228px;
    margin-bottom: 20px;
}
.l_item .pic{
    width: 228px;
    height: 228px;
    background-color: #09B6F2;
    border-radius: 6px;
}
.l_item .tit{
    width: 208px;
    padding: 10px 10px;
    font-size: 20px;
    color: #323233;
}
.play_num,
.commend{
    color: #979798;
    font-size: 16px;
}
.play_num::before{
    display: inline-block;
    content:'';
    width: 36px;
    height: 36px;
    background: url(../assets/play_num.png) 0 0 no-repeat;
    background-size: 100%;
    position: relative;
    top: 11px;
    margin-right: 4px;
}
.play_num{
    margin-right: 15px;
}
.commend::before{
   display: inline-block;
    content:'';
    width: 36px;
    height: 36px;
    background: url(../assets/commend.png) 0 0 no-repeat;
    background-size: 100%;
    position: relative;
    top: 11px;
    margin-right: 5px; 
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
    width: 54px;
    height: 54px;
    margin-right: 10px;
}
._img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.esli{
    font-size: 32px;
    color: #979798;
}
</style>
