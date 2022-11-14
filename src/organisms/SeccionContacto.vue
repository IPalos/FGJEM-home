<template>
	<div class="fullimg">
		<div class="row align-items-center justify-content-between">
			<div class="col-md-4 mx-auto">
				<InfoContacto></InfoContacto>
			</div>
			<div class="col-md-4 mx-auto form-contacto">
				<card-contacto></card-contacto>
			</div>
		</div>
	</div>
</template>

<script>
import InfoContacto from '@/molecules/InfoContacto.vue';
import CardContacto from '../molecules/CardContacto.vue';

export default {
	components: { InfoContacto,CardContacto }
}
</script>

<style scoped>
.fullimg {
	width: 100%;
	padding: 24px;
	background-image: url("../assets/img-llamanos.jpg");
}
.form-contacto{
	align-items: right;
}
</style>