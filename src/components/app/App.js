import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Forum from '../Forum/forum';
import Frontpage from '../Frontpage/frontpage';
import Kanban from '../Kanban/kanban';
import Mentor from '../Mentor/mentor';
import Tasks from '../Tasks/tasks';
import Repository from "../../Repository/Repository";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cilds: [],
            parents: [],
            f_tasks: [],
            d_tasks: [],
            posts: [],
            current_user: {
                "ID" : 4
            }
        }
    }

    render() {
        return(

            <Router>
                <Navbar/>
                {console.log("in nav"+this.state.current_user)}
                <main>
                    <div>
                        <Route path={"/Mentor"} exact render={() =>
                            <Mentor user = {this.state.current_user}
                                    f_tasks = {this.state.f_tasks.filter(task => task.childID === this.state.current_user.ID)}
                                    d_tasks = {this.state.d_tasks}/> } />

                        <Route path={"/Tasks"} exact render={() =>
                            <Tasks pending_tasks = {this.state.f_tasks.filter(item => item.isDone === 0 && item.childID === this.state.current_user.ID) }
                                   d_tasks = {this.state.d_tasks}/> } />

                        <Route path={"/Board"} exact render={() =>
                            <Kanban tasks = {this.state.f_tasks}
                                    count_un_finished = {this.state.f_tasks.filter(item => item.isDone === 0 && item.childID === this.state.current_user.ID).length}
                                    count_finished = {this.state.f_tasks.filter(item => item.isDone === 1 && item.childID === this.state.current_user.ID).length}
                                    // points = {this.state.f_tasks.filter(item => item.isDone === 1 && item.childID === this.state.current_user.ID)
                                    //                             .map(term => ({
                                    //                               "p": this.state.d_tasks.find(d_id => d_id === term.taskID).points
                                    //                             })
                                    //                             )//.reduce((a, b) => ({sum: a.p + b.p}))
                                    // }
                                    map_by_users = {this.state.cilds.map(term => (
                                        {
                                            "userID": term.ID,
                                            "name_surname": term.name + " " + term.surname,
                                            "finished_tasks": this.state.f_tasks.filter(item => item.isDone === 1 && item.childID === term.ID).length,
                                            "un_finished_tasks": this.state.f_tasks.filter(item => item.isDone === 0 && item.childID === term.ID).length
                                            // "points": this.state.d_tasks.filter(dimension =>
                                            //     this.state.f_tasks.filter(item => item.isDone === 1 && item.childID === term.ID)
                                            //                         .find(item_id => item_id.taskID = dimension.ID) !=== undefined)
                                            //     .reduce((a, b) => ({sum: a.points + b.points}))
                                        }
                                    ))
                                    }/> }
                        />

                        <Route path={"/Forum"} exact render={() =>
                            <Forum posts = {this.state.posts}/> } />

                        <Route path={"/"} exact render={() =>
                            <Frontpage getCurrenID={this.getCurrenID}/> } />

                    </div>
                </main>
            </Router>

            )
    }

    componentDidMount() {
        this.loadChlds();
        this.loadParents();
        this.loadDtasks();
        this.loadFtasks();
        this.loadPosts()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("updated"+this.state.current_user)
    }

    getCurrenID = (id) => {
        this.setState({
            current_user: {"ID" : (parseInt(id))}
        },() => console.log(this.state.current_user))
    }


    loadChlds = () => {
        this.setState({
            cilds: Repository.getChildUSers()
        })

    }
    loadParents = () => {
        this.setState({
            parents: Repository.getParentUSers()
        })
    }
    loadFtasks = () => {
        this.setState({
            f_tasks: Repository.getF_Tasks()
        })
    }
    loadDtasks = () => {
        this.setState({
            d_tasks: Repository.getD_Tasks()
        })
    }
    loadPosts = () => {
        this.setState({
            posts: Repository.getForumPosts()
        })
    }
}



export default App;
