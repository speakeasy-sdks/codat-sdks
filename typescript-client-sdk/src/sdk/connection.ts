import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Connection {
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
   * deleteCompaniesCompanyIdConnectionsConnectionId - Disconnect and delete a data source from a company
   *
   * This revokes and removes a data connection from being listed as a company's connection(s).
  **/
  deleteCompaniesCompanyIdConnectionsConnectionId(
    req: operations.DeleteCompaniesCompanyIdConnectionsConnectionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCompaniesCompanyIdConnectionsConnectionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCompaniesCompanyIdConnectionsConnectionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCompaniesCompanyIdConnectionsConnectionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteCompaniesCompanyIdConnectionsConnectionId200ApplicationJSONBoolean = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdConnections - Retrieve all data sources connected to a single company, including their connection statuses
  **/
  getCompaniesCompanyIdConnections(
    req: operations.GetCompaniesCompanyIdConnectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdConnectionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsCompanyDataConnectionPagedResponseModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdConnectionsConnectionId - Retrieve a single data source connected to a single company, including its connection status
  **/
  getCompaniesCompanyIdConnectionsConnectionId(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsConnectionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsCompanyDataConnection = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts - Get BankFeed BankAccounts for a single data source connected to a single company.
  **/
  getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardizationBankFeedsAccountsContractBankFeedBankAccounts = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * patchCompaniesCompanyIdConnectionsConnectionId - Disconnect a data source from a company
   *
   * This revokes a company’s access to a data source, but the data connection is still listed as a part of a company's
   * data connection(s). The status value in the request body should be "Unlinked" (case sensitive). Data connections
   * can only be unlinked if in the Linked or Deauthorized state.
  **/
  patchCompaniesCompanyIdConnectionsConnectionId(
    req: operations.PatchCompaniesCompanyIdConnectionsConnectionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchCompaniesCompanyIdConnectionsConnectionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchCompaniesCompanyIdConnectionsConnectionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}", req.pathParams);

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
        const res: operations.PatchCompaniesCompanyIdConnectionsConnectionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsCompanyDataConnection = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * patchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountId - Update a single BankFeed BankAccount for a single data source connected to a single company.
  **/
  patchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountId(
    req: operations.PatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{bankAccountId}", req.pathParams);

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
        const res: operations.PatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardizationBankFeedsAccountsContractBankFeedBankAccount = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCompaniesCompanyIdConnections - Connect a data source to a company
   *
   * Creates a data connection in PendingAuth status for the specified company and integration.
   * In the request body, specify the four-digit platformKey of the integration to link the company to as a text string.
   * Use GET /integrations to view all platformKeys. 
   * **Note: the required request body for this endpoint has been recently changed; see details [here](https://docs.codat.io/changelog/44714-deprecation-string-request-create-connections-endpoint).**
  **/
  postCompaniesCompanyIdConnections(
    req: operations.PostCompaniesCompanyIdConnectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCompaniesCompanyIdConnectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCompaniesCompanyIdConnectionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections", req.pathParams);

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
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCompaniesCompanyIdConnectionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsCompanyDataConnection = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putCompaniesCompanyIdConnectionsConnectionIdAuthorization - Put authorization information for a single data source connected to a single company.
  **/
  putCompaniesCompanyIdConnectionsConnectionIdAuthorization(
    req: operations.PutCompaniesCompanyIdConnectionsConnectionIdAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCompaniesCompanyIdConnectionsConnectionIdAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCompaniesCompanyIdConnectionsConnectionIdAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/authorization", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutCompaniesCompanyIdConnectionsConnectionIdAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsCompanyDataConnection = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts - Put BankFeed BankAccounts for a single data source connected to a single company.
  **/
  putCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts(
    req: operations.PutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatStandardizationBankFeedsAccountsContractBankFeedBankAccounts = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
