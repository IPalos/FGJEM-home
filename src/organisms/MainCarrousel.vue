<template>
  <Splide :options="options">
    <SplideSlide>
      <img src="image1.jpg">
    </SplideSlide>
    <SplideSlide>
      <img src="image2.jpg">
    </SplideSlide>
    <SplideSlide>
      <img src="image3.jpg">
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

  export default { 
		name:"MainCarroussel",
		components:{
			Splide,
			SplideSlide
		},
    data() {
      return {
        options: {
          rewind : true,
          width  : 800,
          gap    : '1rem',
        },
      };
    },
  }
</script>