package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsPathParams struct {
	AccountID    string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsResponse struct {
	CodatDataContractsPushPushOption *shared.CodatDataContractsPushPushOption
	ContentType                      string
	StatusCode                       int
}
