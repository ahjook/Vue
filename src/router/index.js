import Vue from 'vue'
import Router from 'vue-router'
import ModuleRoutes from 'router/module_routes'
const multer = require('multer');
//global.$ = global .jQuery
Vue.use(Router)
export default new Router({
    routes:ModuleRoutes.routes
})