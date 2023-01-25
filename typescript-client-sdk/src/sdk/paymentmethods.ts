import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PaymentMethods {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getCompaniesCompanyIdDataPaymentMethods - Gets the payment methods for a given company.
  **/
  getCompaniesCompanyIdDataPaymentMethods(
    req: operations.GetCompaniesCompanyIdDataPaymentMethodsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataPaymentMethodsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataPaymentMethodsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/paymentMethods", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdDataPaymentMethodsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsPaymentMethodPagedResponseModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdDataPaymentMethodsPaymentMethodId - Gets the specified payment method for a given company.
  **/
  getCompaniesCompanyIdDataPaymentMethodsPaymentMethodId(
    req: operations.GetCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/paymentMethods/{paymentMethodId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsPaymentMethod = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
