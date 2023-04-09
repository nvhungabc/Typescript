
import instance from ".";
import Product from "../pages/user/product";
import { IProduct, addForm, updateForm } from "../interfaces/products";
export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}
export const getById = (id: number| string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}
export const AddProduct = (id: number| string) => {
    return instance.post("/products",Product)
}
export const RemoveProduct = (id: number| string) =>{
    return instance.delete("/products/"+id);
}
export 
const UpdateProducts = (id: string | number, products: updateForm) => {
    return instance.put("/products/" + id, products)
}

