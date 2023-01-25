import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Financials:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_companies_company_id_data_financials_balance_sheet(self, request: operations.GetCompaniesCompanyIDDataFinancialsBalanceSheetRequest) -> operations.GetCompaniesCompanyIDDataFinancialsBalanceSheetResponse:
        r"""Gets the latest balance sheet for a company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/financials/balanceSheet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataFinancialsBalanceSheetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsDataBalanceSheetResponse])
                res.codat_public_api_models_data_balance_sheet_response = out

        return res

    
    def get_companies_company_id_data_financials_cash_flow_statement(self, request: operations.GetCompaniesCompanyIDDataFinancialsCashFlowStatementRequest) -> operations.GetCompaniesCompanyIDDataFinancialsCashFlowStatementResponse:
        r"""Gets the latest cash flow statement for a company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/financials/cashFlowStatement", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataFinancialsCashFlowStatementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsDataCashFlowStatementResponse])
                res.codat_public_api_models_data_cash_flow_statement_response = out

        return res

    
    def get_companies_company_id_data_financials_profit_and_loss(self, request: operations.GetCompaniesCompanyIDDataFinancialsProfitAndLossRequest) -> operations.GetCompaniesCompanyIDDataFinancialsProfitAndLossResponse:
        r"""Gets the latest profit and loss for a company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/financials/profitAndLoss", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataFinancialsProfitAndLossResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsDataProfitAndLossResponse])
                res.codat_public_api_models_data_profit_and_loss_response = out

        return res

    