import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';

// Componentes
import HomeComponent from '../components/home/HomeComponent.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/home', component: HomeComponent},
    {path: '*', component: HomeComponent }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;