<template>
	<div>
		<tab-header title="Módulos de Denuncia Express"></tab-header>
		<div class="row justify-content-between">
			<div class="col-md-4">
				<p>En el Estado de México se implementa una nueva forma de atención para recibir denuncias, se trata de los
					Módulos de Denuncia Exprés a cargo de la Fiscalía General de Justicia del Estado de México. Esta medida
					permite reducir el tiempo en el que un ciudadano presenta una denuncia, logrando en que en un promedio de 30
					minutos, el denunciante realice su trámite.</p>
				<p>Cada Módulo de Denuncia Exprés, es atendido por personal debidamente capacitado que asesora y revisa el
					trámite, haciendo uso de tecnologias de la información y herramientas que permiten ahorrar tiempo, recursos y
					ofrecer un servicio de calidad.</p>
				<p>Con este nuevo modelo de atención ciudadana, la Fiscalía General de Justicia del Estado de México, se
					compromete a mejorar el servicio que ofrece en beneficio de los ciudadanos,</p>
			</div>
			<div class="col-md-4">
				<b-card title="Descarga el Directorio de Módulos Exprés" :img-src="require('@/assets/img-21.jpg')" img-alt="Image" img-top
					tag="article" style="max-width: 20rem;" class="mb-2 center">
					<b-card-text>
						5.2 MB, 64 pags.
					</b-card-text>

					<img src="@/assets/download_icon.png">
				</b-card>
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

</style>