import { IApiParam, dispatchAPI } from "../helper/api";
import { AppThunkDispatch, RootState } from "../redux/types";
import { ISubscription } from "../model/subscription";
import { AxiosResponse } from "axios";
import { setSubscription } from "../redux/actions/auth";

export const getSubscriptionInfo = () =>  (dispatch: AppThunkDispatch): Promise<Array<ISubscription>> => {
    const params: IApiParam = { 
        path: 'https://sonia.app/wp-json/wc-yith-ywsbs/v1/subscriptions/',
        headers: {
            'Authorization': `Basic ${btoa("ck_7f82ee8cfc1803d01f02dfd4cc1e49c6cc8e59d2:cs_d2454a99c5edc234fb21c6af8113bcb00c35dc98")}`
        }
    };
    return dispatch(dispatchAPI(params, onSuccessGetSubscriptions));
}

const onSuccessGetSubscriptions = (response: AxiosResponse['data']) => (dispatch: AppThunkDispatch, getState: () => RootState) => {
    if(getState().auth.user && getState().auth.user?.user_email) {
        const subscription = response.find((r: ISubscription) => r.billing.email === getState().auth.user?.user_email);
        return dispatch(setSubscription(subscription))
    }
    return null;
}