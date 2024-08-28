const PersonForm = ({ addRegister, newName, newNumber, nameHandleOnChange, numberHandleOnChange }) => {
    return (
        <>
            <form onSubmit={addRegister}>
                <div>Name debug: {newName}</div>
                <div>Number debug: {newNumber}</div>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={nameHandleOnChange}
                    />
                </div>

                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={numberHandleOnChange}
                    />
                </div>

                <div>
                    <button type='submit'>Add</button>
                    <h2>Numbers</h2>
                </div>
            </form>
        </>
    )
}

export default PersonForm