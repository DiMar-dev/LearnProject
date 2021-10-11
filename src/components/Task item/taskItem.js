import React from 'react';

import './taskitem.css';
import logo from '../../staticResources/paint.jpg'

const task = (props) => {

    if (props.task.imgTask !== undefined) {
        return (
            <div className={"container col-md-12 task"}>

                <div className={"container w-100 p-1 m-2"} >
                    <p>{props.task.desc}</p>
                    <hr/>
                    <p>Поени: {props.task.points}</p>
                    <hr/>
                    <img src={logo} alt={"Solution of the task"} width={"100%"}/>
                </div>

            </div>
        )
    }

    if (props.task.solution !== undefined && props.task.solution.startsWith("https")){
        return (
            <div className={"container col-md-12 task"}>

                <div className={"container w-100 p-1 m-2"} >
                    <p>{props.task.desc}</p>
                    <hr/>
                    <p>Поени: {props.task.points}</p>
                    <hr/>
                    <iframe width="560" height="315" src={props.task.solution}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>

            </div>
        )
    }

    if (props.task.task !== undefined){
        return (
            <div className={"container col-md-12 task"}>

                <div className={"container w-100 p-1 m-2 "} >
                    <p>{props.task.desc}</p>
                    <hr/>
                    <p>Поени: {props.task.points}</p>
                    <hr/>
                    <h2 style={{color: "#307309"}}>{props.task.task}</h2>
                </div>

            </div>
        )
    }

    if (props.task.type === "Домашна задача"){
        return (
            <div className={"container col-md-12 task"}>
                <div className={"container w-100 p-1 m-2 "} >
                    <p>{props.task.desc}</p>
                    <hr/>
                    <p>Поени: {props.task.points}</p>
                </div>
            </div>

        )
    }

    if (props.task.type === "Математика"){
        return (
            <div className={"container col-md-12 task"}>
                <div className={"container w-100 p-1 m-2 "} >
                    <p>{props.task.desc}</p>
                    <hr/>
                    <p>Поени: {props.task.points}</p>
                </div>
            </div>

        )
    }

    return (
        <div className={"container col-md-12 task"}>
                    <div className={"container w-100 p-1 m-2"} >
                        <p>{props.task.desc}</p>
                        <hr/>
                    </div>
        </div>

    )

}

export default task;
