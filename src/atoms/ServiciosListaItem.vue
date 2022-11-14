<template>
	<div class="row align-items-center my-4">
		<div class="col-md-2">
			<img src="../assets/check.png" width="30px" height="30px" />
		</div>
		<div class="col-md-10">
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		text:String
	}
}
</script>

<style>

</style>