import React from 'react';
import Table from 'react-bootstrap/Table'

const kanban = (props) => {

    return (

        <div className={"container"}>
            <h1>Резултати</h1>
            <div className={"row"}>
                <div className={"container col-md-4"}>
                    <h3>Мој резултат</h3>
                    <ul>
                        <li>Завршени задачи {props.count_finished}</li>
                        <li>НЕ Завршени задачи {props.count_un_finished}</li>
                        <li>Вкупно поени {props.points}</li>
                    </ul>
                </div>
            </div>

            <h3>Ранк табела</h3>
            <Table striped bordered hover responsive="xl">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Име Презиме</th>
                    <th scope="col">Завршени задачи</th>
                    <th scope="col">НЕ Завршени задачи</th>
                    <th scope="col">Вкупно поени</th>
                </tr>
                </thead>
                <tbody>

                {props.map_by_users.map((term) => {
                    return (
                        <tr>
                            <th scope="row">{term.userID}</th>
                            <td>{term.name_surname}</td>
                            <td>{term.finished_tasks}</td>
                            <td>{term.un_finished_tasks}</td>
                            <td>term..points..sum</td>
                        </tr>
                    );
                })
                }
                </tbody>
            </Table>
        </div>

    )

}

export default kanban;
