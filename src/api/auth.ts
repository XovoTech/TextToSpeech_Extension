import { useDispatch } from "react-redux"
import { LoginBody } from "../dto/auth";
import { dispatchAPI } from "../helper/api";
import { AppThunkDispatch } from "../redux/types"
import querystring from 'querystring';

export const useAuthAPI = () => {
    const dispatch = useDispatch<AppThunkDispatch>();

    return {
        login: (data: LoginBody) => {

            const store_url = process.env.BASE_URL;
            const endpoint = '/wc-auth/v1/authorize';

            const queryParams = {
                app_name: 'My App Name',
                scope: 'read_write',
                user_id: 123,
                return_url: 'http://app.com/return-page',
                callback_url: 'https://app.com/callback-endpoint'
            };
            
            const query_string = querystring.stringify(queryParams).replace(/%20/g, '+');

            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data,
                path: `${store_url}${endpoint}?${query_string}`
            }
            

            dispatch(dispatchAPI(params))
        }
    }
}