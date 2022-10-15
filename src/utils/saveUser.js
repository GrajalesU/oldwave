import { getUser } from "../utils/getUser";

export const saveUser = async (token) => {
  const user = await getUser(token);
  window.localStorage.setItem("user", JSON.stringify(user));
};
