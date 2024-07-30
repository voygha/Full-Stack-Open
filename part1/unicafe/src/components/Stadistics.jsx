import StadisticLine from "./StadisticLine"

const Stadistics = (props) => {
    //console.log(props)
    if (props.total === 0) {
        return (
            <>
                <div className="container-stadistics">
                    <h3>No Feedback Given</h3>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container-stadistics">
                <h3>Stadistics</h3>
                <StadisticLine text="Good: " value={props.good} />
                <StadisticLine text="Neutral: " value={props.neutral} />
                <StadisticLine text="Bad: " value={props.bad} />
                <StadisticLine text="Total Comments: " value={props.total} />
            </div>
            <div className="container-btns">
                <StadisticLine text="Total Puntuation: " value={props.totalPoints} />
                <StadisticLine text="Count: " value={props.contadorPromedio} />
                <StadisticLine text="Avarage: " value={props.avarage} />
                <StadisticLine text="Possitive: " value={props.possitivePercent} />
            </div>
        </>
    )
}

export default Stadistics