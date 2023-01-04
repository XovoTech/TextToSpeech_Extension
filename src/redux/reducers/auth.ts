import { IUser } from "../../model/user";
import { AppThunkAction } from "../types";

export interface IAuthReducer {
    access_token: string;
    user: IUser | null
}

const initialState: IAuthReducer = {
    user: null,
    access_token: "",
};

const auth = (state = initialState, action: any) => {
    switch (action.type) {
        case 'auth/SET_AUTH_USER':
            return (state = {
                ...state,
                user: action.user,
                access_token: action.user?.access_token,
            });
        default:
            return state;
    }
};

export default auth;