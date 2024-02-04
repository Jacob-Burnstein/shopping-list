import { cookies } from "next/headers";
import { TokenInfo } from "../api/utils/interfaces/TokenInfo";

export default function getTokenInfo() {
  const cookieStore = cookies();
  const tokenInfo: TokenInfo | undefined = cookieStore.get("token");

  return tokenInfo;
}
