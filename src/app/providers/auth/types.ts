export enum AuthRoleType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: AuthRoleType;
  level?: number;
}

export interface AuthRegisterInput {
  name: string;
  email: string;
  password: string;
}

/* *****************************************************************
 * User types
 ***************************************************************** */

export type AuthUserType = null | AuthUser;

export enum AuthStatus {
  UNAUTHENTICATED = "UNAUTHENTICATED",
  AUTHENTICATED = "AUTHENTICATED",
}

/* *****************************************************************
 * Reducer
 ***************************************************************** */

export enum AuthReducerTypes {
  INITIAL = "INITIAL",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
  VERIFY_EMAIL = "VERIFY_EMAIL",
  UPDATE_PROFILE = "UPDATE_PROFILE",
}

type AuthReducerPayload = {
  [AuthReducerTypes.INITIAL]: {
    authenticationStatus: AuthStatus;
    user: AuthUserType;
  };
  [AuthReducerTypes.LOGIN]: {
    authenticationStatus: AuthStatus;
    user: AuthUserType;
  };
  [AuthReducerTypes.REGISTER]: {
    authenticationStatus: AuthStatus;
    user: AuthUserType;
  };
  [AuthReducerTypes.LOGOUT]: undefined;
};

export type AuthReducerActionsType =
  ActionMapType<AuthReducerPayload>[keyof ActionMapType<AuthReducerPayload>];

export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthReducerStateType = {
  authenticationStatus: AuthStatus;
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: AuthUserType;
};

/* *****************************************************************
 * Context / Provider
 ***************************************************************** */

export interface AuthContextType extends AuthReducerStateType {
  login: (role: AuthRoleType, level?: number) => Promise<void>;
  register: (data: AuthRegisterInput) => Promise<void>;
  logout: VoidFunction;
}
