import { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux"
import { dispatchAPI, IApiParam } from "../helper/api";
import { ISubscription } from "../model/subscription";
import { setSubscription } from "../redux/actions/auth";
import { AppThunkDispatch, RootState } from "../redux/types"

export const useSubscriptionAPI = () => {
    const dispatch = useDispatch<AppThunkDispatch>();
    const access_token = useSelector((store: RootState) => store.auth.user?.token)

    return {
        getSubscriptionInfo: () => {
            const params: IApiParam = { 
                path: 'https://sonia.app/wp-json/wc-yith-ywsbs/v1/subscriptions/',
                headers: {
                    'Authorization': `Basic ${btoa("ck_7f82ee8cfc1803d01f02dfd4cc1e49c6cc8e59d2:cs_d2454a99c5edc234fb21c6af8113bcb00c35dc98")}`
                }
            };
            const onSuccessGetSubscriptions = (response: AxiosResponse['data']) => (dispatch: AppThunkDispatch, getState: () => RootState) => {
                if(getState().auth.user && getState().auth.user?.user_email) {
                    const subscription = response.find((r: ISubscription) => r.billing.email === getState().auth.user?.user_email);
                    return dispatch(setSubscription(subscription))
                }
                return null;
            }

            return dispatch(dispatchAPI(params, onSuccessGetSubscriptions))
        },

        updateUserCount: (count: number) => {
            const params: IApiParam = {
                path: 'https://sonia.app/wp-json/wp/v2/count',
                data: {
                    acf: { count },
                },
                method: "POST",
                headers: {
                    // 'Authorization': `Basic ${btoa("ck_7f82ee8cfc1803d01f02dfd4cc1e49c6cc8e59d2:cs_d2454a99c5edc234fb21c6af8113bcb00c35dc98")}`
                    'Authorization': `Bearer ${access_token}`,
                }
            }
            return dispatch(dispatchAPI(params));
        },

        getUserCount: () => {
            const params: IApiParam = {
                method: "GET",
                path: 'https://sonia.app/wp-json/wp/v2/count',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                }
            }

            return dispatch(dispatchAPI(params));
        }
    }
}