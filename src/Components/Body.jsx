import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";

const Body = () => {
  const [isAuth] = useContext(AppContext);

  if (isAuth) {
    return (
      <>
        <div>
          <div>
            <h1>Welcome back to DashBoard dear User</h1>
          </div>
          <div>
            <h2>We are here to Serve you Tell us what we can do for you</h2>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h3>Please login to continue with the site</h3>
      </div>
    );
  }
};
export default Body;
