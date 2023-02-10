import { useDispatch } from "react-redux"
import { LoginBody } from "../dto/auth";
import { dispatchAPI, IApiParam, IAPISuccess } from "../helper/api";
import { AppThunkDispatch } from "../redux/types"
import { useSubscriptionAPI } from "./subscription";

export const useAuthAPI = () => {
    const dispatch = useDispatch<AppThunkDispatch>();
    const { getUserCount } = useSubscriptionAPI();

    return {
        login: (data: LoginBody) => {
            const params: IApiParam = {
                method:  "POST",
                path: 'https://sonia.app/wp-json/jwt-auth/v1/token',
                data,
            }

            const onSuccess: IAPISuccess = (response) => async () => {
                const countResponse = dispatch(await getUserCount());
                console.log(countResponse);
            }

            return dispatch(dispatchAPI(params, onSuccess))
        }
    }
}