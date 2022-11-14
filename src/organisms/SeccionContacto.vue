<template>
	<div class="fullimg">
		<div class="row">
			<div class="col-md-5 mx-auto">
				<InfoContacto></InfoContacto>
			</div>
			<div class="col-md-7">
				<FormularioContacto></FormularioContacto>
			</div>
		</div>
	</div>
</template>

<script>
import InfoContacto from '@/molecules/InfoContacto.vue';
import FormularioContacto from '@/molecules/FormularioContacto.vue';

export default {
	components: { InfoContacto, FormularioContacto }
}
</script>

<style scoped>
.fullimg {
	margin: 0;
	background-image: url("../assets/img-llamanos.jpg");
}
</style>