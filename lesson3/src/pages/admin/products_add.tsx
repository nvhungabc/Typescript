import { addProject } from "../../api/projects";
import Header from "../../componnent/header"
import { useEffect, router } from "../../lib/index"

const projectAdd = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectTitle = document.getElementById("form-name");
        const ProjectLink = document.getElementById("form-price");

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const newProject = {
                name: projectTitle.value,
                price: ProjectLink.value,
            }
            addProject(newProject).then(() => router.navigate("/projects"));
            alert("Thêm thành công!!!");
        })
    })
  return `
  ${Header()}
  <div>
    <form action="" id="form-add">
        <div class="form group mb-3">
            <h1>Add Project</h1>
            <label for="" class="form-label">Name</label>
            <input type="text" class="form-control" id="form-name">
        </div>
        <div class="form group mb-3">
            <label for="" class="form-label">Price</label>
            <input type="text" class="form-control" id="form-price">
        </div>
        <div>
            <button class="btn btn-primary">Add Project</button>
        </div>
    </form>
    </div>
  `
}

export default projectAdd