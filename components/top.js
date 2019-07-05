Vue.component("topnav",{
    template:
    `
    <div class="Topnav">
    <div class="LeftNav">
     <a href="register.html"  v-if="name ==null">注册</a>{{name}}/<a href="login.html"  target="_blank"  v-if="name ==null">登录</a> <a href=""  target="_blank" v-if="name !=null" @click.prevent="logout">退出</a><a href="#">QQ客服</a><a href="#">微信客服</a><a href="#">手机客户端</a>
    </div>
    <div class="RightNav">
     <a href="user_center.html">用户中心</a> <a href="user_orderlist.html" target="_blank" title="我的订单"  v-if="name!=null">我的订单</a> <a href="cart.html">购物车（）</a> <a href="user_favorites.html" target="_blank" title="我的收藏">我的收藏</a> <a href="#">商家入驻</a>
    </div>
   </div>

   <div class="top-left">
            <p>欢迎来到超鲜网</p>
            <a href="登陆.html" v-if="name ==null">请登录</a>
            <span>|</span>
            <a href="注册01.html" v-if="name ==null>免费注册</a>{{name}}
        </div>

    `,
    data:function(){
        return{
            name:localStorage.getItem("name"),
            
        }
    },
    methods:{
        logout:function(){
            localStorage.removeItem("token")
            localStorage.removeItem("name")
            location.href="index.html"
        }
    }
})