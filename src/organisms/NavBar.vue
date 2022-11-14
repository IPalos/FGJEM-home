<template>
	<div>
		<!-- NavBar Principal -->
		<b-navbar toggleable="lg" variant="Light">
			<b-navbar-brand href="#">
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
					<b-nav-item-dropdown text="Fiscalía">
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Atención Ciudadana">
					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Acciones Fiscalía">
					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Buzón Virtual">
					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Pre Denuncia en Línea">
					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Prensa">
					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Transparencia">
					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Tramites en línea">
					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Alerta de género">
					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Alerta de género">
					</b-nav-item-dropdown>

					<!-- FISCALÍA -->
					<b-nav-item-dropdown text="Centro de atención Integral">
					</b-nav-item-dropdown>


					<b-nav-item-dropdown right>
						<!-- Using 'button-content' slot -->
						<template #button-content>
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
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