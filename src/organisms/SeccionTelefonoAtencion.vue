<template>
	<div>
		<tab-header title="Teléfonos de atención ciudadana"></tab-header>
		<div class="row ">
			<div class="col-md-4">
				<p>La Fiscalía General de justicia del Estado de México pone a tu servicio estos números telefónicos para que
					pueda reportar incidentes, con la finalidad de conocer las inquietudes, solicitudes,m quejas, denuncias,
					sugerencias y reconocimientos que la población beneficiaria y la ciudadanía en general presentan</p>
			</div>
		</div>
		<div class="row justify-content-around mt-5">
			<div class="col-md-4 center">
				<h5>Teléfonos de emergencia</h5>
				<p><b>Teléfono de atención a Emergencias</b></p>
				<h5>911</h5>
				<p><b>Denuncia anónima vía telefónica</b></p>
				<h5>089</h5>
			</div>
			<div class="col-md-4 center">
				<h5>Teléfonos de Atención Ciudadana y Denuncia Expréss</h5>
				<h5>800 702 87 70</h5>
				<span>
					<h5>800 398 07 74 06</h5><small>(Excepto Toluca)</small>
				</span>
				<p><b>Coordinación general de Investigación y Análisis (FGJEM)</b></p>
				<h5>722 2 26 17 14</h5>
			</div>
		</div>
	</div>
</template>

<script>
import TabHeader from '../molecules/TabHeader.vue'
export default {
  components: { TabHeader },

}
</script>

<style>

h5 {
	font-size: 20pt;
	color:#21424F;
	font-weight: bold;
}
</style>