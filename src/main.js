//Default imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//Font Awesome impots
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard, faEarth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

//Rendering icons
library.add(
    faHatWizard, 
    faEarth
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
