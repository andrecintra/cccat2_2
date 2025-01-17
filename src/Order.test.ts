import Coupon from "./Coupon";
import Order from "./Order";

test("Não deve criar um pedido com CPF inválido", function () {
    const cpf = "111.111.111-11";
    const zipCode = "15092-480"
    expect(() => new Order(cpf, zipCode)).toThrow(new Error("Invalid CPF"));
});

test("Deve criar um pedido com 3 itens", function () {
    const cpf = "778.278.412-36";
    const zipCode = "15092-480"
    const order = new Order(cpf, zipCode);
    order.addItem("1", 1000, 2);
    order.addItem("2", 5000, 1);
    order.addItem("3", 30, 3);
    const total = order.getTotal();
    expect(total).toBe(7090);
});

test("Deve criar um pedido com cupom de desconto", function () {
    const cpf = "778.278.412-36";
    const zipCode = "15092-480"
    const order = new Order(cpf, zipCode);
    order.addItem("1", 1000, 2);
    order.addItem("2", 5000, 1);
    order.addItem("3", 30, 3);
    order.addCoupon(new Coupon("VALE20", 20, new Date("2021-10-10")));
    const total = order.getTotal();
    expect(total).toBe(5672);
});

test("Deve criar um pedido com cupom de desconto expirado", function () {
    const cpf = "778.278.412-36";
    const zipCode = "15092-480"
    const order = new Order(cpf, zipCode);
    order.addItem("1", 1000, 2);
    order.addItem("2", 5000, 1);
    order.addItem("3", 30, 3);
    order.addCoupon(new Coupon("VALE20", 20, new Date("2020-10-10")));
    const total = order.getTotal();
    expect(total).toBe(7090);
});
