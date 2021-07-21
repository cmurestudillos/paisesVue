<template>
  <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
    <div class="card-body">
        <h5 class="card-title">{{pais.name}}</h5>
        <p class="text-center">
            <img :src="pais.flag" :alt="`Bandera-${pais.name}`" :title="`Bandera-${pais.name}`" class="img-thumbnail rounded mx-auto d-block">
        </p>
        <div class="card-text">
            <div class="row mb-4">
                <div class="col-sm-6">
                    <small><u>Pais:</u></small> <span class="badge rounded-pill bg-success text-white">{{pais.nativeName}}</span>
                </div>
                <div class="col-sm-6">
                    <small><u>Capital:</u></small> <span class="badge rounded-pill bg-success text-white">{{pais.capital}}</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <small><u>Poblacion:</u></small> <span class="badge rounded-pill bg-success text-white">{{numeroFormato(pais.population)}}</span>
                </div>
                <div class="col">
                    <small><u>Continente:</u></small> <span class="badge rounded-pill bg-success text-white">{{pais.region}}</span>     
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['pais'],
    setup(){
        const numeroFormato = (num) => {
            return new Intl.NumberFormat("de-DE").format(num)
        }

        return {numeroFormato}
    }

}
</script>