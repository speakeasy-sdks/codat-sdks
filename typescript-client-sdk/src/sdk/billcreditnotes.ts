import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class BillCreditNotes {
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
   * getCompaniesCompanyIdDataBillCreditNotes - Gets a list of all bill credit notes for a company, with pagination
  **/
  getCompaniesCompanyIdDataBillCreditNotes(
    req: operations.GetCompaniesCompanyIdDataBillCreditNotesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataBillCreditNotesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataBillCreditNotesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/billCreditNotes", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdDataBillCreditNotesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsBillCreditNotePagedResponseModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteId - Gets a single billCreditNote corresponding to the supplied Id
  **/
  getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteId(
    req: operations.GetCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/billCreditNotes/{billCreditNoteId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsBillCreditNote = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotes - Posts a new billCreditNote to the accounting package for a given company.
  **/
  postCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotes(
    req: operations.PostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/billCreditNotes", req.pathParams);

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
        const res: operations.PostCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsBillCreditNotePushOperation = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteId - Posts an updated billCreditNote to the accounting package for a given company.
  **/
  putCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteId(
    req: operations.PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/billCreditNotes/{billCreditNoteId}", req.pathParams);

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
        const res: operations.PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.codatDataContractsDatasetsBillCreditNotePushOperation = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
