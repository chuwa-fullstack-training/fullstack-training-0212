function Card({name, color, handleNameChange}) {
    return(
        <div className="card" style={{background: color || 'white'}}>
            <div className="card-body">
                <p>Component Name:</p>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Card;