<template>
  <div>
    <NavBar></NavBar>
    <main-carrousel></main-carrousel>
    <social-banner/>
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
import SocialBanner from '../molecules/SocialBanner.vue';
export default {
  components: { NavBar, SeccionContacto, GridFooter, MainCarrousel, SeccionServicios, ComunicacionSocial, GridNoticias, GridAccionesFGJEM, SocialBanner, },

}
</script>

<style>

</style>