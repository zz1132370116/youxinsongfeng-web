Vue.component("classificationnav", {
    template:
        `
        <dt>
            <a class="pro-all" href="javascript:;">商品全部分类&nbsp;&nbsp;<i class="fa fa-sort-desc fa-caret-up"></i></a>
            <ul>
                <li class="pro-sort" v-for="classification1 in classifications">
                    <div class="sort-first">
                        <i class="fa fa-caret-right"></i>
                        <a class="tit" href="javascript:;">{{classification1.classificationName}}</a>
                        <div class="con">
                            <a href="#" v-for="classification2 in classification1.classification" >{{classification2.classificationName}}</a>
                        </div>
                    </div>
                    <div class="sort-second">
                        <div class="second-list" v-for="classification2 in classification1.classification" >
                            <a class="second-tit" href="#" @click="classificationFor(classification2.classificationName,2)">{{classification2.classificationName}}<i class="fa fa-angle-right"></i></a>
                            <div class="second-con">
    
                                <span v-if="classification2.classification != null">|</span>
                                <span  v-for="classification3 in classification2.classification">|
                                    <a href="#" @click="classificationFor(classification3.classificationName,3)">{{classification3.classificationName}}</a>
                                </span>
                            </div>
                        </div>
                        <a class="second-add" href="#"><img src="images/sort-add01.jpg" alt=""/></a>
                    </div>
                </li>
            </ul>
        </dt>
    `,

    data: function () {
        return {
            classifications: JSON.parse(localStorage.getItem("classifications"))
        }
    },
    methods: {
        //点击二级分类或三级分类跳转到商品分类页面，通过localStorage传递参数
        classificationFor: function (classificationNameSelect, classificationLevel) {
            localStorage.setItem("classifications",JSON.stringify(this.classifications));
            localStorage.setItem("classificationNameSelect",classificationNameSelect);
            localStorage.setItem("classificationLevel",classificationLevel);
            window.location.href = "商品分类.html";
        }
    }
})