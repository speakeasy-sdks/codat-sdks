import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class BankingTransactionCategories {
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
   * getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategories - Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction
   * activity.
  **/
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategories(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryId - Gets a specified bank transaction category for a given company
  **/
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryId(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories/{transactionCategoryId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsBankingTransactionCategory = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
