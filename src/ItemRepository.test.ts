import ItemRepositoryMemory from "./ItemRepositoryMemory"

test("Deve retornar o item correto baseado em seu ID", () => {

    const repository = new ItemRepositoryMemory()

    const item = repository.getItemById("1")

    expect(item?.id).toBe("1")
    expect(item?.description).toBe("Guitarra")
})