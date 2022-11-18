<template>
  <div>
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
      img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd" label-next="Siguiente" label-prev="Anterior">

      <!-- HOMEPAGE -->
      <b-carousel-slide>
        <template #img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/slider_0.jpg" alt="image slot">
        </template>
      </b-carousel-slide>

      <!-- MUJERES -->
      <b-carousel-slide>
        <template #img>
          <a href="https://sesespem.edomex.gob.mx/catalogo-servicios-gubernamentales">
            <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/slider-2.jpg"
              alt="image slot">
          </a>
        </template>
      </b-carousel-slide>

      <!-- PAIMEF -->
      <b-carousel-slide>
        <template #img>
          <a href="https://paimef_semujeres.edomex.gob.mx/">
            <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/slider-3.jpg"
              alt="image slot">
          </a>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>