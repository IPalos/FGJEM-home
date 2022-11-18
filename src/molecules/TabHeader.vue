<template>
	<div>
		<h2>{{ title }}</h2>
		<hr>
	</div>

</template>

<script>
export default {
	props: {
		title: String
	}

}
</script>

<style scoped>
hr {
	height: 4px;
	border-width: 0;
	color: #2e393d;
	background-color: #2e393d
}

h2 {
	font-size: 30pt;
	color: #21424F;
	font-weight: bold;
}
</style>