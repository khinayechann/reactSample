import React from 'react'

function hello(props) {
    const name = props.name
    return (
        <div>
            hello :
            {name}
        </div>
    )
}

export default hello
