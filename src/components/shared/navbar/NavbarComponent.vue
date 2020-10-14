<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light" class="navbar navbar-expand-lg navbar-dark bg-custom mb-2">
                <router-link :to="'/home'">
                    <img src="../../../assets/img/logo.png" width="30" height="30" title="Paises" alt="Paises">
                </router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/home" class="active">Paises</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { BNavbar, BNavbarNav, BNavbarToggle  } from 'bootstrap-vue';

export default {
    name: 'NavbarComponent',
    components: {
      BNavbar,
      BNavbarNav,
      BNavbarToggle
    }        
}
</script>