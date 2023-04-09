import { useState } from "react"
import { AddProjects } from "../api/projects"
import { Router } from "react-router-dom"
const Login = () => {
    const [data, setdata] = useState([])
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const handleAdd = (event) => {
        event.preventDefault();
        const newProject = {
            name: name,
            price: price,
        }
        AddProjects(newProject)
            .then(({ data }) => {
                setdata([...data, newProject]);
                setName("");
                setPrice("");
            }).then((alert("Đăng Nhập thành công"))).then(window.location.href = "/")
            .catch(error => console.log(error));
    }
    return <>
    <h2 className="text-xl font-medium text-gray-900 dark:text-white">Login</h2>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form">
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
            Email
            </label>
            <input class="name shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email name" />
        </div>
        <div class="mb-4">
            <label class=" block text-gray-700 font-bold mb-2" for="price">
                Password
            </label>
            <input class="price shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="password"  />
        </div>
        <div class="flex items-center justify-between">
            <button onClick={handleAdd} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Login
            </button>
        </div>
    </form>
</>
}
export default Login