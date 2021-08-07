import Order from "./Order";
import OrderRepository from "./OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
    orders: Order[];

    constructor() {
        this.orders = []
    }

    getOrderById(id: String): Order | undefined {
        return this.orders.find((order) => order.id === id)
    }

    getAllOrders(): Order[] {
        return this.orders
    }

    saveOrder(order: Order): void {

        const year = new Date().getFullYear()
        const sequence = (this.getAllOrders().length + 1 + '').padStart(8, '0')

        order.setId(`${year}${sequence}`)
        this.orders.push(order)
    }

    
}