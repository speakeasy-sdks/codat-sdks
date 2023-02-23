import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class Assess {
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
   * getCompaniesCompanyIdReportsEnhancedBalanceSheetAccounts - Gets a list of accounts with account categories per statement period, specific to balance sheet
  **/
  getCompaniesCompanyIdReportsEnhancedBalanceSheetAccounts(
    req: operations.GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/enhancedBalanceSheet/accounts", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdReportsEnhancedCashFlowTransactions - Gets a list of banking transactions and their categories.
  **/
  getCompaniesCompanyIdReportsEnhancedCashFlowTransactions(
    req: operations.GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/enhancedCashFlow/transactions", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdReportsEnhancedProfitAndLossAccounts - Gets a list of accounts with account categories per statement period, specific to profit and loss
  **/
  getCompaniesCompanyIdReportsEnhancedProfitAndLossAccounts(
    req: operations.GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/enhancedProfitAndLoss/accounts", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataAssessAccountsCategories - Gets a list of all the Codat standard categories.
  **/
  getDataAssessAccountsCategories(
    req: operations.GetDataAssessAccountsCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataAssessAccountsCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataAssessAccountsCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/data/assess/accounts/categories";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataAssessAccountsCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatAssessDataContractsAccountCategoriesAccountCategories = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetails - Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.
  **/
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetails(
    req: operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/details", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataIntegrityContractsDetailsTransactionDetailsPagedResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatus - Gets match status for a given company and datatype.
  **/
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatus(
    req: operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/status", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataIntegrityContractsMetadataMatchMetadataResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries - Gets match summary for a given company and datatype, optionally restricted by a Codat query string.
  **/
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries(
    req: operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/summaries", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataIntegrityContractsSummaryMatchSummariesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdAssessExcel - Returns the status of the latest report requested.
  **/
  getDataCompaniesCompanyIdAssessExcel(
    req: operations.GetDataCompaniesCompanyIdAssessExcelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdAssessExcelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdAssessExcelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/excel", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdAssessExcelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsAssessAssessExcelMeta = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdAssessExcelDownload - Download the Excel report to a local drive.
  **/
  getDataCompaniesCompanyIdAssessExcelDownload(
    req: operations.GetDataCompaniesCompanyIdAssessExcelDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdAssessExcelDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdAssessExcelDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/excel/download", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdAssessExcelDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdAssessExcelDownload200ApplicationJSONBinaryString = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing - Gets the marketing metrics from an accounting source for a given company, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accountingMetrics/marketing", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardReportingContractsReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories - Get account categories (suggested and confirmed) for a company connection.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories - Gets the suggested and/or confirmed category for a specific account.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatAssessDataContractsAccountCategoriesAccountCategoriesModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention - Gets the customer retention metrics for a specific company connection, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/customerRetention", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardReportingContractsReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue - Gets the lifetime value metric for a specific company connection, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/lifetimeValue", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardReportingContractsReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders - Gets the order information for a specific company connection, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/orders", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardReportingContractsReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds - Gets the refunds information for a specific company connection, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/refunds", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardReportingContractsReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue - Gets the revenue and revenue growth for a specific company connection, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/revenue", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardReportingContractsReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet - Gets a fully categorized balance sheet statement for a given company, over one or more period(s).
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardReportingContractsReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss - Gets a fully categorized profit and loss statement for a given company, over one or more period(s).
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/enhancedProfitAndLoss", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardReportingContractsReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics - Gets all the available financial metrics for a given company, over one or more periods.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/financialMetrics", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr - Gets key metrics for subscription revenue.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/mrr", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardReportingContractsReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess - Gets key metrics for subscription revenue.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/process", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories - Updates the categories for all or a batch of accounts for a specific connection.
  **/
  patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories(
    req: operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatAssessDataContractsAccountCategoriesAccountCategoriesModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories - Updates or removes the confirmed category of a specific account.
  **/
  patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories(
    req: operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatAssessDataContractsAccountCategoriesAccountCategoriesModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postDataCompaniesCompanyIdAssessExcel - Request an Excel report for download.
  **/
  postDataCompaniesCompanyIdAssessExcel(
    req: operations.PostDataCompaniesCompanyIdAssessExcelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDataCompaniesCompanyIdAssessExcelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDataCompaniesCompanyIdAssessExcelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/excel", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostDataCompaniesCompanyIdAssessExcelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsAssessAssessExcelMeta = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postDataCompaniesCompanyIdAssessExcelDownload - Download the Excel report to a local drive.
  **/
  postDataCompaniesCompanyIdAssessExcelDownload(
    req: operations.PostDataCompaniesCompanyIdAssessExcelDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDataCompaniesCompanyIdAssessExcelDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDataCompaniesCompanyIdAssessExcelDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/excel/download", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostDataCompaniesCompanyIdAssessExcelDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postDataCompaniesCompanyIdAssessExcelDownload200ApplicationJSONBinaryString = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
