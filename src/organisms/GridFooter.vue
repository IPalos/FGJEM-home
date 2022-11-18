<template>
	<div class="row footer align-items-center">
		<!-- COL 1 -->
		<div class="col-md-3">
			<div class="center mb-4">
				<img src="../assets/logo-fgj.png" width="90" height="90" alt="" />
			</div>
			<p><b>Privacidad</b></p>
			<ul>
				<li>
					<a href="/aviso-privacidad">
						<small>Aviso de Privacidad</small>
					</a>
				</li>
				<li>
					<small>Términos y condciones</small>
				</li>
				<li>
					<small>Todos los derechos reservados</small>
				</li>
			</ul>
		</div>
		<!-- COl 2 -->
		<div class="col-md-3">
			<p><b>Enlaces de interés</b></p>
			<ul>
				<li>SESNSP</li>
				<li>SSEM</li>
				<li>CODHEM</li>
				<li>TSJEM</li>
				<li>PF</li>
				<li>FGR</li>
				<li>CNDH</li>
			</ul>
		</div>
		<!-- COL 3 -->
		<div class="col-md-3">
			<p><b>Contacto</b></p>
			<servicios-lista-item text="(722) 226 16 00">
				<img src="@/assets/phone.png" slot="img">
			</servicios-lista-item>
			<servicios-lista-item text="gempgl@edomex.gob.mx">
				<img src="@/assets/mail.png" slot="img">
			</servicios-lista-item>
			<servicios-lista-item text="José María Morelos oriente 1300. Colonia San Sebastían">
				<img src="@/assets/pin.png" slot="img">
			</servicios-lista-item>

			<div class="row">
				<div class="col-md-3">Síguenos</div>
				<div class="col-md-2">
					<b-icon icon="twitter" aria-hidden="true"></b-icon>
				</div>
				<div class="col-md-2">
					<b-icon icon="instagram" aria-hidden="true"></b-icon>
				</div>
				<div class="col-md-2">
					<b-icon icon="facebook" aria-hidden="true"></b-icon>
				</div>
			</div>
		</div>
		<!-- COL 4 -->
		<div class="col-md-3">
			<p><b>Teléfonos de atención ciudadana y Denuncia Exprés</b></p>
			<ul>
				<li>800 702 87 70</li>
				<li>800 398 07 74 06 (Excepto Toluca)</li>
				<li>722 2 26 17 14 Coordinación General de investigación y Análisis (FGJEM)</li>
			</ul>
			<p><b>Teléfonos de emergencia</b></p>
			<ul>
				<li>911 Teléfono de Atención a Emergencias.</li>
				<li>089 Denuncia Anónima via Telefónica</li>
			</ul>
		</div>

	</div>
</template>

<script>
import ServiciosListaItem from '../atoms/ServiciosListaItem.vue'
export default {
	components: { ServiciosListaItem },

}
</script>

<style
ServiciosListaItem scoped>
.footer {
	padding: 16px;
	color: white;
	background-color: #55615D;
}

a {
	color: white;
	text-decoration: none;
}
</style>