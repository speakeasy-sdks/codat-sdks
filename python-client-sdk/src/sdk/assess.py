import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Assess:
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

    
    def get_companies_company_id_reports_enhanced_balance_sheet_accounts(self, request: operations.GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsRequest) -> operations.GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsResponse:
        r"""Gets a list of accounts with account categories per statement period, specific to balance sheet
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/reports/enhancedBalanceSheet/accounts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement])
                res.codat_assess_data_contracts_financials_statements_enhanced_financial_statement = out

        return res

    
    def get_companies_company_id_reports_enhanced_cash_flow_transactions(self, request: operations.GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsRequest) -> operations.GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsResponse:
        r"""Gets a list of banking transactions and their categories.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/reports/enhancedCashFlow/transactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport])
                res.codat_assess_data_contracts_cash_flow_transactions_cash_flow_transactions_report = out

        return res

    
    def get_companies_company_id_reports_enhanced_profit_and_loss_accounts(self, request: operations.GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsRequest) -> operations.GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsResponse:
        r"""Gets a list of accounts with account categories per statement period, specific to profit and loss
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/reports/enhancedProfitAndLoss/accounts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement])
                res.codat_assess_data_contracts_financials_statements_enhanced_financial_statement = out

        return res

    
    def get_data_assess_accounts_categories(self, request: operations.GetDataAssessAccountsCategoriesRequest) -> operations.GetDataAssessAccountsCategoriesResponse:
        r"""Gets a list of all the Codat standard categories.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data/assess/accounts/categories"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataAssessAccountsCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CodatAssessDataContractsAccountCategoriesAccountCategory]])
                res.codat_assess_data_contracts_account_categories_account_categories = out

        return res

    
    def get_data_companies_company_id_assess_data_types_data_type_data_integrity_details(self, request: operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsRequest) -> operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsResponse:
        r"""Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/details", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse])
                res.codat_data_integrity_contracts_details_transaction_details_paged_response = out

        return res

    
    def get_data_companies_company_id_assess_data_types_data_type_data_integrity_status(self, request: operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusRequest) -> operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusResponse:
        r"""Gets match status for a given company and datatype.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/status", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataIntegrityContractsMetadataMatchMetadataResponse])
                res.codat_data_integrity_contracts_metadata_match_metadata_response = out

        return res

    
    def get_data_companies_company_id_assess_data_types_data_type_data_integrity_summaries(self, request: operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesRequest) -> operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesResponse:
        r"""Gets match summary for a given company and datatype, optionally restricted by a Codat query string.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/summaries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataIntegrityContractsSummaryMatchSummariesResponse])
                res.codat_data_integrity_contracts_summary_match_summaries_response = out

        return res

    
    def get_data_companies_company_id_assess_excel(self, request: operations.GetDataCompaniesCompanyIDAssessExcelRequest) -> operations.GetDataCompaniesCompanyIDAssessExcelResponse:
        r"""Returns the status of the latest report requested.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/assess/excel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDAssessExcelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsAssessAssessExcelMeta])
                res.codat_public_api_models_assess_assess_excel_meta = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_accounting_metrics_marketing(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingResponse:
        r"""Gets the marketing metrics from an accounting source for a given company, over one or more periods of time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/accountingMetrics/marketing", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatStandardReportingContractsReport])
                res.codat_standard_reporting_contracts_report = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_accounts_categories(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesResponse:
        r"""Get account categories (suggested and confirmed) for a company connection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseModel])
                res.codat_assess_data_contracts_account_categories_account_categories_model_paged_response_model = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_accounts_account_id_categories(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse:
        r"""Gets the suggested and/or confirmed category for a specific account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel])
                res.codat_assess_data_contracts_account_categories_account_categories_model = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_commerce_metrics_customer_retention(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionResponse:
        r"""Gets the customer retention metrics for a specific company connection, over one or more periods of time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/customerRetention", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatStandardReportingContractsReport])
                res.codat_standard_reporting_contracts_report = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_commerce_metrics_lifetime_value(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueResponse:
        r"""Gets the lifetime value metric for a specific company connection, over one or more periods of time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/lifetimeValue", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatStandardReportingContractsReport])
                res.codat_standard_reporting_contracts_report = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_commerce_metrics_orders(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersResponse:
        r"""Gets the order information for a specific company connection, over one or more periods of time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/orders", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatStandardReportingContractsReport])
                res.codat_standard_reporting_contracts_report = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_commerce_metrics_refunds(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsResponse:
        r"""Gets the refunds information for a specific company connection, over one or more periods of time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/refunds", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatStandardReportingContractsReport])
                res.codat_standard_reporting_contracts_report = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_commerce_metrics_revenue(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueResponse:
        r"""Gets the revenue and revenue growth for a specific company connection, over one or more periods of time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/revenue", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatStandardReportingContractsReport])
                res.codat_standard_reporting_contracts_report = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_enhanced_balance_sheet(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetResponse:
        r"""Gets a fully categorized balance sheet statement for a given company, over one or more period(s).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatStandardReportingContractsReport])
                res.codat_standard_reporting_contracts_report = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_enhanced_profit_and_loss(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossResponse:
        r"""Gets a fully categorized profit and loss statement for a given company, over one or more period(s).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/enhancedProfitAndLoss", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatStandardReportingContractsReport])
                res.codat_standard_reporting_contracts_report = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_financial_metrics(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsResponse:
        r"""Gets all the available financial metrics for a given company, over one or more periods.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/financialMetrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet])
                res.codat_assess_data_contracts_financials_metrics_financial_metrics_data_set = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_subscriptions_mrr(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrResponse:
        r"""Gets key metrics for subscription revenue.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/mrr", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatStandardReportingContractsReport])
                res.codat_standard_reporting_contracts_report = out

        return res

    
    def get_data_companies_company_id_connections_connection_id_assess_subscriptions_process(self, request: operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessRequest) -> operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessResponse:
        r"""Gets key metrics for subscription revenue.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/process", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_data_companies_company_id_connections_connection_id_assess_accounts_categories(self, request: operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesRequest) -> operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesResponse:
        r"""Updates the categories for all or a batch of accounts for a specific connection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel]])
                res.codat_assess_data_contracts_account_categories_account_categories_models = out

        return res

    
    def patch_data_companies_company_id_connections_connection_id_assess_accounts_account_id_categories(self, request: operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesRequest) -> operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse:
        r"""Updates or removes the confirmed category of a specific account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel])
                res.codat_assess_data_contracts_account_categories_account_categories_model = out

        return res

    
    def post_data_companies_company_id_assess_excel(self, request: operations.PostDataCompaniesCompanyIDAssessExcelRequest) -> operations.PostDataCompaniesCompanyIDAssessExcelResponse:
        r"""Request an Excel report for download.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/assess/excel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDataCompaniesCompanyIDAssessExcelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsAssessAssessExcelMeta])
                res.codat_public_api_models_assess_assess_excel_meta = out

        return res

    
    def post_data_companies_company_id_assess_excel_download(self, request: operations.PostDataCompaniesCompanyIDAssessExcelDownloadRequest) -> operations.PostDataCompaniesCompanyIDAssessExcelDownloadResponse:
        r"""Download the Excel report to a local drive.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/companies/{companyId}/assess/excel/download", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDataCompaniesCompanyIDAssessExcelDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.post_data_companies_company_id_assess_excel_download_200_application_json_binary_string = out

        return res

    