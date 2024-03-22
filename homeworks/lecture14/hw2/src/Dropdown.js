function Dropdown({options, onSelect, buttonLabel, id}) {
    return(
        <div>
            <label htmlFor={id}>{buttonLabel}</label>
            <select
                id={id}
                className="form-control"
                onChange={(e) => onSelect(e.target.value)}
            >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
            </select>
      </div>
    );
}
export default Dropdown;