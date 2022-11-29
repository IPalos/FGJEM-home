<template>
  <div>
    <NavBar></NavBar>
    <main-carrousel></main-carrousel>
    <div class="container-seccion">
      <div class="item-seccion" @click="goToScroll('comunicacion-social')">Comunicación social</div>
      <div class="item-seccion" @click="goToScroll('noticias')">Noticias</div>
      <div class="item-seccion" @click="goToScroll('acciones-fgjem')">Acciones FGJEM</div>
    </div>
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
  components: { NavBar, SeccionContacto, GridFooter, MainCarrousel, SeccionServicios, ComunicacionSocial, GridNoticias, GridAccionesFGJEM, SocialBanner },
  methods: {
    goToScroll(id) {
      const container = this.$el.querySelector(`#${id}`);
      container.scrollIntoView()
    },
  }

}
</script>

<style scoped>
.container-seccion {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.item-seccion {
  padding: 0px 50px;
  height: 50px;
  border: 1px;
  border-color: #ccc;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>