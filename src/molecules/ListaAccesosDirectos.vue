<template>
	<div class="container h-100">
		<h5 class="mb-5">Accesos Directos</h5>
		<ServiciosListaItem text="Módulos de denuncia express">
			<img slot="img" src="../assets/ad-denuncia-express.png" width="60px" height="60px" />
		</ServiciosListaItem>
		<ServiciosListaItem text="Los más buscados">
			<img slot="img" src="../assets/ad-mas-buscado.png" width="60px" height="60px" />
		</ServiciosListaItem>
		<ServiciosListaItem text="Comunicados">
			<img slot="img" src="../assets/ad-comuicados.png" width="60px" height="60px" />
		</ServiciosListaItem>
		<ServiciosListaItem text="Vehiculos">
			<img slot="img" src="../assets/ad-vehiculos.png" width="60px" height="60px" />
		</ServiciosListaItem>
		<ServiciosListaItem text="Reporte de robo">
			<img slot="img" src="../assets/ad-reporte-robo.png" width="60px" height="60px" />
		</ServiciosListaItem>
		<ServiciosListaItem text="Constancia de extravío de objetos o documentos">
			<img slot="img" src="../assets/ad-constancia-extravio.png" width="60px" height="60px" />
		</ServiciosListaItem>
		<ServiciosListaItem text="Listado de vehículos recuperados">
			<img slot="img" src="../assets/ad-listado-vehiculo.png" width="60px" height="60px" />
		</ServiciosListaItem>

	</div>
</template>

<script>
import ServiciosListaItem from '@/atoms/ServiciosListaItem.vue';

export default {
	components: { ServiciosListaItem }
}
</script>
