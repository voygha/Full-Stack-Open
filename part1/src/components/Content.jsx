import Part from "./Part";

const Content = (props) =>{
    //console.log(props)
    return(
        <>
        {/* Componente content Refactorizado */}
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]}/>
            <Part part={props.parts[2]}/>
        </>
    )
}

export default Content