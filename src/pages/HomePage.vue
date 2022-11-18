<template>
  <div>
    <NavBar></NavBar>
    <main-carrousel></main-carrousel>
    <placeholder-component height="height:100px" description="Redes sociales">
      <button>Twitter</button>
      <button>Facebook</button>
    </placeholder-component>
    <seccion-servicios></seccion-servicios>
    <comunicacion-social></comunicacion-social>
    <div class="px-4">
      <grid-noticias></grid-noticias>
      <GridAccionesFGJEM></GridAccionesFGJEM>
    </div>
    <seccion-contacto></seccion-contacto>
    <grid-footer></grid-footer>

  </div>
</template>

<script>
import NavBar from '@/organisms/NavBar.vue';
import SeccionContacto from '../organisms/SeccionContacto.vue';
import GridFooter from '../organisms/GridFooter.vue';
import MainCarrousel from '../organisms/MainCarrousel.vue';
import SeccionServicios from '../organisms/SeccionServicios.vue';
import ComunicacionSocial from '../organisms/ComunicacionSocial.vue';
import GridNoticias from '../organisms/GridNoticias.vue';
import GridAccionesFGJEM from '../organisms/GridAccionesFGJEM.vue';
import PlaceholderComponent from '../organisms/PlaceholderComponent.vue';
export default {
  components: { NavBar, SeccionContacto, GridFooter, MainCarrousel, SeccionServicios, ComunicacionSocial, GridNoticias, GridAccionesFGJEM, PlaceholderComponent, },

}
</script>

<style>

</style>