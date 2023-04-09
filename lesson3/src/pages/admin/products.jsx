import { deleteProject, getProjects } from "../api/projects";
import header from "../components/header"
import { useEffect, useState } from "./lib"

const projects = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
       getProjects().then((data) => setData(data.data.data));
    },[]);
    useEffect(function() {
        const btns = document.querySelectorAll("#btn-remove");
        for(let btn of btns){
            const id = btn.dataset.id;
            btn.addEventListener("click", function() {
                const newData = data.filter((project) => {
                    return project.id != id;
                });
                let choice = confirm("bạn có chắc chắn muốn xóa không?");
                if(choice == true){
                    setData(newData);
                    deleteProject(id);
                    alert("Xóa thành công!!!");
                    window.location.reload();
                }
                
            })
        }
    }, )
  return `
    ${header()}
        <div>
            <table class="table">
                <thead class="table-dark">
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    ${
                       data.map((project, index) => {
                            return `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${project.name}</td>
                                <td>${project.price}</td>
                                <td>
                                    <a data-id="${project._id}" class="btn btn-primary" id="btn-remove">Delete</a>
                                    <a class="btn btn-secondary" href="/projects/${project._id}/update">Edit</a>
                                </td>
                            </tr>
                            `
                        }).join("")
                    }
                </tbody>
            </table>
        </div>
  `
}

export default projects