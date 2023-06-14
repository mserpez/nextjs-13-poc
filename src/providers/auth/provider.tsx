import React, { useCallback, useEffect, useMemo, useReducer } from "react";

import AuthContext from "./context";
import { authReducer, authReducerInitialState } from "./reducer";
import { AuthReducerTypes, AuthRoleType, AuthStatus } from "./types";
import {
  isValidToken,
  jwtDecode,
  localStorageAvailable,
  setSession,
} from "./utils";

const MOCKED_USER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOjEsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obkBkb2UuY29tIiwicm9sZSI6IlVTRVIiLCJleHAiOjE5MTYyMzkwMjJ9.41Bx6qJjkqjbx17faip9JnhZcCPb-4BOUDijrlTt3BY";

const MOCKED_ADMIN_0_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOjEsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obkBkb2UuY29tIiwicm9sZSI6IkFETUlOIiwibGV2ZWwiOjAsImV4cCI6MTkxNjIzOTAyMn0.T8YScH-2MfQaakZxwLwqDNbNqgCi6Z8nsLxnQ3K5icc";

const MOCKED_ADMIN_1_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOjEsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obkBkb2UuY29tIiwicm9sZSI6IkFETUlOIiwibGV2ZWwiOjEsImV4cCI6MTkxNjIzOTAyMn0.-_rbVbwPd68pUJ1v9cIPFNu8O8BTD_oVqxP0IAGhFXM";

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(authReducer, authReducerInitialState);

  const storageAvailable = localStorageAvailable();

  const getUserFromToken = useCallback((token: string) => {
    const user = jwtDecode(token);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      level: user.level,
    };
  }, []);

  const initialize = useCallback(async () => {
    const accessToken = storageAvailable && localStorage.getItem("accessToken");

    try {
      if (!accessToken) throw new Error("No token found");

      if (!isValidToken(accessToken)) throw new Error("Invalid token");

      setSession(accessToken);

      dispatch({
        type: AuthReducerTypes.INITIAL,
        payload: {
          authenticationStatus: AuthStatus.AUTHENTICATED,
          user: getUserFromToken(accessToken),
        },
      });
    } catch (error) {
      dispatch({
        type: AuthReducerTypes.INITIAL,
        payload: {
          authenticationStatus: AuthStatus.UNAUTHENTICATED,
          user: null,
        },
      });
    }
  }, [getUserFromToken, storageAvailable]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(
    async (roleType: AuthRoleType, level?: number) => {
      let token = MOCKED_USER_TOKEN;

      if (roleType === AuthRoleType.ADMIN) {
        if (level === 1) {
          token = MOCKED_ADMIN_1_TOKEN;
        } else {
          token = MOCKED_ADMIN_0_TOKEN;
        }
      }

      setSession(token);

      dispatch({
        type: AuthReducerTypes.LOGIN,
        payload: {
          user: getUserFromToken(token),
          authenticationStatus: AuthStatus.AUTHENTICATED,
        },
      });
    },
    [getUserFromToken]
  );

  // REGISTER
  const register = useCallback(async () => {
    const token = MOCKED_USER_TOKEN;

    setSession(token);

    dispatch({
      type: AuthReducerTypes.REGISTER,
      payload: {
        user: getUserFromToken(token),
        authenticationStatus: AuthStatus.AUTHENTICATED,
      },
    });
  }, [getUserFromToken]);

  // LOGOUT
  const logout = async () => {
    setSession(null);
    localStorage.clear();

    dispatch({
      type: AuthReducerTypes.LOGOUT,
    });
  };

  const memoizedValue = useMemo(
    () => ({
      ...state,
      login,
      logout,
      register,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
      logout,
      register,
    ]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
