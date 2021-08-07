import GetOrderInput from "./GetOrderInput";
import GetOrderOutput from "./GetOrderOutput";
import OrderRepositoryMemory from "./OrderRepositoryMemory";

export default class GetOrder {
    orderRepository: OrderRepositoryMemory;

    constructor() {
        this.orderRepository = new OrderRepositoryMemory()
    }

    execute(getOrderInput: GetOrderInput): GetOrderOutput{

        const order = this.orderRepository.getOrderById(getOrderInput.id)

        console.log(order)

        return new GetOrderOutput(order?.cpf.value, order?.zipCode, order?.items, order?.freight, order?.getTotal())

    }
}