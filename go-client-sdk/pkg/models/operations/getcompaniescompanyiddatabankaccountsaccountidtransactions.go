package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsRequest struct {
	PathParams  GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsPathParams
	QueryParams GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsQueryParams
	Security    GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsSecurity
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsResponse struct {
	CodatDataContractsDatasetsBankStatementLinePagedResponseModel *shared.CodatDataContractsDatasetsBankStatementLinePagedResponseModel
	ContentType                                                   string
	StatusCode                                                    int
}
