import React from "react";
import { toast } from "react-toastify";

import api from "../../service/api";
import Card from "../card";
import { Button, Container, Header, Modal, Wrapper } from "./styles";

const Lista = () => {
    const [user] = React.useState(sessionStorage.getItem("@kanban-user"));
    const [tasks, setTasks] = React.useState();
    const [data, setData] = React.useState({
        titulo: "",
        conteudo: "",
    });
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        api.get("/cards").then((res) => setTasks(res.data));
    }, []);

    function adicionarTask() {
        api.post("/cards", data).then((res) => {
            toast.success("Task adicionada com sucesso!");
            setShowModal(false);
        });
    }
    return (
        <>
            {showModal && (
                <Modal>
                    <form>
                        <button
                            type="button"
                            className="custom-pink"
                            onClick={() => setShowModal(false)}
                        >
                            x
                        </button>

                        <h3>Nova Task</h3>

                        <input
                            type="text"
                            placeholder="Titulo"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    titulo: e.target.value,
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Descrição"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    conteudo: e.target.value,
                                })
                            }
                        />
                        <button
                            type="button"
                            onClick={() => adicionarTask()}
                            className="custom-blue"
                        >
                            salvar
                        </button>
                    </form>
                </Modal>
            )}

            <Wrapper direction="column" align="center">
                <Header>
                    <h1>
                        Bem vindo, <span>{user}</span>
                    </h1>
                    <Button onClick={() => setShowModal(true)}>
                        Adicionar
                    </Button>
                </Header>
                <Wrapper direction="row" align="flex-start" margin="0 0 100% 0">
                    <Container>
                        <h2>To Do</h2>
                        <ul>
                            {tasks?.todo.map((task) => (
                                <Card key={task.id} data={task} />
                            ))}
                        </ul>
                    </Container>
                    <Container>
                        <h2>Doing</h2>
                        <ul>
                            {tasks?.doing.map((task) => (
                                <Card key={task.id} data={task} />
                            ))}
                        </ul>
                    </Container>
                    <Container>
                        <h2>Done</h2>
                        <ul>
                            {tasks?.done.map((task) => (
                                <Card key={task.id} data={task} />
                            ))}
                        </ul>
                    </Container>
                </Wrapper>
            </Wrapper>
        </>
    );
};

export default Lista;
