<template>
	<div>
		<!-- NavBar Principal -->
		<b-navbar toggleable="lg" variant="Light">
			<b-navbar-brand href="/">
				<img src="../assets/logo-fgj.png" width="90" height="90" alt="" />
				Fiscalía General de Justicia del Estado de México
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="navbar-right">
					<span>
						<b-nav-form>
							<b-form-input size="sm" class="mr-sm-2" placeholder="Buscar..."></b-form-input>
							<b-button size="sm" class="my-2 my-sm-0" type="Buscar">Search</b-button>
						</b-nav-form>
					</span>


				</b-navbar-nav>
			</b-collapse>
		</b-navbar>

		<!-- NavBar Secundario -->
		<b-navbar toggleable="lg" type="dark" variant="secondary">

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav>
					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="FGJEM">
						<b-dropdown-item href="/construccion">Titular</b-dropdown-item>
						<b-dropdown-item href="#">Misión, visión y objetivo</b-dropdown-item>
						<b-dropdown-item href="#">Código de ética</b-dropdown-item>
						<b-dropdown-item href="#">Transparencia</b-dropdown-item>
						<b-dropdown-item href="#">Aviso de Privacidad</b-dropdown-item>
						<b-dropdown-item href="#">Organigrama</b-dropdown-item>
						<b-dropdown-item href="#">Funciones</b-dropdown-item>
						<b-dropdown-item href="#">Derechos humanos</b-dropdown-item>
						<b-dropdown-item href="#">Marco jurídico</b-dropdown-item>
						<b-dropdown-item href="#">Certificación FGJEM</b-dropdown-item>
						<b-dropdown-item href="#">Historia de la FGJEM</b-dropdown-item>

					</b-nav-item-dropdown>

					<!-- CONTACTO -->
					<b-nav-item-dropdown text="Contáctanos">
						<b-dropdown-item href="#">Contáctanos</b-dropdown-item>
						<b-dropdown-item href="#">Formato de contacto</b-dropdown-item>
						<b-dropdown-item href="#">Buzón Virtual</b-dropdown-item>
						<b-dropdown-item href="#">Ubicación</b-dropdown-item>
						<b-dropdown-item href="#">Predenuncia en línea</b-dropdown-item>
						<b-dropdown-item href="#">Alerta de Genero / Predenuncia</b-dropdown-item>
						<b-dropdown-item href="#">Teléfonos de atención ciudadana</b-dropdown-item>
						<b-dropdown-item href="#">Módulos de denuncia express</b-dropdown-item>
						<b-dropdown-item href="#">Denuncia contra servidores públicos</b-dropdown-item>
						<b-dropdown-item href="#">Reporte de Robo de Vehiculo</b-dropdown-item>
						<b-dropdown-item href="#">Odisea y Alerta Amber</b-dropdown-item>
						<b-dropdown-item href="#">Desaparición de personas</b-dropdown-item>

					</b-nav-item-dropdown>

					<!-- ORIENTACION CIUDADANA -->
					<b-nav-item-dropdown text="Orientacion Ciudadana">
						<b-dropdown-item href="#">Teléfonos de atención ciudadana</b-dropdown-item>
						<b-dropdown-item href="#">Eventos y convocatorias</b-dropdown-item>
						<b-dropdown-item href="#">Vehiculos / como evitar el robo de tu auto </b-dropdown-item>
						<b-dropdown-item href="#">Alerta de Genero / evitalo</b-dropdown-item>
						<b-dropdown-item href="#">Centro de Atención Covid-19</b-dropdown-item>
						<b-dropdown-item href="#">Plan Seguro</b-dropdown-item>
						<b-dropdown-item href="#">Servicios Funerarios</b-dropdown-item>
						<b-dropdown-item href="#">Odisea y Alerta Amber</b-dropdown-item>
						<b-dropdown-item href="#">Bienes sujetos a extinción de dominio</b-dropdown-item>
						<b-dropdown-item href="#">Convenio con TOJIL</b-dropdown-item>

					</b-nav-item-dropdown>

					<!-- MEDIOS -->
					<b-nav-item-dropdown text="Medios ">
						<b-dropdown-item href="#">Contáctanos</b-dropdown-item>
						<b-dropdown-item href="#">Contáctanos</b-dropdown-item>

					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Acciones FGJEM">
						<b-dropdown-item href="#">Contáctanos</b-dropdown-item>
						<b-dropdown-item href="#">Contáctanos</b-dropdown-item>
						<b-dropdown-item href="#">Contáctanos</b-dropdown-item>
						<b-dropdown-item href="#">Contáctanos</b-dropdown-item>
						<b-dropdown-item href="#">Contáctanos</b-dropdown-item>
						<b-dropdown-item href="#">Contáctanos</b-dropdown-item>
						<b-dropdown-item href="#">Contáctanos</b-dropdown-item>

					</b-nav-item-dropdown>


				</b-navbar-nav>
			</b-collapse>
		</b-navbar>

	</div>
</template>

<script>
export default {

}
</script>

<style>
.navbar-right {
	margin-left: auto;
}
</style>