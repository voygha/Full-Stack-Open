

const Total = ({ parts }) => {
    //console.log(props)
    const totalExercises = parts.reduce((total, part) => {
        return total + part.exercises;
    }, 0);
    
    console.log(totalExercises); // Salida: 42
    return (
        <>
            <p>Number of exercises {totalExercises}</p>
        </>
    )
}

export default Total