import './Filter.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className="label">
      Find contacts by name
      <input className="input" type="text" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;
