<template>
    <div class="accordion">
        <div v-for="(pais, index) in paises" :key="pais.name" class="mb-5">
            <div id="headingOne">
                <h2 class="mb-0">
                    <button type="button" class="btn btn-4 cloudy-knoxville-gradient w-50" v-b-toggle="'accordion-' + index">{{pais.name}}</button>
                    <img :src="pais.flag" class="float-right rounded-circle shadow border " :title="pais.name" width="65" height="65">
                </h2>
                <hr>
            </div>

            <b-collapse :id="'accordion-' + index" visible accordion="my-accordion" role="tabpanel">
                <b-card-body class="card-body">
                    <div class="row">
                        <div class="col">
                            <strong>Capital: </strong><span class="badge badge-pill badge-success"><i class="fas fa-city" aria-hidden="true"></i>  {{pais.capital}}</span>
                        </div>
                        <div class="col">
                            <strong>Poblacion: </strong><span class="badge badge-pill badge-primary"><i class="fas fa-users" aria-hidden="true"></i> {{pais.population | numeral('0,0')}}</span>
                        </div>
                        <div class="col">
                            <strong>Subregion: </strong><span class="badge badge-pill badge-warning"><i class="fas fa-map-marker-alt" aria-hidden="true"></i>  {{pais.subregion}}</span>
                        </div>
                    </div>
                </b-card-body>
            </b-collapse>
        </div>
    </div>        
</template>

<script>
// Peticiones Http
import axios from 'axios';
// EndPoint
import url from '../../api/endpoint';

export default {
    name: 'HomeComponent',
    mounted(){
        // Llamamos al metodo
        this.getPaises();
    },
    data(){
        return {
        api: url.endpoint,
        paises: [],
        index: 0
        }
    },
    methods: {
        // Metodo para obtener los ultimos articulos
        getPaises(){
        // Log de seguimiento
        console.log('HomeComponent.vue - Metodo getPaises');

        axios.get(this.api)
            .then( res => {
                if(res.data){
                this.paises = res.data;
                }
            });
        },
        doMath: function() {
            return this.index + 1;
        }        
    }    
}
</script>