import { useDispatch } from "react-redux"
import { LoginBody } from "../dto/auth";
import { dispatchAPI, IApiParam } from "../helper/api";
import { AppThunkDispatch } from "../redux/types"

export const useAuthAPI = () => {
    const dispatch = useDispatch<AppThunkDispatch>();

    return {
        login: (data: LoginBody) => {
            const params: IApiParam = {
                method:  "POST",
                path: 'https://sonia.app/wp-json/jwt-auth/v1/token',
                data,
            }
            return dispatch(dispatchAPI(params))
        }
    }
}