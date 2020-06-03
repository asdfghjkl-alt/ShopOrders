import React from 'react'

export default function Title(props) {
    return (
        <div className= "row">
            <div className= "text-title col-10 mx-auto my-2 text-center">
                <h1 className="text-capitalize font-weight-bold">
                    {props.name} <strong className = "text-blue">{props.title}</strong>
                </h1>
            </div>
        </div>
    )
}
