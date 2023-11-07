import LinkButton from "./LinkButton";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="title">trnDs</h2>

      <div>
        <LinkButton link={"/"} linkText={"Home"}/>
        <LinkButton link={"create"} linkText={"New Blog"}/>
      </div>
    </nav>
  );
}

export default Navbar;
