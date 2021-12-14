export default function Errors({ errors, formatErrors }) {
  return (
    <div className="errors">
      {Object.entries(errors).map(([key, value], i) => {
        return (
          <span key={i}>{formatErrors(value)}: {formatErrors(key)}</span>
        );
      })}
    </div>
  );
}