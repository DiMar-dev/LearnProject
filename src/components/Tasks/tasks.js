import React, {Component} from "react";
import Task from '../Task item/taskItem'
import './tasks.css'

class Tasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected_task: {
                "taskID": 0,
                "childID": 0,
                "isDone": 0
            }
        }
    }

    render() {

        return (

            <div className={"row col-md-12"}>
                <div className={"container pending_tasks col-md-4 col-sm-12"}>
                    {this.props.pending_tasks.map((term) => {
                        return (
                            <div key={term.ID} className={"container col-md-12 py-1 my-2 tastToREnder col-sm-12"} >
                                <p>{this.props.d_tasks.find(dTask => dTask.ID === term.taskID).desc}</p>
                                <hr/>
                                <p>Поени: {this.props.d_tasks.find(dTask => dTask.ID === term.taskID).points}</p>
                                <button className={"btn"} onClick={() => this.openTask(term)}>Решавај</button>
                            </div>
                        );
                    })
                    }
                </div>
                <div className={"container col-md-8"}>
                        <Task task={this.props.d_tasks.find(dTask => dTask.ID === this.state.selected_task.taskID) }/>
                </div>

            </div>

        )
    }

     openTask(object) {
        this.setState({
            selected_task: object
        });
    }

}

export default Tasks;
