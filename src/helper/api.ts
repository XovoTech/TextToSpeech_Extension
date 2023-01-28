import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AppThunkDispatch } from '../redux/types';
import { urlRegex } from "./regex";

export interface IApiParam {
  path?: AxiosRequestConfig['url'];
  method?: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  cancelToken?: AxiosRequestConfig['cancelToken'],
  onUploadProgress?: AxiosRequestConfig['onUploadProgress'],
  onDownloadProgress?: AxiosRequestConfig['onDownloadProgress'],
  headers?: {[key in string]: string},
  responseType?: 'arraybuffer' | 'document' | 'json' | 'text' | 'stream' | 'blob'
}

export type IAPISuccess = (data: AxiosResponse['data'], params: IApiParam) => any;
export type IAPIFailure = (data: AxiosResponse['data'], params: IApiParam) => any;

export const apiCall = (params: IApiParam & {[key in string]: any}, onSuccess?: IAPISuccess, onFailure?: IAPIFailure) => new Promise<AxiosResponse['data']>((resolve, reject) => {
  
  const additionalData = { 
    user_id: params.user_id, 
    brand_id: params.brand_id, 
    role_id: params.role_id
  };

  if (params.method?.toUpperCase() === "POST") {
    if (!params.data) params.data = {}
  }

  if (params.method === "GET" || !params.method) {
    params.params = Object.assign({}, additionalData, params.params);
  }
  
  const requestingObject: AxiosRequestConfig = {
    url: getURL(params),
    headers: params.headers,
    method: params.method ? params.method : 'GET',
    data: params.data || undefined,
    params: params.params ? params.params : undefined,
    responseType: params.responseType || "json",
  };

  if (params.cancelToken)  // injecting the cancel token
    requestingObject.cancelToken = params.cancelToken


  if (params.onUploadProgress)
    requestingObject.onUploadProgress = params.onUploadProgress


  if (params.onDownloadProgress)
    requestingObject.onDownloadProgress = params.onDownloadProgress


  return axios(requestingObject)
    .then((response: AxiosResponse) => {
      // OnSuccess common validations

      if (response.data instanceof Blob) {
        response.data = new File([response.data], params.path?.substring(params.path?.lastIndexOf('/') + 1) || "", {
          type: response.headers['content-type']
        })
      }

      if (onSuccess) onSuccess(response.data, params);
      else console.log("onSuccess", requestingObject.url, response.data)
      resolve(response.data);
    })
    .catch((err: AxiosError) => {
      // onFailure common validations
      if (onFailure) onFailure(err, params);
      else console.log("onFailure", requestingObject.url, err, err.response?.data)
      reject(err);
    });
});

export const dispatchAPI = (params: IApiParam & {[key in string]: any}, onSuccess?: IAPISuccess, onFailure?: IAPIFailure) => (dispatch: AppThunkDispatch) => {
  params.headers = dispatch(getHeaders(params));

  return apiCall(params).then((response: AxiosResponse['data']) => {
    if (onSuccess) dispatch(onSuccess(response, params));
    return response;
  }).catch((e: AxiosError) => {
    if (onFailure) dispatch(onFailure(e, params));
    throw e;
  })
}

const getURL = (params: IApiParam) => {
  if (params.path) {
    if (urlRegex.test(params.path)) {
      return params.path
    }
    // return `${process.env.REACT_APP_API_URL}/${params.path}`;
  }
  else
    throw new Error('Path is undefined');

};

const getHeaders = (params: IApiParam) => () => {
  // if (urlRegex.test(params.path || "")) return {}
  const access_token = /*getState().auth.user?.user_token*/ null;
  const a: {[key in string]: string} = {};

  a['Accept'] = "application/json";

  if(!(params.data instanceof FormData)) {
    a['Content-Type'] = "application/json"
  }

  a['Authorization'] = `Basic ${btoa("ck_7f82ee8cfc1803d01f02dfd4cc1e49c6cc8e59d2:cs_d2454a99c5edc234fb21c6af8113bcb00c35dc98")}`

  if (access_token) {
    a['token'] = `${access_token}`;
  }

  if (Object.keys(a).length > 0)
    return a;
  return undefined;
};