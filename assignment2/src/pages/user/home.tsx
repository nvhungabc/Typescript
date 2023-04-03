import Product from "../../componets/user/product"
import Slider from "../../componets/user/slider"
const Home = () => {
    return <div className="container mx-auto">
        <Slider/>
        <h1 className="text-xl m-7 font-sans ">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-3">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
}

export default Home