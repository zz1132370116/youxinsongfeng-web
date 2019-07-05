//用于编写AJAX(更加利于路径的处理)
/* 所有ajax的代码写到这里 */
axios.defaults.baseURL='http://localhost:10010/v1'
// 设置AJAX超时时间
axios.defaults.timeout = 3000
// 设置提交数据时的格式
axios.defaults.headers['Content-Type'] = 'application/json'

// 设置前置拦截器->以后所有的AJAX都会自动添加上 Authorization:token 的协议头
axios.interceptors.request.use(function (config) {
    // 判断如果用户登录了就把 token 配置上 axios 的协议头中
    let token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = token
    }
    // 处理请求前代码
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
//登录
function login(params){
    return axios.post("/auth-service/login", params);
}
//用于编写ajax（更加利于路径管理）
//注册
function regist(params){
    return axios.post("/web-service/regist", params );
}

//注册--发送验证码
function sms(phone){
    return axios.post("/web-service/sms",{"phone":phone});
}

//地址
function getAddress(phone){
    return axios.post("/web-service/address",{"phone":phone});
}
//添加地址
function addAddress(params){
    return axios.post("/web-service/addaddress",params);
}
//添加地址
function updateaddress(params){
    return axios.post("/web-service/updateaddress",params);
}
//查询当前用户id
function getUser(phone){
    return axios.post("/web-service/getUser",{"phone":phone});
}
//删除通过id
function deleted(id){
    return axios.post("/web-service/deleted",{"id":id});
}
//首页商品展示
function getProduct(){
    return axios.get("/web-service/product");
}
//首页商家展示
function getShop(){
    return axios.get("/web-service/shop");
}
//通过id查询商品
function getProductByid(id){
    return axios.post("/web-service/getProductByid",{"productId":id});
}
//通过id查询商家
function findShopById(id){
    return axios.post("/web-service/findShopById",{"sid":id});
}
//加入购物车
function addToCart(params){
    return axios.post("/web-service/addToCart",params);
}

// //商品分类
// function getCategorys(){
//     return axios.get("/web-service/categorys");
// }

// //楼层
// function getFloors(){
//     return axios.get("/web-service/floors");
// }

// //搜索：商品列表
// function search(searchMap){
//     // return axios.get("/search-service/search",{
//     //     params : searchMap
//     // });
//     return axios.post("/search-service/search",searchMap);
// }
// //查询品牌
// function searchBrand(cat_id){
//     return axios.get("/web-service/brands/" + cat_id)
// }
// //查询规格
// function searchSpecification(cat_id){
//     return axios.get("/web-service/specifications/" + cat_id)
// }
// //搜索：条件
// function conditionSearch(searchMap){
//     return axios.get("/conditionSearch",{
//         params : searchMap
//     })
// }

// //商品详情
// function getGoodsInfo(skuId){
//     return axios.get("/web-service/goods/" + skuId);
// }

// //评论：分类id，每页显示个数，第几页
// function getComments(spuid , pageSize, page ){
//     return axios.get("/web-service/comments/"+spuid+"?limit="+
//         pageSize+"&page="+page+"&sort_by=id&sort_way=asc");
// }

// //查询购物车
// function getCart(){
//     return axios.get("/cart-service/cart");
// }

// //添加到购物车
// function addToCart(params){
//     return axios.post("/cart-service/cart", params );
// }

// //更新购物车
// function updateCart(params){
//     return axios.put("/cart-service/cart" ,params );
// }
// //删除购物车
// function deleteCart(skuid){
//     return axios.delete("/cart-service/cart/" + skuid);
// }

// //订单--地址列表
// function getAddress(){
//     return axios.get("/order-service/address");
// }

// //订单--地址添加
// function addNewAddress(params){
//     return axios.post("/order-service/address" , params );
// }

// //下订单
// function addOrder( params ){
//     return axios.post("/order-service/orders", params )
// }

// //微信支付
// function pay( params ){
//     return axios.post("/order-service/pay" ,params )
// }
// //查询订单状态
// function order_status(sn){
//     return axios.get("/order-service/order_status/" + sn)
// }