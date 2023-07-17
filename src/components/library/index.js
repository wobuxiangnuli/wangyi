import AppBanner from './AppBanner.vue'
import AppMore from './AppMore.vue'

export default{
    install(app){
        app.component(AppBanner.name,AppBanner)
        app.component(AppMore.name,AppMore)
    }
}