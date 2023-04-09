import * as Yup from 'yup'

export interface IProduct {
    id: string,
    name: string,
    categorys: string
    price: number,
    original_price: number,
    description: string,
    images: Images[],
    brand: { id: number, name: string, slug: string },
    specifications: ISpecification[]
}
export interface Images {
    map(arg0: (image: any) => JSX.Element): import("react").ReactNode;

    base_url: string;
    is_gallery: boolean;
    label: string | null;
    large_url: string;
    medium_url: string;
    position: number | null;
    small_url: string;
    thumbnail_url: string;

}
export interface ISpecification {
    name: string,
    attributes: { code: string, name: string, value: string }[]
}
export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    images: Yup.array().of(
        Yup.object().shape({
            base_url: Yup.string(),
        })
    ),
    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type updateForm = Yup.InferType<typeof updateSchema>

// thêm
export const addSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    images: Yup.array().of(
        Yup.object().shape({
            base_url: Yup.string(),
        })
    ),
    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type addForm = Yup.InferType<typeof addSchema>
