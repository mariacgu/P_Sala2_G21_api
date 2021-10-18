<template>
<main>
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
                        
             
                    </tr>                 
                </tbody>
            </table>
        </div>
        
</main>

</template>

<script>

import ReservaService from "@/services/reservas.js"

export default {
    mounted(){
        document.title="Gestion de Reservas";
        this.listaReservas=ReservaService.obtenerTodos();
    },
    title:"prueba",
  data(){
      return{
        titulo:"Gestion de reservas",
        listaPaquetes : ["Sierra Nevada", "Nevado del Ruiz","Salamina","Parque Natural Chicaque","Bioparque La Reserva"],
        listaPrecios : [300000, 400000,140000,120000,130000],

        listaReservas:[],
       
              };
  },
  name: 'Reserva',
  components: {
   
  },
  methods:{

      


  }
}
</script>
