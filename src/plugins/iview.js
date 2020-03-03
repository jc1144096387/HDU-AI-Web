import Vue from 'vue'
import ViewUI from 'view-design'

Vue.use(ViewUI)

import 'view-design/dist/styles/iview.css'


// 全局配置ViewUI组件的一些属性
Vue.use(ViewUI, {
    transfer: true,
    size: 'large',
    capture: false,
    select: {
        arrow: 'md-arrow-dropdown',
        arrowSize: 20
    }
});