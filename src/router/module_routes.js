 import AUTH from '../services/auth'
let beforeEnter = (to ,from ,next) => {

//  AUTH.currentPath = to.path
//  let beforeEnter = (to, from, next) => {
    AUTH.currentPath = to.path
    if (to.meta.tokenRequired == true) {
        // let token = sessionStorage.getItem("Username")
        // if (token != null) {
        if ( AUTH.user != null){
            next()
        } else {
            next({ path: '/login' })
        }
    } 
    next()
    
}
//  let userID = parseInt(localStorage.getItem('accout_id'))
// let token = localStorage.getItem('usertoken')
// if(token !== null && userID > 0){
// if(to.path === '/' || to.path === '/'){
// next({path: '/templates'})// }else
//  if(to.meta.tokenRequired === true){
//      if(AUTH.user !=null){
//         next()
//      }else{
//         next({path:'/login'})
//    }
// }

// next()
// let userID = parseInt(localStorage.getItem('account_id'))
// let token  = localStorage.getItem('usertoken')
// // if(token !== null && )
//console.log();
// next()

// }

var devRoutes = [] ;
let app = require('router/app.js')
devRoutes = devRoutes.concat(app.default.routes)
for(let x =0 ; x < devRoutes.length; x++){
    devRoutes[x]['beforeEnter'] =  beforeEnter
}
//default route
let routes = [
{
    path:'/',
    name:'home',
    components:resolve => require (['modules/basic/Login.vue'] ,resolve),
    beforeEnter:beforeEnter
}]
//export
routes = routes.concat(devRoutes)
export default{
    routes:routes
}