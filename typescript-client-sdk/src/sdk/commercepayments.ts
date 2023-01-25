import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CommercePayments {
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
   * getCompaniesCompanyIdConnectionsConnectionIdDataCommercePayments - Gets the latest commerce payments for a company, with pagination
  **/
  getCompaniesCompanyIdConnectionsConnectionIdDataCommercePayments(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/commerce-payments", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsCommercePaymentPagedResponseModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsPaymentId - Gets the specified commerce payment for a given company
  **/
  getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsPaymentId(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsPaymentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsPaymentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsPaymentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/commerce-payments/{paymentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsPaymentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
