import "./index.css";

const Participant = (props) => {
  const { details } = props;
  const { name, speed, startTime } = details;
  return (
    <li className="list-item">
      <p className="field">{name}</p>
      <p className="field">{speed} KM/H</p>
      <p className="field">-</p>
      <p className="field">-</p>
    </li>
  );
};

export default Participant;
