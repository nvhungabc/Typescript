import 'bootstrap/dist/css/bootstrap.min.css'
import {router, render} from "./lib"
import projectAdd from './project-add';
import projectUpdate from './project-update';
import projects from './projects';
import signIn from './signin';
import signUp from './signup';

const app = document.querySelector("#app");

router.on("/", () => {
    render(projects, app)
});
router.on("/projects", () => {
    render(projects, app)
});
router.on("/projects/add", () => {
    render(projectAdd, app)
});
router.on("/projects/:id/update", (params) => {
    render(function(){
        return projectUpdate(params)
    }, app)
});
router.on("/signin", () => {
    render(signIn, app)
});
router.on("/signup", () => {
    render(signUp, app)
});
router.resolve();
