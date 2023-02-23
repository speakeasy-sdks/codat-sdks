import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class PurchaseOrders {
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
  
  getCompaniesCompanyIdDataPurchaseOrders(
    req: operations.GetCompaniesCompanyIdDataPurchaseOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataPurchaseOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataPurchaseOrdersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/purchaseOrders", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdDataPurchaseOrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsPurchaseOrderPagedResponseModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderId(
    req: operations.GetCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/purchaseOrders/{purchaseOrderId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsPurchaseOrder = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrders - Posts a new purchase order to the accounting package for a given company.
  **/
  postCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrders(
    req: operations.PostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/purchaseOrders", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsPurchaseOrderPushOperation = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderId - Posts an updated purchase order to the accounting package for a given company.
  **/
  putCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderId(
    req: operations.PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/purchaseOrders/{purchaseOrderId}", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsPurchaseOrderPushOperation = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
