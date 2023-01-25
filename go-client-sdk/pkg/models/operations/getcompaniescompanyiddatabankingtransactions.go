package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBankingTransactionsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBankingTransactionsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataBankingTransactionsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataBankingTransactionsRequest struct {
	PathParams  GetCompaniesCompanyIDDataBankingTransactionsPathParams
	QueryParams GetCompaniesCompanyIDDataBankingTransactionsQueryParams
	Security    GetCompaniesCompanyIDDataBankingTransactionsSecurity
}

type GetCompaniesCompanyIDDataBankingTransactionsResponse struct {
	CodatDataContractsDatasetsBankingTransactionPagedResponseModel *shared.CodatDataContractsDatasetsBankingTransactionPagedResponseModel
	ContentType                                                    string
	StatusCode                                                     int64
}
