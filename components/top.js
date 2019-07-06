Vue.component("topnav",{
    template:
    `

   <div class="top-left" >
            <p>欢迎来到超鲜网</p>
            <a href="登陆.html" v-if="name ==null  ">请登录</a><a href="member-基本会员-基本信息.html" v-if="name !=null">{{name}}</a>
            <span>|</span>
            <a href="注册01.html" v-if="name ==null">免费注册</a><a href="" v-if="name !=null" @click.prevent="logout">退出</a>
        </div>
      
    `,
    data:function(){
        return{
            name:localStorage.getItem("username"),
            
        }
    },
    methods:{
        logout:function(){
            localStorage.removeItem("phone")
            localStorage.removeItem("username")
            location.href="index.html"
        }
    }
})