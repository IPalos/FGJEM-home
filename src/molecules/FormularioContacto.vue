<template>
	<b-form-group clas="wiu">
		<div class="row mx-1 my-4">

			<b-form-input placeholder="Ingrese su nombre" class="form-input"></b-form-input>
		</div>
		<div class="row mx-1 my-4">
			<b-form-input placeholder="Ingrese su Correo Electrónico" class="form-input"></b-form-input>
		</div>
		<div class="row mx-1 my-4">
			<b-form-input placeholder="Ingrese su Número Telefónico" class="form-input"></b-form-input>
		</div>
		<div class="row mx-1 my-4">
			<b-form-input placeholder="Asunto" class="form-input"></b-form-input>
		</div>
		<div class="row mx-1 my-4">
			<b-form-textarea placeholder="Mensaje" class="form-input"></b-form-textarea>
		</div>


		<div class="row mx-1">
			<b-button class="my-2 boton-enviar" @click="showModal=true">Enviar</b-button>
		</div>

		<ModalFGJEM v-if="showModal" v-on:CloseModal="showModal = false">
      <h3 slot="header">Mensaje</h3>
      <div slot="body">
        <h5>El correo se ha enviado con éxito. Nos comunicaremos con usted en breve.</h5>
      </div>
    </ModalFGJEM>

	</b-form-group>

</template>

<script>
import ModalFGJEM from '../organisms/ModalFGJEM.vue';
export default {
  components: { ModalFGJEM },
	data() {
		return{
			showModal:false,
		}

	},
}
</script>

<style scoped>
.wiu {
	text-align: left;
}

.boton-enviar {
	background-color: #477A69;
}

.form-input {
	background-color: #eeeeee;
}
</style>