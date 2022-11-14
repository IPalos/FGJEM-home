<template>
  <div>
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
      img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd" label-next="Siguiente" label-prev="Anterior">
      <b-carousel-slide caption="Fiscalía General de Justicia del Estado de México">
        <template #img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/img-hero.jpg" alt="image slot">
        </template>
      </b-carousel-slide>
      <b-carousel-slide caption="Fiscalía General de Justicia del Estado de México">
        <template #img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/img-hero.jpg" alt="image slot">
        </template>
      </b-carousel-slide>
      <b-carousel-slide caption="Fiscalía General de Justicia del Estado de México">
        <template #img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/img-hero.jpg" alt="image slot">
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