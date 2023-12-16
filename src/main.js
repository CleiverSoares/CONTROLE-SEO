import { createApp } from 'vue'
import App from './App.vue'
import '/src/assets/style/style-global.css'
import router from "../src/router/index"
/* main.css */import 'bulma/css/bulma.css';

createApp(App).use(router).mount('#app')
