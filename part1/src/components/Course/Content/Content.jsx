import Part from "./Part";

const Content = ({parts}) =>{
    //console.log(props)
    return(
        <>
        {/* Componente content Refactorizado */}
            {parts.map(part =>(
                <Part key={part.id}  name={part.name} exercise={part.exercise}/>
            ))}
        </>
    )
}

export default Content