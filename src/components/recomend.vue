<template>
  <div>
      <div class="swip">
        <Swipe :autoplay="3000" indicator-color="white" :width="375" :height="140">
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
                 desc="70w"  
                 title="亡灵序曲大集合，燃爆荷尔蒙大大大所大所多所"
                 :thumb="imageURL"
                >
                <div slot="footer">
                    <van-button size="mini">按钮</van-button>
                    <van-button size="mini">按钮</van-button>
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
  height:140px; 
  margin-top: 8px;
}
.bgg{
  width: 96%;
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
    width: 96%;
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
    width: 117px;
    margin-bottom: 10px;
}
.pic{
    width: 100%;
    height: 120px;
    background-color: #09B6F2;
    border-radius: 6px;
}
.tit{
    width: 107px;
    padding: 5px 5px;
    font-size: 10pt;
    color: #323233;
}
</style>
