import React from 'react';
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';
import Table from 'react-bootstrap/Table'
import  './mentor.css'

const Mentor = (props) => {

    const [tasks, updateTasks] = React.useState(props.d_tasks);

    const tasksToAdd = [];
    const [newTasks, updateNewTasks] = React.useState(tasksToAdd);

    return (


        <div className={"container"}>
            <h2>Досегашни задачи</h2>
            <Table striped bordered hover responsive="xl" >
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Тип</th>
                    <th scope="col">Опис</th>
                    <th scope="col">Поени</th>
                    <th scope="col">Решена</th>
                </tr>
                </thead>
                <tbody>

                {props.f_tasks.map((term) => {
                    return (
                        <tr>
                            <th scope="row">{props.d_tasks.find(dTask => dTask.ID === term.taskID).ID}</th>
                            <td>{props.d_tasks.find(dTask => dTask.ID === term.taskID).type}</td>
                            <td>{props.d_tasks.find(dTask => dTask.ID === term.taskID).desc}</td>
                            <td>{props.d_tasks.find(dTask => dTask.ID === term.taskID).points}</td>
                            <td>{term.isDone}</td>
                        </tr>
                    );
                })
                }
                </tbody>
            </Table>

            <div className={"row"}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <div className={"container col-md-6 py-3"}>
                        <h2>Задачи:</h2>
                        <Droppable droppableId={"tasks"}>
                            {(provided) => (
                                <ul className={"tasks"} {...provided.droppableProps} ref={provided.innerRef}>
                                    {tasks.map((term,index) => {
                                        return (
                                                <Draggable key={term.ID} draggableId={term.ID.toString()} index={index}>
                                                    {(provided) => (
                                                            <li key={term.ID} className={"container w-100 p-1 m-2"} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                                <h3>{term.type}</h3>
                                                                <p>{term.desc}</p>
                                                                <hr/>
                                                                <p>Поени: {term.points}</p>
                                                            </li>
                                                    )}
                                                </Draggable>
                                        );
                                    })
                                    }
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </div>
                    <div className={"container col-md-6 py-3 choose"}>
                        <h2>Задачи:</h2>
                        <Droppable droppableId={"newTasks"}>
                            {(provided) => (
                                <ul className={"newTasks"} {...provided.droppableProps} ref={provided.innerRef}>
                                    {newTasks?.map((term,index) => {
                                        return (
                                            <Draggable key={term.ID} draggableId={term.ID.toString()} index={index}>
                                                {(provided) => (
                                                    <li key={term.ID} className={"container w-100 p-1 m-2 bg-warning"} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                        <h3>{term.type}</h3>
                                                        <p>{term.desc}</p>
                                                        <hr/>
                                                        <p>Поени: {term.points}</p>
                                                    </li>
                                                )}
                                            </Draggable>
                                        );
                                    })
                                    }
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                        <div className={"d-grid gap-2"}>
                            <button className={"btn btn-outline-success"} type="button">Внеси</button>
                        </div>
                    </div>
                </DragDropContext>
            </div>
        </div>

    )

    function handleOnDragEnd(result) {

        if (!result.destination) return;

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);


        if(result.destination.droppableId === "newTasks"){
            items.splice(result.destination.index, 1, reorderedItem);
            updateTasks(items)
            updateNewTasks(Array.from(newTasks).concat(reorderedItem))
        }else{
            updateTasks(items);
        }

    }

}

export default Mentor;
