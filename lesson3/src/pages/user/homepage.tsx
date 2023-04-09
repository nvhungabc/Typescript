import Products from "../../components/product"
import Slider from "../../partials/slide"

const HomePages = () => {
    return <>
        <Slider />
        <h1 className="uppercase mt-6 mb-3 pl-5">Điện Thoại Nổi Bật</h1>
        <div className="grid grid-cols-7 gap-5">
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
        </div>
    </>
}

export default HomePages