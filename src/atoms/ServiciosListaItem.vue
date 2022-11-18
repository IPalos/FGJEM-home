<template>
	<div class="row align-items-center my-4">
		<div class="col-md-2">
			<slot name="img">
				<img src="../assets/check.png" width="30px" height="30px" />
			</slot>
		</div>
		<div class="col-md-10">
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		text:String,
		img:String
	}
}
</script>

<style>

</style>