import "./Nav.css";
export default function Nav() {
  return (
    <div className="Nav">
      <div className="left">
        <p className="P1">|||</p>
        <p>Home</p>
        <p>Links</p>
        <p>Projects</p>
        <p>Guidences</p>
      </div>
      <div className="Search">
        <input type="Text" value=" " />
        <button>Search</button>
      </div>
    </div>
  );
}
