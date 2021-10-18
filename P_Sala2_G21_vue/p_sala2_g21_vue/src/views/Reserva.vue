<template>
<header>
<h2> {{titulo}}</h2>
</header>
<main>
    
<div class="bg-img">
<h2>Registrar Reserva</h2>
<form id="formulario_reserva" action="#" method="post">
<label for ="cliente">Nombre del Usuario</label>
<input type="text" name="cliente" v-model="reserva.cliente">
<label for ="documento">Documento</label>
<input type="text" name="documento" v-model="reserva.documento">
<label for ="paquete">Seleccione Paquete</label>
<div class="paq" style="width:200px;">
<select name="paquete" id="paque" v-model="paque">
<option value="0">Escoge paquete:</option>
    <option value="1">Sierra Nevada</option>
    <option value="2">Nevado del Ruiz</option>
    <option value="3">Salamina</option>
    <option value="4">Parque Natural Chicaque</option>
    <option value="5">Bioparque La Reserva</option>
	</select>
</div>
<input type="checkbox" name="transporte_si" v-model="trans">
<label for ="transporte_si">Incluir trasporte al punto de partida</label>
<input type="checkbox" name="num_personas_si" v-model="perso">
<label for="num_personas_si">Agregar personas o niños extra?</label>
<label v-if="perso" for="num_personas">Numero de  Personas</label>
<input v-if="perso" type="number" name="num_personas" v-model="reserva.personas">
<label v-if="perso" for="num_ninos">Numero de Niños</label>
<input v-if="perso" type="number" name="num_ninos" v-model="reserva.ninos">
<button type="reset">Limpiar</button>
<button @click="procesarInformacion" type="button">Agregar Reserva</button>
</form>

</div>

<div>
            <h2>Listado de Paquetes</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>CLIENTE</th>
                        <th>PAQUETE</th>
                        <th>NIÑOS</th>
                        <th>ADULTOS</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody id="datos_reserva">
                    <tr v-for="unReserva,i  in listaReservas" :key="unReserva">
                        <td>{{unReserva.cliente}}</td>
                        <td>{{unReserva.paquete}}</td>
                        <td>{{unReserva.ninos}}</td>
                        <td>{{unReserva.personas}}</td>
                        <td>{{unReserva.total}}</td>
                        <td><button class="btn" @click.prevent="eliminar(unReserva.documento,i)"><i class="fa fa-trash"></i></button></td>
             
                    </tr>                 
                </tbody>
            </table>
        </div>
		
		

</main>
</template>

<script>

import ReservaService from "@/services/reservas.js"
import PaqueteService from "@/services/paquetes.js"

export default {
    mounted(){
        document.title="Gestion de Reservas";
        this.listaReservas=ReservaService.obtenerTodos();
        this.listaPaquetes=PaqueteService.obtenerTodos();
        this.reserva=ReservaService.obtenerReservaActual();
        if (this.reserva.cliente!==""){
            this.limpiarFormulario();
        }
         
    },
    title:"prueba",
  data(){
      return{
        titulo:"Gestion de reservas",
        listaPaquetes : [],
        listaPrecios : [300000, 400000,140000,120000,130000],

        listaReservas:[],
        reserva:{ },
        paque:0,
        perso:false,
        trans:true,
              };
  },
  name: 'Reserva',
  components: {
   
  },
  methods:{

      eliminar(docu,position){
          this.listaReservas.splice(position,1);
          console.log(docu);
          
      },
      limpiarFormulario(){
          this.reserva= {
          cliente:"",
            documento:"",
            paquete:"",
            personas:0,
            ninos:0,
            total:0
          }
          
      },
      procesarInformacion(){
          console.log(this.paque);
          this.reserva.paquete = this.listaPaquetes[this.paque-1];
          if (this.perso){
              this.reserva.personas=this.reserva.personas+1;
          } else {
              this.reserva.personas=1;
          }

          if (this.trans){
              this.reserva.transporte=50000;
               this.reserva.total=this.listaPrecios[this.paque-1]*(this.reserva.personas+this.reserva.ninos) + this.reserva.transporte; 
          }else{
              this.reserva.transporte=0;
              this.reserva.total=this.listaPrecios[this.paque-1]*(this.reserva.personas+this.reserva.ninos);
          }
          console.log(this.listaPrecios[this.paque-1]);
          this.listaReservas.push(this.reserva);
          this.limpiarFormulario();
          //this.$router.push({name:"Home",params:{datos:this.listaReservas}});
          
      }
  }
}
</script>

<style scoped>
     body{
            padding: 2rem;
			
        }
    header {
        display: grid;
            grid-template-columns: 1fr  ;
            background-color: #192954 ;
            text-align: center;
	        text-align:center;font-family: 'Arial', serif;
	        color: whitesmoke;
            font-size: 14px;
            
        }
        #formulario_reserva{
            display: grid;
            grid-template-columns: 5rem 10rem;
            row-gap: 1rem;
            column-gap: 0.5rem;
	        }

        main{
            display: grid;
            grid-template-columns: 1fr 2fr ;
			background-image: url("../assets/fondo.jpg");
			
        }

        table{
            width: 80%;
            margin: 0 auto;
        }

        table td{
            text-align: center;
        }
		
	.button_sesion {border-radius: 25px;}


</style>