// import { resolve } from "q";
// import { LayoutPlugin } from "bootstrap-vue";

export default {
    routes:[{
        path:'/login',
        name:'login',
        components:resolve => require(['modules/basic/Login.vue'], resolve),
        meta: {
            tokenRequired :false
        }
    },
{
    path:'/login',
    name:'login',
    components:resolve => require(['modules/basic/Login.vue'], resolve),
    meta: {
    tokenRequired :false
}
}
    ]
}


