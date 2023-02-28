package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountIDPathParams struct {
	AccountID    string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountIDResponse struct {
	CodatDataContractsDatasetsBankingAccount *shared.CodatDataContractsDatasetsBankingAccount
	ContentType                              string
	StatusCode                               int
}
