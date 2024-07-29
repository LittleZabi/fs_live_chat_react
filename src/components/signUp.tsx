import { useContext, useState } from "react";
import { Store } from "../context";
import axios from "axios";
export default ({ config, setSwitchScreen }: any) => {
  const { setValue }: any = useContext(Store);
  const [loading, setLoading] = useState(false);
  const handleForm = async (element: any) => {
    (element as any).preventDefault();
    if (loading) return 0;
    const fullname = element.target["fullname"];
    const email = element.target["email"];
    const repassword = element.target["repassword"];
    const password = element.target["password"];
    let message: boolean | string = false;

    if (fullname.value === "") message = "Please enter your fullname.";
    else if (email.value === "") message = "Please enter your email address.";
    else if (password.value === "") message = "Please enter your password.";
    else if (password.value.length < 6)
      message =
        "Password length is too short please enter minimum 6 characters.";
    else if (password.value !== repassword.value)
      message = "Password is not matched please check again.";
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
      form.append("repassword", repassword.value);
      form.append("fullname", fullname.value);
      form.append("signUp", "1");
      await axios
        .post(config.ROOT_URL + "/backend/user.php", form)
        .then((res: any) => {
          res = res.data;
          setLoading(false);
          if (res.message === "UserExist") {
            setValue((state: any) => ({
              ...state,
              message: {
                message: "Email is already exist please login.",
              },
            }));
          }
          if (res.message === "success") {
            delete res.message;
            setValue((state: any) => ({
              ...state,
              user: res,
              message: { message: "Success redirecting..." },
            }));

            setTimeout(() => {
              setSwitchScreen("login");
            }, 2000);
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
            <h3 className="text-white text-center mt-2 mb-2">Register Now</h3>
            <div className="card-header">
              <p className="text-white">
                If you have already account. Then just
                <button
                  className="ml-1"
                  onClick={() => setSwitchScreen("login")}
                  type="button"
                  style={{
                    color: "orange",
                    fontWeight: "500",
                    cursor: "pointer",
                    padding: 0,
                    margin: 0,
                    background: "none",
                    border: "none",
                  }}
                >
                  Sign-In
                </button>
                .
              </p>

              <label
                htmlFor="fullname"
                className=""
                style={{ color: "#b2bcfd" }}
              >
                Enter your fullname.
              </label>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter your fullname."
                  id="fullname"
                  name="fullname"
                  className="form-control search"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text search_btn">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <label htmlFor="email" className="" style={{ color: "#b2bcfd" }}>
                Enter your email address.
              </label>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email."
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

              <label
                htmlFor="repassword"
                className="mt-3"
                style={{ color: "#b2bcfd" }}
              >
                Enter your password again.
              </label>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Re-type password..."
                  name="repassword"
                  id="repassword"
                  className="form-control search"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text search_btn">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
              </div>

              <div className="input-group mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "200px", display: "block" }}
                >
                  {loading ? "Loading..." : "Sign Up"}
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
