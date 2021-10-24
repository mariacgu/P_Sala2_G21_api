import axios from "axios";


class PaqueteService{
    paquetes=[];
    url = "http://localhost:8000/paquete";

    constructor(){
       //this.paquetes= ["Sierra Nevada", "Nevado del Ruiz","Salamina","Parque Natural Chicaque","Bioparque La Reserva"];
       
    }

    obtenerTodos(){
        return axios.get(`${this.url}/todos`);
     }
     registrar(paquete){
      return axios.post(`${this.url}`,paquete);
    }
  
  
    
} export default new PaqueteService();


