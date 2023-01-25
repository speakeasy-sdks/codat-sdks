package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsRequest struct {
	PathParams  GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsPathParams
	QueryParams GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsQueryParams
	Security    GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsSecurity
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsResponse struct {
	CodatDataContractsDatasetsBankStatementLinePagedResponseModel *shared.CodatDataContractsDatasetsBankStatementLinePagedResponseModel
	ContentType                                                   string
	StatusCode                                                    int64
}
