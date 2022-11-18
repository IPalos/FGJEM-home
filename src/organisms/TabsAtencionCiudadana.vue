<template>
	<div class="row justify-content-around">
		<b-tabs content-class="mt-3 mx-5">
			<b-tab title="Teléfonos de atención ciudadana" active>
				<seccion-telefono-atencion></seccion-telefono-atencion>
			</b-tab>
			<b-tab title="Módulos de Denuncia Express">
				<seccion-denuncia-express></seccion-denuncia-express>
			</b-tab>
			<b-tab title="Denuncia contra servidores públicos">
				<seccion-denuncia-servidores></seccion-denuncia-servidores>
			</b-tab>
			<b-tab title="Informes de gestión">
				<seccion-informes-gestion/>
			</b-tab>
		</b-tabs>
	</div>

</template>

<script>
import SeccionDenunciaExpress from './SeccionDenunciaExpress.vue'
import SeccionDenunciaServidores from './SeccionDenunciaServidores.vue'
import SeccionInformesGestion from './SeccionInformesGestion.vue'
import SeccionTelefonoAtencion from './SeccionTelefonoAtencion.vue'
export default {
  components: { SeccionTelefonoAtencion, SeccionDenunciaExpress, SeccionDenunciaServidores, SeccionInformesGestion },

}
</script>

<style>

</style>