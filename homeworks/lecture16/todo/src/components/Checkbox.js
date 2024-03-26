export default function Checkbox(props) {
    const { classId, id, name, handleClick, isChecked } = props;
  
    return (
      <div className={classId} key={id}>
        <input
          id={id}
          name={name}
          type="checkbox"
          onChange={handleClick}
          checked={isChecked}
        />
        <label>{"\t" + name}</label>
      </div>
    );
  }
  