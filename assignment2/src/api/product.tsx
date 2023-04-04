
import instance from ".";
import { IProduct } from "../interfaces/model";

export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}
export const getById = (id: number| string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}