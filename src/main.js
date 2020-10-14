import Vue from 'vue';
import App from './App.vue';
import Styles from './App.css';
// Rutas
import router from './routes/index';
// Bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Filtros numericos
import vueNumeralFilterInstaller from 'vue-numeral-filter';

// ---------------------------------------------------------------//
// Configuracion para test/produccion                             //
// ---------------------------------------------------------------//
Vue.config.productionTip = false
// ---------------------------------------------------------------//
// BootstrapVue                                                   //
// ---------------------------------------------------------------//
Vue.use(BootstrapVue);
// ---------------------------------------------------------------//
// Filtros para numeros                                           //
// ---------------------------------------------------------------//
Vue.use(vueNumeralFilterInstaller, { locale: 'es-es' });

new Vue({
  router,
  render: h => h(App, Styles),
}).$mount('#app')
