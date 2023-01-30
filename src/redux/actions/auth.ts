import { ISubscription } from "../../model/subscription";
import { IUser } from "../../model/user"

export const setAuthUser = (user: IUser | null) => {
    if(user == null) {
        localStorage.removeItem("auth_user");
    } else {
        localStorage.setItem("auth_user", JSON.stringify(user))
    }
    return {
        type: "auth/SET_AUTH_USER",
        user
    }
}

export const setSubscription = (subscription: ISubscription) => {
    return {
        type: 'auth/SET_SUBSCRIPTION',
        subscription,
    }
}