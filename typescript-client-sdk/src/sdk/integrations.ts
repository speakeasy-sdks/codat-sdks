import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Integrations {
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
   * deleteIntegrationsCredentialsPlatformKey - Delete credentials used to authenticate with an accounting platform
  **/
  deleteIntegrationsCredentialsPlatformKey(
    req: operations.DeleteIntegrationsCredentialsPlatformKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteIntegrationsCredentialsPlatformKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteIntegrationsCredentialsPlatformKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/credentials/{platformKey}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteIntegrationsCredentialsPlatformKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsPlatformCredentialsPlatformCredentials = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  getIntegrations(
    req: operations.GetIntegrationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/integrations";
    
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
        const res: operations.GetIntegrationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  getIntegrationsBankSettings(
    req: operations.GetIntegrationsBankSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsBankSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsBankSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/integrations/bankSettings";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationsBankSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsClientsBankingSettingsModelsBankSettingsDataset = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getIntegrationsCredentialsPlatformKey - Fetch credentials required to authenticate with an accounting platform.
   *
   * Used to determine presence and version of credentials. Due to masking the credentials returned cannot be used
   * to access the API.
  **/
  getIntegrationsCredentialsPlatformKey(
    req: operations.GetIntegrationsCredentialsPlatformKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsCredentialsPlatformKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsCredentialsPlatformKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/credentials/{platformKey}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationsCredentialsPlatformKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsPlatformCredentialsPlatformCredentials = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  getIntegrationsPlatformKey(
    req: operations.GetIntegrationsPlatformKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsPlatformKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsPlatformKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/{platformKey}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationsPlatformKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsPlatformCredentialsPlatformSourceModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  getIntegrationsPlatformKeyBranding(
    req: operations.GetIntegrationsPlatformKeyBrandingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsPlatformKeyBrandingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsPlatformKeyBrandingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/{platformKey}/branding", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationsPlatformKeyBrandingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsClientsIntegrationBrandingModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  putIntegrationsBankSettings(
    req: operations.PutIntegrationsBankSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutIntegrationsBankSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutIntegrationsBankSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/integrations/bankSettings";

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
        const res: operations.PutIntegrationsBankSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsClientsBankingSettingsModelsBankSettingsDataset = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putIntegrationsCredentialsPlatformKey - Update credentials required to authenticate with an accounting platform
  **/
  putIntegrationsCredentialsPlatformKey(
    req: operations.PutIntegrationsCredentialsPlatformKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutIntegrationsCredentialsPlatformKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutIntegrationsCredentialsPlatformKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/credentials/{platformKey}", req.pathParams);

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
        const res: operations.PutIntegrationsCredentialsPlatformKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsPlatformCredentialsPlatformCredentials = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  putIntegrationsPlatformKeyEnabled(
    req: operations.PutIntegrationsPlatformKeyEnabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutIntegrationsPlatformKeyEnabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutIntegrationsPlatformKeyEnabledRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/{platformKey}/enabled", req.pathParams);

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
        const res: operations.PutIntegrationsPlatformKeyEnabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatPublicApiModelsPlatformCredentialsPlatformSourceModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
