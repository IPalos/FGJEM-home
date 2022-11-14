<template>
	<div class="row d-flex align-items-stretch">
		
		<!-- Atención Ciudadana -->
		<div class="col-md-4 mb-4">
			<b-card title="Atención Ciudadana" img-height="38px" img-width="30px" :img-src="require('@/assets/atencion.png')" img-alt="Image" img-top tag="article" class="h-100">
				<b-card-text>
					<ul>
						<li>Teléfonos de atención Ciudadana</li>
						<li>Módulos de Denuncia Express</li>
						<li>Denuncia contra servidores públicos</li>
						<li>Informes de Gestión</li>
					</ul>
				</b-card-text>
				<template #footer>
					<p>Ver mas ></p>
      </template>
			</b-card>
		</div>

		<!-- PreDenuncia en línea -->
		<div class="col-md-4 mb-4">
			<b-card title="Pre-denuncia en línea" img-height="38px" img-width="30px" :img-src="require('@/assets/acciones.png')" img-alt="Image" img-top tag="article" class="h-100">
				<b-card-text>
					Lorem Ipsum dolor sit amet, consectetuer adipsiscing elit.
				</b-card-text>
				<p slot="footer">Ver mas ></p>
			</b-card>
		</div>

		<!-- Tramites en línea -->
		<div class="col-md-4 mb-4">
			<b-card title="Tramites en línea" img-height="38px" img-width="30px" :img-src="require('@/assets/tramites.png')" img-alt="Image" img-top tag="article" class="h-100">
				<b-card-text>
					<ul>
						<li>Ventanilla Electrónica Única</li>
						<li>Vehículos</li>
						<li>Reporte de robo</li>
						<li>Listado de vehículos recuperados</li>
						<li>Constancia de extravío de objetos o documentos</li>
					</ul>
				</b-card-text>
				<p slot="footer">Ver mas ></p>
			</b-card>
		</div>

		<!-- Alerta de género -->
		<div class="col-md-4 mb-4">
			<b-card title="Alerta de Género" img-height="38px" img-width="30px" :img-src="require('@/assets/genero.png')" img-alt="Image" img-top tag="article" class="h-100">
				<b-card-text>
					<ul>
						<li>Alerta de género</li>
						<li>Odisea y Alerta Amber</li>
						<li>Estadísticas de feminicidio y homicidio doloso</li>
						<li>Prensa</li>
					</ul>
				</b-card-text>
				<p slot="footer">Ver mas ></p>
			</b-card>
		</div>

		<!-- Correo Institucional -->
		<div class="col-md-4 mb-4">
			<b-card title="Correo institucional FGJEM" img-height="38px" img-width="30px" :img-src="require('@/assets/correo.png')" img-alt="Image" img-top tag="article" class="h-100">
				<b-card-text>
					Lorem Ipsum dolor sit amet, consectetuer adipsiscing elit.
				</b-card-text>
				<p slot="footer">Ver mas ></p>
			</b-card>
		</div>

		<!-- Acciones FGJEM -->
		<div class="col-md-4 mb-4">
			<b-card title="Acciones FGJEM" img-height="38px" img-width="30px" :img-src="require('@/assets/acciones.png')" img-alt="Image" img-top tag="article" class="h-100">
				<b-card-text>
					<ul>
						<li>Bienes vinculados al Procedimiento Penal y la Extinción de Dominio</li>
						<li>Jornada de la criminalística</li>
					</ul>
				</b-card-text>
				<p slot="footer">Ver mas ></p>
			</b-card>
		</div>

	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-img-top{
	width: 38px;
	padding: 8px 0 0 8px;
}
#p{
	font-size: 9pt;
}

</style>