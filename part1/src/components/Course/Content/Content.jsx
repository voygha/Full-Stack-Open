import Part from "./Part";

const Content = ({parts}) =>{
    //console.log(props)
    return(
        <>
        {/* Componente content Refactorizado */}
            <Part part={parts[0]} />
            <Part part={parts[1]}/>
            <Part part={parts[2]}/>
            <Part part={parts[3]}/>
        </>
    )
}

export default Content