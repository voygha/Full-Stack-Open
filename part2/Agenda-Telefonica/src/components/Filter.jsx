const Filter = ({ filter, filterHandleOnChange }) => {
    return (
        <>
            <input
                value={filter}
                onChange={filterHandleOnChange}
                placeholder="Buscar por nombre"
            />
        </>
    )
}

export default Filter