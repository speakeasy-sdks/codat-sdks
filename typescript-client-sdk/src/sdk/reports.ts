import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Reports {
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
   * getCompaniesCompanyIdReportsAgedCreditor - Gets the aged creditor report for a company.
  **/
  getCompaniesCompanyIdReportsAgedCreditor(
    req: operations.GetCompaniesCompanyIdReportsAgedCreditorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsAgedCreditorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsAgedCreditorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/agedCreditor", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdReportsAgedCreditorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.codatDataContractsDatasetsAgedCreditorOutstandingICollectionReport = plainToInstance(
                shared.CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport,
                httpRes?.data as shared.CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  getCompaniesCompanyIdReportsAgedCreditorAvailable(
    req: operations.GetCompaniesCompanyIdReportsAgedCreditorAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsAgedCreditorAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsAgedCreditorAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/agedCreditor/available", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdReportsAgedCreditorAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompaniesCompanyIdReportsAgedCreditorAvailable200ApplicationJSONBoolean = plainToInstance(
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

  
  /**
   * getCompaniesCompanyIdReportsAgedDebtor - Gets the aged debtor report for a company.
  **/
  getCompaniesCompanyIdReportsAgedDebtor(
    req: operations.GetCompaniesCompanyIdReportsAgedDebtorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsAgedDebtorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsAgedDebtorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/agedDebtor", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdReportsAgedDebtorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.codatDataContractsDatasetsAgedDebtorOutstandingICollectionReport = plainToInstance(
                shared.CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport,
                httpRes?.data as shared.CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  getCompaniesCompanyIdReportsAgedDebtorAvailable(
    req: operations.GetCompaniesCompanyIdReportsAgedDebtorAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsAgedDebtorAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsAgedDebtorAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/agedDebtor/available", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdReportsAgedDebtorAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompaniesCompanyIdReportsAgedDebtorAvailable200ApplicationJSONBoolean = plainToInstance(
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

  
  getCompaniesCompanyIdReportsEvents(
    req: operations.GetCompaniesCompanyIdReportsEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/events", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdReportsEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.codatPublicApiModelsCompanyCompanyEventStream = plainToInstance(
                shared.CodatPublicApiModelsCompanyCompanyEventStream,
                httpRes?.data as shared.CodatPublicApiModelsCompanyCompanyEventStream,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
