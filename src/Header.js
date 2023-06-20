import "./Header.css";
const Header = () => {
  return (
    <header>
      <div id="brand">Zomato </div>
      <div id="social">
        <button className="btn btn-success">
        <span className="">Log In</span>
        </button>
      
        <button className="btn btn-danger">
          <span className="signup">SignUp</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
