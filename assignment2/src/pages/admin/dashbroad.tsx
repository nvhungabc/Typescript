import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAll, RemoveProduct } from "../../api/product"
import { IProduct } from "../../interfaces/products"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Loading from "react-loading";
import { Image } from "antd";

type Props = {
  data: IProduct
}
const Dashbroad = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  const fetchProduct = async () => {
    try {
      const { data } = await getAll();
      setProducts(data);
    } catch (err) {
      // handle error
    }
  }
  const handlRomve = async (id: string | number) => {
    if(confirm("Bạn có chắc muốn xóa không")){
      RemoveProduct(id).then(() => {
        setProducts(products.filter((products) => products.id != id))
      })
      .catch((err) => {
        console.log(err.error);
  
      })
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return <div className=" flex flex-col overflow-x-auto ">
    <a href="admin/add/dt"><h2>Quản lý sản phẩm</h2></a>
    <div className="">  <Link to={"add-products"}>
      <i className="cursor-grab "><FontAwesomeIcon icon={faSquarePlus} beat size="3x" style={{ color: "#1b97b6", }} /></i>
    </Link></div>
    <div className="sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">ID</th>
                <th scope="col" className="px-6 py-4">Name</th>
                <th scope="col" className="px-6 py-4">Image</th>
                <th scope="col" className="px-6 py-4">Price</th>
                <th scope="col" className="px-6 py-4">Price Gốc</th>
                <th scope="col" className="px-6 py-4">Describe</th>
                <th scope="col" className="px-6 py-4">Delete</th>
                <th scope="col" className="px-6 py-4">Update</th>
              </tr>
            </thead>
            <tbody>
              {products.map((products, index) => {

                return (
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{products.name}</td>
                    <td className="whitespace-nowrap px-6 py-4"> <Image
                      src={products.images?.[0]?.base_url}
                    /></td>
                    <td className="whitespace-nowrap px-6 py-4">{products.price.toLocaleString()}</td>
                    <td className="whitespace-nowrap px-6 py-4">{products.original_price.toLocaleString()}</td>
                    <td className="whitespace-nowrap px-6 py-4">{products.price}</td>
                    <td className="whitespace-nowrap px-6 py-4"><button onClick={() => handlRomve(products.id)} data-name="${projects.name}" data-id="${projects.id}" className="bg-blue-500 text-white hover:bg-blue-700 btn-remove border-0 p-2 rounded-md mx-1 ">
                      Remove
                    </button></td>
                    <td className="whitespace-nowrap px-6 py-4">  <button data-name="${projects.name}" className="bg-green-500 hover:bg-green-600 text-white btn-update border-0 p-2  rounded-md mx-1">
                      <Link to={"edit-products/" + products.id}> Update</Link>

                    </button></td>

                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}
export default Dashbroad