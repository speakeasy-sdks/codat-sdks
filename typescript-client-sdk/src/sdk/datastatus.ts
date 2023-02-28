import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class DataStatus {
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
  
  getCompaniesCompanyIdDataStatus(
    req: operations.GetCompaniesCompanyIdDataStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/dataStatus", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdDataStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompaniesCompanyIdDataStatus200ApplicationJSONObject = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
