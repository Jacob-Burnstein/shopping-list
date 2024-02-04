import cookies from "js-cookie";

export const getToken = () => {
  const token: string | undefined = cookies.get("token");
  return token;
};

export const removeToken = () => {
  cookies.remove("token", { path: "/" });
};
