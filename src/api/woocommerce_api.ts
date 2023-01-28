import { IApiParam, dispatchAPI } from "../helper/api";
import { AppThunkDispatch, RootState } from "../redux/types";
import { ISubscription } from "../model/subscription";
import { AxiosResponse } from "axios";

export const getSubscriptionInfo = () =>  (dispatch: AppThunkDispatch): Promise<Array<ISubscription>> => {
    const params: IApiParam = { path: 'https://sonia.app/wp-json/wc-yith-ywsbs/v1/subscriptions/' };
    return dispatch(dispatchAPI(params, onSuccessGetSubscriptions));
}

const onSuccessGetSubscriptions = (response: AxiosResponse['data'], params: IApiParam) => (dispatch: AppThunkDispatch, getState: () => RootState) => {
    if(getState().auth.user?.email) {
        const subscription = response.find((r: ISubscription) => r.billing.email === getState().auth.user.email);
    }
}