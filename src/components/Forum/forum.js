import React from 'react';

const forum = (props) => {

    return (

        <div className={"container"}>
            <h1>Форум</h1>
            <div className={"container p-2 "}>
                {props.posts.map((term) => {
                    return (
                        <div className={"container p-1"}>

                            <h2>{term.Title}</h2>
                            <h6>{term.Text}</h6>


                        </div>
                    );
                })
                }
            </div>
        </div>

    )

}

export default forum;
