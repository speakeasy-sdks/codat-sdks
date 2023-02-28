package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsResponse struct {
	CodatDataContractsDatasetsBankingTransactionPagedResponseModel *shared.CodatDataContractsDatasetsBankingTransactionPagedResponseModel
	ContentType                                                    string
	StatusCode                                                     int
}
