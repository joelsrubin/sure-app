export default function Landing({ setPage }) {

  return (
    <div className="header">
      <h1 className="title">Welcome to the Insurance Quote App</h1>
      <button className="get-started-btn" onClick={() => setPage('rating')}>Get started now! 🚀</button>
    </div>);
}