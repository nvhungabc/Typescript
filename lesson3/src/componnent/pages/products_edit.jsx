import { useState } from "react"
import Container from "../content"
import { UpdateProjects } from "../../api/projects"

import { useParams } from "react-router-dom"

const Products_edit = () => {
    const { id } = useParams();
    console.log(id)
    const handleAdd = (event) => {
        const name = document.querySelector("#name").value;
        const price = document.querySelector("#price").value;
        const description = document.querySelector("#desc").value;
        event.preventDefault();
        const newProject = {

            name: name,
            price: price,
            description: description
        }
        UpdateProjects(newProject,id);
        console.log(id);
    }

    return <>
        <Container></Container>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form" onSubmit={handleAdd}>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                    Name
                </label>
                <input class="name shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter name"/>
            </div>
            <div class="mb-4">
                <label class=" block text-gray-700 font-bold mb-2" for="price">
                    Price
                </label>
                <input class="price shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Enter price"  />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="desc">
                    Description
                </label>
                <input class="price shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Enter price"  />
            </div>
            <div class="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
        Submit
      </button>
            </div>
        </form>
    </>
}

export default Products_edit