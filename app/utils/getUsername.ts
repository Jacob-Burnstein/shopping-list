import cookies from "js-cookie";

export const getUsername = () => {
  const username: string | undefined = cookies.get("username");
  return username;
};
