import axios from "axios";

export const loadConfig = async () => {
  try {
    const res = await axios.get("/live_chat_config.json");
    return res;
  } catch (error) {
    console.error(error);
  }
};
