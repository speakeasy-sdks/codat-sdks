package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsPathParams struct {
	AccountID    string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsResponse struct {
	CodatDataContractsDatasetsBankTransactionPagedResponseModel *shared.CodatDataContractsDatasetsBankTransactionPagedResponseModel
	ContentType                                                 string
	StatusCode                                                  int64
}
