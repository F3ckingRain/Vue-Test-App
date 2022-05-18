import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import directives from './directives/index'
import compotents from '@/components/UI/index'

const app = createApp(App)

compotents.forEach(compotent => {
    app.component(compotent.name, compotent)
})
directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.use(router).mount('#app')