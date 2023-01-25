package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsQueryParams struct {
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsRequest struct {
	PathParams  GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsPathParams
	QueryParams GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsQueryParams
	Security    GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsSecurity
}

type GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsResponse struct {
	CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport *shared.CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport
	ContentType                                                            string
	StatusCode                                                             int64
}
