import { useContext } from "react";
import { Cookies, getRandomColor } from "../utils/globals";
import { Store } from "../context";

export default ({ chatType, setChatType }: any) => {
    const {setValue}:any = useContext(Store)
  const handleLogout = () => {

    Cookies.delete("live-user");
    setValue((state: any) => ({ ...state, user: null }));
  };
  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search..."
              name=""
              className="form-control search"
            />
            <div className="input-group-prepend">
              <span className="input-group-text search_btn">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="card-body contacts_body">
          <div className="contacts">
            <li className={chatType === "chat-password-url" ? "active" : ""}>
              <button
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                }}
                onClick={() => setChatType("chat-password-url")}
              >
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img
                      src="./icons/key.svg"
                      className="rounded-circle user_img"
                      style={{
                        width: 50,
                        padding: 8,
                        background: getRandomColor(),
                        height: 50,
                        marginTop: "8px",
                      }}
                      alt="alter"
                    />
                  </div>
                  <div className="user_info" style={{ textAlign: "left" }}>
                    <span>Password URL</span>
                    <p>click to change chats to unlock urls</p>
                  </div>
                </div>
              </button>
            </li>
            <li className={chatType === "chat-unlock-url" ? "active" : ""}>
              <button
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                }}
                onClick={() => setChatType("chat-unlock-url")}
              >
                <div className="d-flex bd-highlight ">
                  <div className="img_cont">
                    <img
                      src="./icons/url.svg"
                      className="rounded-circle user_img"
                      style={{
                        width: 50,
                        padding: 8,
                        background: getRandomColor(),
                        height: 50,
                        marginTop: "8px",
                      }}
                      alt="alter"
                    />
                  </div>
                  <div className="user_info" style={{ textAlign: "left" }}>
                    <span>Unlock URL</span>
                    <p>click to change chats to passwords urls</p>
                  </div>
                </div>
              </button>
            </li>
            <li>
              <button
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                }}
                onClick={handleLogout}
              >
                <div className="d-flex bd-highlight ">
                  <div className="img_cont">
                    <img
                      src="./icons/logout.svg"
                      className="rounded-circle user_img"
                      style={{
                        width: 50,
                        padding: 8,
                        background: getRandomColor(),
                        height: 50,
                        marginTop: "8px",
                      }}
                      alt="alter"
                    />
                  </div>
                  <div className="user_info" style={{ textAlign: "left" }}>
                    <span>Logout</span>
                    <p>click to logout from your account.</p>
                  </div>
                </div>
              </button>
            </li>
          </div>
        </div>
        <div className="card-footer">
          <a
            href="//wa.me/447878659010/"
            target="_blank"
            style={{ color: "white", fontSize: 14 }}
          >
            <img
              src="./icons/whatsapp.svg"
              alt=""
              style={{ marginRight: 4, marginBottom: 3 }}
            />
            WhatsApps{" "}
            <span style={{ color: "#ffaf0c", fontWeight: 600 }}>
              +447878659010
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
