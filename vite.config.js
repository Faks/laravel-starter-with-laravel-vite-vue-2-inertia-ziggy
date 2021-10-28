import {defineConfig} from "laravel-vite";
import {createVuePlugin as vue} from 'vite-plugin-vue2'

export default defineConfig()
    .withPlugin(vue());
