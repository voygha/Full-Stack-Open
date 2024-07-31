const Total = ({parts}) => {
    //console.log(props)
    return (
        <>
            <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises + parts[3].exercises}</p>
        </>
    )
}

export default Total