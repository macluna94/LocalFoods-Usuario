export interface LocalModel {
    _id: string
    usuario: string
    password: string
    name: string
    description: string
    address: string
    tel: number
    horary: string[]
    categories: string[]
    menu: [{
        name: string,
        price: string,
        isCheck: boolean
    }]
}