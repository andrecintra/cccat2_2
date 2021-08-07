import OrderItem from "./OrderItem";

export default class GetOrderOutput {
    cpf: String | undefined;
    cep: String | undefined;
    items: OrderItem[] | undefined;
    freight: Number | undefined;
    total: Number | undefined;

    constructor(cpf: String | undefined, cep: String | undefined, items: OrderItem[] | undefined, freight: Number | undefined, total: Number | undefined) {

        this.cpf = cpf
        this.cep = cep
        this.items = items
        this.freight = freight
        this.total = total
    }
}