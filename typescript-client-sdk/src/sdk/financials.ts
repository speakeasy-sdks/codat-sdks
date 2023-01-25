import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Financials {
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
   * getCompaniesCompanyIdDataFinancialsBalanceSheet - Gets the latest balance sheet for a company.
  **/
  getCompaniesCompanyIdDataFinancialsBalanceSheet(
    req: operations.GetCompaniesCompanyIdDataFinancialsBalanceSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataFinancialsBalanceSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataFinancialsBalanceSheetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/financials/balanceSheet", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdDataFinancialsBalanceSheetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsDataBalanceSheetResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdDataFinancialsCashFlowStatement - Gets the latest cash flow statement for a company.
  **/
  getCompaniesCompanyIdDataFinancialsCashFlowStatement(
    req: operations.GetCompaniesCompanyIdDataFinancialsCashFlowStatementRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataFinancialsCashFlowStatementResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataFinancialsCashFlowStatementRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/financials/cashFlowStatement", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdDataFinancialsCashFlowStatementResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsDataCashFlowStatementResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdDataFinancialsProfitAndLoss - Gets the latest profit and loss for a company.
  **/
  getCompaniesCompanyIdDataFinancialsProfitAndLoss(
    req: operations.GetCompaniesCompanyIdDataFinancialsProfitAndLossRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataFinancialsProfitAndLossResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataFinancialsProfitAndLossRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/financials/profitAndLoss", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdDataFinancialsProfitAndLossResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsDataProfitAndLossResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
