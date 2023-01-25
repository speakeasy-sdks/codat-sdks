import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Push {
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
   * getCompaniesCompanyIdConnectionsConnectionIdOptionsDataType - Gets the push options for the given data type
  **/
  getCompaniesCompanyIdConnectionsConnectionIdOptionsDataType(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdOptionsDataTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdOptionsDataTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsConnectionIdOptionsDataTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/options/{dataType}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdOptionsDataTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsPushPushOption = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdPush - Gets paged push operation records
  **/
  getCompaniesCompanyIdPush(
    req: operations.GetCompaniesCompanyIdPushRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdPushResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdPushRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/push", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdPushResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.systemObjectPushOperationPagedResponseModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdPushPushOperationKey - Gets a single push operation record
  **/
  getCompaniesCompanyIdPushPushOperationKey(
    req: operations.GetCompaniesCompanyIdPushPushOperationKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdPushPushOperationKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdPushPushOperationKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/push/{pushOperationKey}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdPushPushOperationKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.systemObjectPushOperation = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
