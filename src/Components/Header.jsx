import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { Login } from "./Login";

const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);

  const logInUser = () => {
    return <Login />;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          border: "1px solid black",
          padding: "20px",
          background: "whitesmoke"
        }}
      >
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "turquoise"
          }}
        >
          About
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "turquoise"
          }}
        >
          Home
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "turquoise"
          }}
        >
          Career
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "turquoise"
          }}
        >
          Our Mission
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "turquoise"
          }}
        >
          {isAuth ? (
            <button
              style={{ border: "none", background: "turquoise" }}
              onClick={() => setIsAuth(false)}
            >
              SIGN OUT
            </button>
          ) : (
            <button
              style={{ border: "none", background: "turquoise" }}
              // onClick={() => setIsAuth(true)
              onClick={logInUser}
            >
              SIGN IN
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
