const jwt = require("jsonwebtoken");

interface TokenInfo {
  name?: string;
  value?: string;
  path?: string;
}

export default function getIdFromToken(
  tokenInfo: TokenInfo | undefined
): number {
  const tokenValue = tokenInfo?.value;
  const userId = jwt.verify(tokenValue, process.env.JWT);

  return userId.id;
}
