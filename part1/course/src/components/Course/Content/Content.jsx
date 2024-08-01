import Part from "./Part";

const Content = ({parts}) =>{
    //console.log(props)
    return(
        <>
        {/* Componente content Refactorizado */}
            {/* Mapeo de las parts para recibir un numero arbitrario de datos en las Parts */}
            {parts.map(part =>(
                <Part key={part.id}  name={part.name} exercise={part.exercise}/>
            ))}
        </>
    )
}

export default Content