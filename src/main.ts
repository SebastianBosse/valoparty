import './assets/main.css'
import './assets/variables.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

watch(createPinia().state, (state) => {
  console.log(state);
},
{
  deep: true
}
)

app.mount('#app')
