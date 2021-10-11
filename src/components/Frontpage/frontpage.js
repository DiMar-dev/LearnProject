import React from 'react';
import {Link} from 'react-router-dom';

const Frontpage = (props) => {

    const [formData, updateFormData] = React.useState({
        userID: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const userID = formData.userID

        props.getCurrenID(userID);
    }

    return (

        <div className={"container col-sm-12"}>
            <form onSubmit={onFormSubmit}>
                <h1>Најава</h1>
                <label htmlFor="userID"> ID </label>
                <input type="text"
                       className="form-control"
                       id="userID"
                       name="userID"
                       required
                       placeholder="ID"
                       onChange={handleChange}
                />
                <button id="submit" type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )

}

export default Frontpage;
