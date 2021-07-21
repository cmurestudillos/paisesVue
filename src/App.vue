<template>
  <Navbar />
  <div class="container px-4 px-lg-5">
    <Buscador />
    <CardList />
  </div>
  <Footer />
</template>

<script>
// Componentes
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import Buscador from './components/Buscador';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    CardList,
    Buscador,
    Footer
  }
}
</script>
