package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDPathParams struct {
	AccountID    string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDResponse struct {
	CodatDataContractsDatasetsBankAccount *shared.CodatDataContractsDatasetsBankAccount
	ContentType                           string
	StatusCode                            int64
}
