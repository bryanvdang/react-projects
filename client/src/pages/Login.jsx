import { Link } from "react-router-dom";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="text" name="email" defaultValue="john@test.com" />
        <FormRow type="password" name="password" defaultValue="test" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Not a member?
          <Link to="/register" className="member-btn">
            Register Here
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
