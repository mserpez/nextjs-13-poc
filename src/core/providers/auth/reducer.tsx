import {
  AuthReducerActionsType,
  AuthReducerStateType,
  AuthReducerTypes,
  AuthStatus,
} from "./types";

// ----------------------------------------------------------------------

export const authReducerInitialState: AuthReducerStateType = {
  isInitialized: false,
  isAuthenticated: false,
  authenticationStatus: AuthStatus.UNAUTHENTICATED,
  user: null,
};

export const authReducer = (
  state: AuthReducerStateType,
  action: AuthReducerActionsType
) => {
  if (action.type === AuthReducerTypes.INITIAL) {
    return {
      isInitialized: true,
      authenticationStatus: action.payload.authenticationStatus,
      isAuthenticated:
        action.payload.authenticationStatus === AuthStatus.AUTHENTICATED,
      user: action.payload.user,
    };
  }
  if (action.type === AuthReducerTypes.LOGIN) {
    return {
      ...state,
      authenticationStatus: action.payload.authenticationStatus,
      isAuthenticated:
        action.payload.authenticationStatus === AuthStatus.AUTHENTICATED,
      user: action.payload.user,
    };
  }
  if (action.type === AuthReducerTypes.REGISTER) {
    return {
      ...state,
      authenticationStatus: action.payload.authenticationStatus,
      isAuthenticated:
        action.payload.authenticationStatus === AuthStatus.AUTHENTICATED,
      user: action.payload.user,
    };
  }
  if (action.type === AuthReducerTypes.LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
      authenticationStatus: AuthStatus.UNAUTHENTICATED,
      user: null,
    };
  }

  return state;
};
