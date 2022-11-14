<template>
	<div class="container h-100">
		<h5 class="mb-5">Accesos Directos</h5>
		<ServiciosListaItem text="Módulos de denuncia express"></ServiciosListaItem>
		<ServiciosListaItem text="Ventanilla única"></ServiciosListaItem>
		<ServiciosListaItem text="Reporte de robo"></ServiciosListaItem>
		<ServiciosListaItem text="Buzón virtual"></ServiciosListaItem>
		<ServiciosListaItem text="Transparencia"></ServiciosListaItem>
	</div>
</template>

<script>
import ServiciosListaItem from '@/atoms/ServiciosListaItem.vue';

export default {
    components: { ServiciosListaItem }
}
</script>
