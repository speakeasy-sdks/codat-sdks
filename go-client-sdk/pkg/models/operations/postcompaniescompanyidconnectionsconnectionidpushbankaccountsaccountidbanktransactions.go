package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsPathParams struct {
	AccountID    string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsQueryParams struct {
	AllowSyncOnPushComplete *bool  `queryParam:"style=form,explode=true,name=allowSyncOnPushComplete"`
	TimeoutInMinutes        *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsQueryParams
	Request     *shared.CodatDataContractsDatasetsBankTransactions `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsResponse struct {
	CodatDataContractsDatasetsBankTransactionsPushOperation *shared.CodatDataContractsDatasetsBankTransactionsPushOperation
	ContentType                                             string
	StatusCode                                              int64
}
