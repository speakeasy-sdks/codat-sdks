import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class DataTypes {
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
   * getCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptions - Gets all available push options for the given data type
  **/
  getCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptions(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/dataTypes/{dataType}/options", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsDataPushOptionsAggregate = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPost - Gets the POST push options for the given data type
  **/
  getCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPost(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/dataTypes/{dataType}/options/POST", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPostResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPut - Gets the PUT push options for the given data type
  **/
  getCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPut(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/dataTypes/{dataType}/options/PUT", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPutResponse = {statusCode: httpRes.status, contentType: contentType};
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

}
