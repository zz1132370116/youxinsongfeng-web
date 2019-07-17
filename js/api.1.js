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
    return axios.post("/web-service/query", params);
}
function findByphone(params){
    return axios.post("/web-service/findByphone",params);
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
//改密码--发送验证码
function sms2(phone){
    return axios.post("/web-service/sms2",{"phone":phone});
}

//改密码
function updatePassword(params){
    return axios.post("/web-service/updatePassword",params);
}
//查询分类
function findClassifications(){
    return axios.get("/web-service/findClassifications");
}

//查询商品
function searchCommoditys(commodity){
    return axios.post("/web-service/search",commodity);
}

//查询资源
function findAllResources(){
    return axios.get("/web-service/findAllResources");
}
//查询所有采购信息
function findAllPurchases(cur){

    return axios.get("/web-service/findAllPurchases/"+cur);
}
//查询采购信息详情
function findPurchasesByid(params){
    return axios.post("/web-service/findPurchasesByid",params);
}
//查询正在进行的采购信息
function findBystate(curr){
   
    return axios.get("/web-service/findBystate/"+curr);
}
//查询结束的采购信息
function findBystateEnd(endcur){
    return axios.get("/web-service/findBystateEnd/"+endcur);
}

//根据手机获取用户信息
function getUserByPhone(params){
    return axios.post("/web-service/getUserByPhone",params);
}

//修改用户基本信息
function changeUserInfo(params) {
    return axios.post("/web-service/changeUserInfo",params);
}

//上传头像
function uploadImage(params,config) {
    return axios.post("/web-service/uploadImage",params,config);
}

//发布资源单
function releasePurchase(params) {
    return axios.post("/web-service/releasePurchase",params);
}

//采购页面的右侧热门采购清单
function findSortPurchases() {
    return axios.get("/web-service/findSortPurchases");
}

//查询自已的报价单
function searchQuotation(params) {
    return axios.post("/web-service/searchQuotation",params);
}

//提交报价单
function saveQuotation(params) {
    return axios.post("/web-service/saveQuitation",params);
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