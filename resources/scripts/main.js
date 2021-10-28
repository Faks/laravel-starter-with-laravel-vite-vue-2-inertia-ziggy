import Vue from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue'

Vue.config.productionTip = true;

Vue.mixin({
    methods: {
        route: window.route
    }
});

const pages = import.meta.glob('../views/pages/**/*.vue');

const inertiaApp = createInertiaApp({
    resolve: name => {
        const importPage = pages[`../views/pages/${name}.vue`];

        if (!importPage) {
            throw new Error(`Unknown page ${name}. Is it located under Pages with a .vue extension?`);
        }

        return importPage().then(module => module.default)
    },
    setup({el, App, props}) {
        new Vue({
            render: h => h(App, props),
        }).$mount(el)
    },
});
