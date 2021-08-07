import Coupon from "./Coupon";

export default interface CouponRepository {
    getCouponByCode(code: String): Coupon | undefined
}