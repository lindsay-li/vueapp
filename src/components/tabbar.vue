<template>
<div class="wrapper">
    <Tabbar v-model="active" fixed :z-index='999'>
        <Tabbar-item>
            <span>发现</span>
            <img
            slot='icon'
            slot-scope='props' 
            :src="props.active?icon.active:icon.normal" />
        </Tabbar-item>
        <Tabbar-item>
            <span>我的</span>
            <img
            slot='icon'
            slot-scope='props' 
            :src="props.active?icon.a_cloge:icon.cloge" />
        </Tabbar-item>
        <Tabbar-item>
            <span>账号</span>
            <img
            slot='icon'
            slot-scope='props' 
            :src="props.active?icon.user:icon.n_user" />
        </Tabbar-item>
    </Tabbar>
</div>   
</template>
<script>
import { Tabbar, TabbarItem,Icon } from 'vant';
export default {
    data(){
        return{
            active:0,
            icon:{
                normal:require('../assets/find.png'),
                active:require('../assets/active.png'),
                cloge:require('../assets/colleg.png'),
                a_cloge:require('../assets/colloge.png'),
                user:require('../assets/user.png'),
                n_user:require('../assets/n_user.png'),
            }
        }
    },
    components:{
        Tabbar, 
        TabbarItem ,
        Icon
    }
}
</script>
<style scoped>

</style>
