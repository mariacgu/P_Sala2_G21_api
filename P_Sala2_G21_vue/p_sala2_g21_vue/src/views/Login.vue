<template>
    <h1>Inicio de Sesion</h1>
    <form action="#">
      <input type="text" placeholder="Usuario" v-model="usuario">
      <input type="password" placeholder="Contraseña" v-model="password">
      
       <button class="btn" @click.prevent="iniciarSesion"><i class="fa fa-unlock"></i></button>
       <h2 v-if="error!=''">{{error}}</h2>
    </form>   
</template>

<script>

import ClientesService from "@/services/clientes.js"

export default {

  data(){
    return {
      usuario:"",
      password:"",
      error:""
    }
  },
  methods:{
    iniciarSesion(){
      ClientesService.validar(this.usuario,this.password).then(
        (respuesta)=>{
          console.log(respuesta.data);
          if(respuesta.data.usuario){
              localStorage.cliente=respuesta.data.documento;
              localStorage.usuario=respuesta.data.usuario;
              
              this.$router.go(0);
              this.$router.push({name:"Home"});
              
          }else{
            this.error="Datos invalidos";
          }
        }
      );

    }
  }
}
</script>
