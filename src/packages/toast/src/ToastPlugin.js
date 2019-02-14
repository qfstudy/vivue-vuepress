import Toast from './toast.vue'
function createToast({Vue,propsData,closeCurrentToast}){
    let vueConstructor=Vue.extend(Toast)
    let toast=new vueConstructor({
        propsData
    })
    toast.$mount()
    toast.$on('close',closeCurrentToast)
    document.body.appendChild(toast.$el)
    return toast
}
let currentToast
export default {
   install(Vue,options){
       Vue.prototype.$toast=function(toastOptions){
           if(currentToast){
               currentToast.closeToast()
           }
           currentToast=createToast({
               Vue,
               propsData:toastOptions,
               closeCurrentToast:()=>{
                   currentToast=null
               },
           })
       }
   }
}