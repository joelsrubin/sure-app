export default function SelectCard({ handleChange, data }) {

  const name = data.title === 'Deductible' ? 'deductible' : 'asteroid_collision';

  return (
    <div className="select-cell" key={data.title}>
      <ul className="select-list">
        <li><label htmlFor="asteroid-collision-select">{data.title}</label></li>
        <li><select id="asteroid-collision-select" name={name} onChange={(e) => handleChange(e)}>
          {data.values.map((value) => (
            <option key={value} value={value}>${value.toLocaleString('en-US')}</option>
          ))}
        </select></li>
        <li><p>{data.description}</p></li>
      </ul>
    </div >
  );
}