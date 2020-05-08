import Vue from 'vue'
import Prism from 'vue-prism-component'
import VuePrismEditor from 'vue-prism-editor'

import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

import 'prismjs/components/prism-scss.min'

import 'prismjs/plugins/autolinker/prism-autolinker.min'
import 'prismjs/plugins/autolinker/prism-autolinker.css'

import 'vue-prism-editor/dist/VuePrismEditor.css' // import the styles

Vue.component('prism', Prism)
Vue.component('prism-editor', VuePrismEditor)
