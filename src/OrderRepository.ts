import Order from "./Order";

export default interface OrderRepository {
    saveOrder(order: Order): void
    getAllOrders(): Order[]
    getOrderById(id: String): Order | undefined
}