class PaqueteService{
    paquetes=[];


    constructor(){
       this.paquetes= ["Sierra Nevada", "Nevado del Ruiz","Salamina","Parque Natural Chicaque","Bioparque La Reserva"];
       
    }

    obtenerTodos(){
        return this.paquetes;
     
    }

  
    
} export default new PaqueteService();


