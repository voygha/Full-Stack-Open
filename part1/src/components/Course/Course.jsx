import Header from './Header/Header'
import Content from './Content/Content'

const Course = ({ name, parts}) => {
    return (
        <>
            {/* Al Header unicamente le pasamos destructurado el titulo como parametro para no pasarle todo el objeto*/}
            {/* Al final lo que nos interesa para el Header sera el nombre del curso */}
            <Header name={name} />
            {/* Lo mismo pasa con contenido y con total, lo que nos interesa pasarle a los componentes solo es el array de parts dentro del objeto course*/}
            {/* A nuestro componente ahora solo le pasamos un valor que es el array*/}
            <Content parts={parts} />
        </>
    )

}

export default Course