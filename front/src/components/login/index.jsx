import React from "react";
import { toast } from "react-toastify";

import api from "../../service/api";

const Login = () => {
    const [data, setData] = React.useState({
        login: "",
        senha: "",
    });

    function login() {
        api.post("/login", data)
            .then((res) => {
                if (res.data.statusCode === 400) {
                    toast.error("Usuário ou senha inválidos");
                } else {
                    sessionStorage.setItem("@kanban-token", res.data?.token);
                    sessionStorage.setItem(
                        "@kanban-user",
                        res.data?.userDB.login
                    );

                    toast.success("Usuário autenticado!");
                }
            })
            .catch((error) => {
                toast.error("Ops! Ocorreu um erro");
            });
    }

    return (
        <form>
            <input
                type="text"
                placeholder="login"
                onChange={(e) =>
                    setData({
                        ...data,
                        login: e.target.value,
                    })
                }
            />
            <input
                type="password"
                placeholder="password"
                onChange={(e) =>
                    setData({
                        ...data,
                        senha: e.target.value,
                    })
                }
            />

            <button
                type="button"
                onClick={() => login()}
                className="custom-blue"
            >
                entrar
            </button>
        </form>
    );
};

export default Login;
