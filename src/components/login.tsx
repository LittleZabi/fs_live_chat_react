import { useContext, useState } from "react";
import { Store } from "../context";
import axios from "axios";
import { Cookies, VARS_ } from "../utils/globals";

export default ({ setSwitchScreen }: any) => {
  const { setValue }: any = useContext(Store);
  const [loading, setLoading] = useState(false);
  const handleForm = async (element: any) => {
    (element as any).preventDefault();
    if (loading) return 0;
    const email = element.target["email"];
    const password = element.target["password"];
    let message: boolean | string = false;
    if (email.value === "") message = "Please enter your email address.";
    else if (password.value === "") message = "Please enter your password.";
    if (message)
      setValue((state: any) => {
        return { ...state, message: { message, variant: "danger" } };
      });
    else {
      setLoading(true);
      setValue((state: any) => ({ ...state, message: null }));
      const form = new FormData();
      form.append("email", email.value);
      form.append("password", password.value);
      form.append("login", "1");
      await axios
        .post(VARS_.ROOT_URL + "/backend/user.php", form)
        .then((res: any) => {
          res = res.data;
          setLoading(false);
          console.log(res);
          if (res.message === "UserNotActive") {
            setValue((state: any) => ({
              ...state,
              message: {
                message:
                  "User is register SucessFull. You Need to contect admin to active Packege and username whatapps +447878659010",
              },
            }));
          }
          if (res.message === "success") {
            delete res.message;
            Cookies.set("live-user", res, { expires: 365 });
            setValue((state: any) => ({
              ...state,
              user: res,
              message: { message: "Success redirecting..." },
            }));
            // setTimeout(() => {
            //   window.location.href = VARS_.ROOT_URL;
            // }, 2000);
          }
          if (res.message === "UserNotExist") {
            setValue((state: any) => ({
              ...state,
              message: { message: "Check your email or password." },
            }));
          }
        })
        .catch((error: any) => {
          setLoading(false);
          console.error(error);
          setValue((state: any) => ({
            ...state,
            message: { message: `Error on server: ${error}` },
          }));
        });
    }
  };
  return (
    <div className="scrn-x">
      <div className="col-md-4 col-xl-5">
        <div
          className="card mb-sm-3 mb-md-0 contacts_card"
          style={{ height: "max-content" }}
        >
          <form onSubmit={handleForm}>
            <h3 className="text-white text-center mt-2 mb-2">Login</h3>
            <div className="card-header">
              <p className="text-white">
                If you have no accounts than
                <button
                  onClick={() => setSwitchScreen("signup")}
                  className="ml-1"
                  type="button"
                  style={{
                    color: "orange",
                    fontWeight: "500",
                    cursor: "pointer",
                    padding: 0,
                    margin: 0,
                    background: 'none',
                    border:'none',
                  }}
                >
                  Sign-up
                </button>
                .
              </p>

              <label htmlFor="email" className="" style={{ color: "#b2bcfd" }}>
                Enter your email.
              </label>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter your email address..."
                  id="email"
                  name="email"
                  className="form-control search"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text search_btn">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <label
                htmlFor="password"
                className="mt-3"
                style={{ color: "#b2bcfd" }}
              >
                Enter your password.
              </label>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Enter password..."
                  name="password"
                  id="password"
                  className="form-control search"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text search_btn">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <div className="input-group mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "200px", display: "block" }}
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
            </div>
            <div className="card-footer"></div>
          </form>
        </div>
      </div>
    </div>
  );
};
