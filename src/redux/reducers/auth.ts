import { ISubscription } from "../../model/subscription";
import { IUser } from "../../model/user";

export interface IAuthReducer {
    access_token: string;
    user: IUser | null;
    subscription: null | ISubscription,
}

const initialState: IAuthReducer = {
    user: null,
    access_token: "",
    subscription: null,
};

const auth = (state = initialState, action: any) => {
    switch (action.type) {
        case 'auth/SET_AUTH_USER':
            return (state = {
                ...state,
                user: action.user as IUser,
                access_token: action.user?.access_token as string,
            });

        case 'auth/SET_SUBSCRIPTION':
            return (state = {
              ...state,
              subscription: action.subscription as ISubscription,
            })
        default:
            return state;
    }
};

export default auth;