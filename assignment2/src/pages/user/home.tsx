import Product from "../../componets/user/product"
import Slider from "../../componets/user/slider"
import { useEffect,useState } from "react"
import { IProduct } from "../../interfaces/model"
import { getAll } from "../../api/product"
const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const fetchProduct = async () => {
        try {
            const { data } = await getAll()
            // console.log(data.);
            setProducts(data)

        } catch (err) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return <div className="container mx-auto">
        <Slider/>
        <h1 className="text-xl m-7 font-sans ">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-3">
        {products.map(product => <Product
                data={product}
                key={product.id} />)}
        </div>
    </div>
}

export default Home