import { createStore } from 'vuex';

import productModule from './modules/Products/index.js'

const store = createStore({
    modules: {
       products: productModule
    }
})

export default store;