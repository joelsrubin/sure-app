export default function PriceCard({ data, text }) {

  return (
    <div className="price-cell">
      <div className="price-tag">${data.toLocaleString('us-EN')}
      </div>
      <h4 className="price-text"> {text}</h4>
    </div>
  );
}