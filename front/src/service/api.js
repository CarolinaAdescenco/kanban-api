import axios from "axios";

axios.defaults.headers.common[
    "Authorization"
] = `Bearer ${sessionStorage.getItem("@kanban-token")}`;

export default axios.create({
    baseURL: "http://localhost:5000",
});
