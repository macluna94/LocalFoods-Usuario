export interface PedidoModel {

    local: string;
    usuario: string;
    repartidor: string;
    total: number;
    articulos: [
        {
            name: string,
            price: number,
            isCheck: boolean
        }]
    fecha: Date;
    estado: string;
    

}
