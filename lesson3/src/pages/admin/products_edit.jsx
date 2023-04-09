import { getProject, updateProject } from "../api/projects";
import header from "../components/header"
import { router, useEffect, useState } from "./lib";
import projects from "./projects";

const projectUpdate = ({data :{id}}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
       getProject(id).then(({data}) => setData(data));
    },[]);
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectTitle = document.getElementById("form-name");
        const projectImage = document.getElementById("form-price");

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const newProject = {
                id: id,
                name: projectTitle.value,
                price: projectImage.value,
            }
            updateProject(newProject).then(() => router.navigate("/projects"));
            alert("Cập nhật thành công!!!");
        })
    })
  return `
  ${header()}
  <div>
    <form action="" id="form-add">
        <div class="form group mb-3">
            <h1>Update Project</h1>
            <label for="" class="form-label">Title</label>
            <input type="text" class="form-control" id="form-name" value="">
        </div>
        <div class="form group mb-3">
            <label for="" class="form-label">Image</label>
            <input type="text" class="form-control" id="form-price" value="">
        </div>
        <div>
            <button class="btn btn-primary">Update Project</button>
        </div>
    </form>
    </div>
  `
}

export default projectUpdate