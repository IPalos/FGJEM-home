<template>
	<div>
		<div class="sticky-header">
			<nav-bar></nav-bar>
			<div class="banner row align-items-end">
				<h3 class="mb-4">Atención Ciudadana</h3>
			</div>
			<!-- <img src="@/assets/banner-1.jpg" width="100%"> -->
		</div>

		<div>
			<tabs-atencion-ciudadana></tabs-atencion-ciudadana>
		</div>

		<seccion-contacto></seccion-contacto>
		<grid-footer></grid-footer>



	</div>


</template>

<script>
import GridFooter from '../organisms/GridFooter.vue'
import NavBar from '../organisms/NavBar.vue'
import SeccionContacto from '../organisms/SeccionContacto.vue'
import TabsAtencionCiudadana from '../organisms/TabsAtencionCiudadana.vue'
export default {
	components: {  SeccionContacto, GridFooter, NavBar, TabsAtencionCiudadana },

}
</script>

<style scoped>
.sticky-header{
	position:sticky;
}

.banner{
	background-image: url("@/assets/banner-1.jpg");
	height: 180px;
}

h3{
	color: white;
}

</style>