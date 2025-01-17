import Coupon from "./Coupon";
import Cpf from "./Cpf";
import OrderItem from "./OrderItem";

export default class Order {
    cpf: Cpf;
    items: OrderItem[];
    coupon: Coupon | undefined;
    freight: number;
    id: string;
    zipCode: String;

    constructor (cpf: string, zipCode: String) {
        this.id = ""
        this.cpf = new Cpf(cpf);
        this.items = [];
        this.freight = 0;
        this.zipCode = zipCode
    }

    addItem (id: string, price: number, quantity: number) {
        this.items.push(new OrderItem(id, price, quantity));
    }

    addCoupon (coupon: Coupon) {
        if (!coupon.isExpired()) {
            this.coupon = coupon;
        }
    }

    getTotal () {
        let total = 0;
        for (const orderItem of this.items) {
            total += orderItem.getTotal();
        }
        if (this.coupon) {
            total -= (total * this.coupon.percentage)/100;
        }
        total += this.freight;
        return total;
    }

    setId(id: string) {
        this.id = id
    }

}
