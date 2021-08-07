import Order from "./Order"
import OrderRepositoryMemory from "./OrderRepositoryMemory"

test("Deve adicionar uma order e gerar código do pedido", () => {
    const repository = new OrderRepositoryMemory()

    const order = new Order("412.600.570-62", "15092-480")

    repository.saveOrder(order)

    const allOrders = repository.getAllOrders()

    expect(allOrders).toHaveLength(1)
    expect(allOrders[0].id).toBe("202100000001")
})

test("Deve retornar as informações do pedido", () => {

    const repository = new OrderRepositoryMemory()

    const order = new Order("412.600.570-62", "15092-480")

    repository.saveOrder(order)

    const orderItem = repository.getOrderById("202100000001")

    expect(orderItem).toBeDefined()
    expect(orderItem?.id).toBe("202100000001")

})