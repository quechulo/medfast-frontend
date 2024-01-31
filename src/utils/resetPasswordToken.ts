import { jwtDecode } from 'jwt-decode';

export interface Token {
  exp: number;
  iat: number;
  userId: string;
}

export const isTokenValid = (userIdparam: string, token: string): boolean => {
  let decoded: Token = {} as Token;

  try {
    decoded = jwtDecode(token);
  } catch {
    return false;
  }

  const { exp, userId } = decoded;

  const currentTime = Date.now() / 1000;
  const isExpired = exp < currentTime;

  if (isExpired) {
    console.log('token is expired');
  }

  const isUserIdValid = userId === userIdparam;

  return !isExpired && isUserIdValid;
};
