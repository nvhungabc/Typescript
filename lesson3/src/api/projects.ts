import instance from "./config";

const getProjects = () => {
    return instance.get(`/products`);
};
const getProject = (id) => {
    return instance.get(`/products/${id}`);
};
const addProject = (project) => {
    return instance.post(`/products/`, project);
};
const updateProject = (project) => {
    return instance.patch(`/products/${project.id}`, project);
};
const deleteProject = (id) => {
    return instance.delete(`/products/${id}`);
};

export{
    getProjects,
    getProject,
    addProject,
    updateProject,
    deleteProject,
}