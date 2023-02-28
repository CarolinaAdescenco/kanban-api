import React from "react";
import { toast } from "react-toastify";

import api from "../../service/api";
import { ButtonContainer, CardContainer } from "./styles";

const Card = ({ data }) => {
    const [editMode, setEditMode] = React.useState(false);

    const [taskData, setTaskData] = React.useState({
        titulo: data.titulo,
        conteudo: data.conteudo,
        lista: data.lista,
    });

    function editarTask() {
        api.put(`/cards/${data.id}`, taskData).then((res) => {
            if (res.data.statusCode === 404) {
                toast.error("Task não encontrada!");
            } else {
                toast.success("Task editada com sucesso!");
                setEditMode(false);
            }
        });
    }

    function excluirTask(id) {
        api.delete(`/cards/${id}`).then((res) => {
            if (res.data.statusCode === 404) {
                toast.error("Task não encontrada!");
            } else {
                toast.success("Task excluída com sucesso!");
                sessionStorage.set("@kanban", res.data);
            }
        });
    }

    return (
        <CardContainer>
            {editMode && (
                <>
                    <form>
                        <input
                            type="text"
                            placeholder="Titulo"
                            defaultValue={data.titulo}
                            onChange={(e) =>
                                setTaskData({
                                    ...data,
                                    titulo: e.target.value,
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Descrição"
                            defaultValue={data.conteudo}
                            onChange={(e) =>
                                setTaskData({
                                    ...data,
                                    conteudo: e.target.value,
                                })
                            }
                        />

                        <select
                            defaultValue={data.lista}
                            onChange={(e) =>
                                setTaskData({
                                    ...data,
                                    lista: e.target.value,
                                })
                            }
                        >
                            <option value="todo">Todo</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>

                        <button
                            type="button"
                            onClick={() => editarTask()}
                            className="custom-blue"
                        >
                            salvar
                        </button>
                    </form>
                </>
            )}

            {!editMode && (
                <>
                    <h3>{data?.titulo}</h3>
                    <p>{data?.conteudo}</p>

                    <ButtonContainer>
                        <button
                            onClick={() => setEditMode(true)}
                            className="custom-blue"
                        >
                            editar
                        </button>
                        <button
                            onClick={() => excluirTask(data?.id)}
                            className="custom-pink"
                        >
                            excluir
                        </button>
                    </ButtonContainer>
                </>
            )}
        </CardContainer>
    );
};

export default Card;
