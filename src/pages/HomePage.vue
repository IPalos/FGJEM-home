<template>
  <div>
    <NavBar></NavBar>
    <main-carrousel></main-carrousel>
    <seccion-servicios></seccion-servicios>
    <placeholder-component title="Comunicación Social" height="height:150px" description="Componente que muestra links a páginas de interes - MAGUILA"/>
    <placeholder-component title="Noticias" height="height:175px" description="Componente que muestra entradas del blog - MAGUILA"/>
    <placeholder-component title="Acciones FGJEM" height="height:150px" description="Links a más páginas de interés - MAGUILA"/>
    <seccion-contacto></seccion-contacto>
    <grid-footer></grid-footer>

  </div>
</template>

<script>
import NavBar from '@/organisms/NavBar.vue';
import PlaceholderComponent from '../organisms/PlaceholderComponent.vue'
import SeccionContacto from '../organisms/SeccionContacto.vue';
import GridFooter from '../organisms/GridFooter.vue';
import MainCarrousel from '../organisms/MainCarrousel.vue';
import SeccionServicios from '../organisms/SeccionServicios.vue';
export default {
  components: { PlaceholderComponent, NavBar, SeccionContacto, GridFooter, MainCarrousel, SeccionServicios },

}
</script>

<style>

</style>