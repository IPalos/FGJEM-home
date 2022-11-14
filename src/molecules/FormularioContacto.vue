<template>
	<b-card title="Contacto" align="center" tag="article" style="max-width: 20rem;" class="mb-2">

		<b-form-group>
			<b-form-group label="Street:" label-for="nested-street" label-cols-sm="3" label-align-sm="right">
				<b-form-input id="nested-street"></b-form-input>
			</b-form-group>

			<b-form-group label="City:" label-for="nested-city" label-cols-sm="3" label-align-sm="right">
				<b-form-input id="nested-city"></b-form-input>
			</b-form-group>

			<b-form-group label="State:" label-for="nested-state" label-cols-sm="3" label-align-sm="right">
				<b-form-input id="nested-state"></b-form-input>
			</b-form-group>

			<b-form-group label="Country:" label-for="nested-country" label-cols-sm="3" label-align-sm="right">
				<b-form-input id="nested-country"></b-form-input>
			</b-form-group>

			<b-form-group label="Ship via:" label-cols-sm="3" label-align-sm="right" class="mb-0"
				v-slot="{ ariaDescribedby }">
				<b-form-radio-group class="pt-2" :options="['Air', 'Courier', 'Mail']" :aria-describedby="ariaDescribedby">
				</b-form-radio-group>
			</b-form-group>
		</b-form-group>

		<b-button href="#" variant="primary">Go somewhere</b-button>
	</b-card>
</template>

<script>
export default {

}
</script>

<style>

</style>