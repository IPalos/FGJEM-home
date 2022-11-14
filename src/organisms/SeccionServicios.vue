<template>
	<div class="container my-4">
		<h4>SERVICIOS</h4>
		<p><b>Trámites y servicios ofrecidos por la Fiscalía General de Justicia del Estado de México</b></p>
		<div class="row my-4 mt-5">
			<div class="col-md-4">
				<lista-accesos-directos></lista-accesos-directos>
			</div>
			<div class="col-md-8">
				<grid-acciones></grid-acciones>
			</div>
		</div>
	</div>
</template>

<script>
import GridAcciones from '../molecules/GridAcciones.vue'
import ListaAccesosDirectos from '../molecules/ListaAccesosDirectos.vue'
export default {
  components: { ListaAccesosDirectos, GridAcciones },

}
</script>

<style>

</style>