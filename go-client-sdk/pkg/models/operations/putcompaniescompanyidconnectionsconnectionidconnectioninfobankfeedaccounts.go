package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsRequest struct {
	PathParams PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsPathParams
	Request    []shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount `request:"mediaType=application/json"`
	Security   PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse struct {
	CodatStandardizationBankFeedsAccountsContractBankFeedBankAccounts []shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount
	ContentType                                                       string
	StatusCode                                                        int
}
