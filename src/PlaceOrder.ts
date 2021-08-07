import Coupon from "./Coupon";
import CouponRepositoryMemory from "./CouponRepositoryMemory";
import FreightCalculator from "./FreightCalculator";
import Item from "./Item";
import ItemRepositoryMemory from "./ItemRepositoryMemory";
import Order from "./Order"
import OrderRepositoryMemory from "./OrderRepositoryMemory";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";
import ZipcodeCalculatorAPIMemory from "./ZipcodeCalculatorAPIMemory";

export default class PlaceOrder {
    zipcodeCalculator: ZipcodeCalculatorAPIMemory;
    couponRepository: CouponRepositoryMemory;
    itemRepository: ItemRepositoryMemory;
    orderRepository: OrderRepositoryMemory;

    constructor () {

        this.couponRepository = new CouponRepositoryMemory()
        this.itemRepository = new ItemRepositoryMemory()
        this.orderRepository = new OrderRepositoryMemory()
        this.zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
    }

    execute (input: PlaceOrderInput): PlaceOrderOutput {
        const order = new Order(input.cpf, input.zipcode);
        const distance = this.zipcodeCalculator.calculate(input.zipcode, "99.999-99");
        for (const orderItem of input.items) {
            const item = this.itemRepository.getItemById(orderItem.id)
            if (!item) throw new Error("Item not found");
            order.addItem(orderItem.id, item.price, orderItem.quantity);
            order.freight += FreightCalculator.calculate(distance, item) * orderItem.quantity;
        }
        if (input.coupon) {
            const coupon = this.couponRepository.getCouponByCode(input.coupon)
            if (coupon) order.addCoupon(coupon);
        }
        const total = order.getTotal();
        this.orderRepository.saveOrder(order);
        return new PlaceOrderOutput({
            freight: order.freight,
            total
        });
    }
}
