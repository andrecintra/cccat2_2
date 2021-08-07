import Item from "./Item";

export default interface ItemRepository {

    getItemById(id: String): Item| undefined
    
}