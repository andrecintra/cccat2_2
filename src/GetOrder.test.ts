import GetOrder from "./GetOrder"
import GetOrderInput from "./GetOrderInput"
import PlaceOrder from "./PlaceOrder";
import PlaceOrderInput from "./PlaceOrderInput";

test("Deve retornar as informações do pedido", () => {

    const input = new PlaceOrderInput({
        cpf: "778.278.412-36",
        zipcode: "11.111-11",
        items: [
            { id: "1", quantity: 2},
            { id: "2", quantity: 1},
            { id: "3", quantity: 3}
        ],
        coupon: "VALE20"
    });
    const placeOrder = new PlaceOrder();
    placeOrder.execute(input);

    const getOrder = new GetOrder()
    const getOrderInput = new GetOrderInput("202100000001")

    const order = getOrder.execute(getOrderInput)

    expect(order).toBeDefined()
    expect(order.cpf).toBe("778.278.412-36")
})