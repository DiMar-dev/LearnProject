import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';


const navbar = (props) => {

    return (
        <Navbar sticky="top" id="navbar"
                className="navbar navbar-expand-md navbar-fixed px-4"
                collapseOnSelect
                expand="lg" style={{background: "#00ACC1"}}>
            <Link className="navbar-brand" to={"/"}>УЧАМ</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

                    <Nav.Link className="nav-item active">
                        <Link className="nav-link" to={"/Mentor"}>Родител</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-item active">
                        <Link className="nav-link" to={"/Tasks"}>Активни задачи</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-item">
                        <Link className="nav-link" to={"/Board"}>Завршени задачи</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-item">
                        <Link className="nav-link" to={"/Forum"}>Форум</Link>
                    </Nav.Link>

            </Nav>
            </Navbar.Collapse>
        </Navbar >


        // <nav className="navbar navbar-expand-md navbar-fixed px-4" >
        //     <Link className="navbar-brand" to={"/Frontpage"}>УЧАМ</Link>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        //             aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"/>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //         <ul className="navbar-nav mr-auto">
        //             <li className="nav-item active">
        //                 <Link className="nav-link" to={"/Mentor"}>Родител</Link>
        //             </li>
        //             <li className="nav-item active">
        //                 <Link className="nav-link" to={"/Tasks"}>Активни задачи</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link" to={"/Board"}>Завршени задачи</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link" to={"/Forum"}>Форум</Link>
        //             </li>
        //
        //         </ul>
        //     </div>
        // </nav>

    )

}

export default navbar;
