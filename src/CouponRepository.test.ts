import CouponRepositoryMemory from "./CouponRepositoryMemory"

test("Deve retornar o cupon correto baseado no code", function () {

    const repository = new CouponRepositoryMemory()

    const coupon = repository.getCouponByCode("VALE20")

    expect(coupon?.code).toBe("VALE20")
})