class ReservaService{
  reservas=[];
  
  constructor(){

    this.reservaActual={
        cliente:"",
        documento:"",
        paquete:"",
        personas:0,
        ninos:0,
        total:0

    };

     this.reservas=[
        
            {
            cliente:"Maria",
            documento:"3333333",
            paquete:"Sierra Nevada",
            personas:2,
            ninos:0,
            transporte:50000,
            total:700000
            },
             {
            cliente:"Laura",
            documento:"123456789",
            paquete:"Sierra Nevada",
            personas:1,
            ninos:0,
            transporte:0,
            total:300000
            },
        ];

  }

  obtenerTodos(){
      return this.reservas;
  }

  obtenerReservaActual(){
    return this.reservaActual;
  }
}export default new ReservaService();