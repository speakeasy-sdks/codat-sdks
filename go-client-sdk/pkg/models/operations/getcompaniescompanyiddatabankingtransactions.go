package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBankingTransactionsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBankingTransactionsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataBankingTransactionsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataBankingTransactionsRequest struct {
	PathParams  GetCompaniesCompanyIDDataBankingTransactionsPathParams
	QueryParams GetCompaniesCompanyIDDataBankingTransactionsQueryParams
	Security    GetCompaniesCompanyIDDataBankingTransactionsSecurity
}

type GetCompaniesCompanyIDDataBankingTransactionsResponse struct {
	CodatDataContractsDatasetsBankingTransactionPagedResponseModel *shared.CodatDataContractsDatasetsBankingTransactionPagedResponseModel
	ContentType                                                    string
	StatusCode                                                     int
}
