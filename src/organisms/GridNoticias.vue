<template>
	<div class="row d-flex align-items-stretch">
		<div class="container my-4">
			<h4>NOTICIAS</h4>
		</div>
		<!-- Noticia 1 -->
		<div class="col-md-4 mb-4">
			<b-card title="Lorem Ipsum dolor sit amet, consectetuer adipsicisig elit." :img-src="require('@/assets/noticia-1.png')"
				img-alt="Image" img-top tag="article" class="h-100">
				<b-card-text>
					Lorem Ipsum dolor sit amet, consectetuer adipsiscing elit.
				</b-card-text>
				<template #footer>
					<p>Ver mas ></p>
				</template>
			</b-card>
		</div>

		<!-- Noticia 2 -->
		<div class="col-md-4 mb-4">
			<b-card title="Lorem Ipsum dolor sit amet, consectetuer adipsicisig elit." :img-src="require('@/assets/noticia-2.png')"
				img-alt="Image" img-top tag="article" class="h-100">
				<b-card-text>
					Lorem Ipsum dolor sit amet, consectetuer adipsiscing elit.
				</b-card-text>
				<template #footer>
					<p>Ver mas ></p>
				</template>
			</b-card>
		</div>

		<!-- Noticia 3 -->
		<div class="col-md-4 mb-4">
			<b-card title="Lorem Ipsum dolor sit amet, consectetuer adipsicisig elit." :img-src="require('@/assets/noticia-3.png')"
				img-alt="Image" img-top tag="article" class="h-100">
				<b-card-text>
					Lorem Ipsum dolor sit amet, consectetuer adipsiscing elit.
				</b-card-text>
				<template #footer>
					<p>Ver mas ></p>
				</template>
			</b-card>
		</div>

	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>