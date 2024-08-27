const Person = ({ person }) => {
    return (
        <>
            <div className="container cont-guia">
                <div className="row row-information">
                    <div className="col-name">
                    {person.name}
                    </div>
                    <div className="col-number">
                    {person.number}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Person