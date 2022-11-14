<template>
  <div>
    <NavBar></NavBar>
    <main-carrousel></main-carrousel>
    <placeholder-component title="Servicios" height="height:350px" description="Tramites y servicios ofrecidos por la fiscalia - MAGUILA"/>
    <placeholder-component title="Comunicación Social" height="height:150px" description="Componente que muestra links a páginas de interes - MAGUILA"/>
    <placeholder-component title="Noticias" height="height:175px" description="Componente que muestra entradas del blog - MAGUILA"/>
    <placeholder-component title="Acciones FGJEM" height="height:150px" description="Links a más páginas de interés - MAGUILA"/>
    <seccion-contacto></seccion-contacto>
    <!-- <placeholder-component title="Contacto" height="height:350px" description="Componente que muestra info de contacto - IGNACIO"/> -->
    <grid-footer></grid-footer>
    <!-- <placeholder-component title="Footer" height="height:200px" description="Footer - IGNACIO"/> -->

  </div>
</template>

<script>
import NavBar from '@/organisms/NavBar.vue';
import PlaceholderComponent from '../organisms/PlaceholderComponent.vue'
import SeccionContacto from '../organisms/SeccionContacto.vue';
import GridFooter from '../organisms/GridFooter.vue';
import MainCarrousel from '../organisms/MainCarrousel.vue';
export default {
  components: { PlaceholderComponent, NavBar, SeccionContacto, GridFooter, MainCarrousel },

}
</script>

<style>

</style>