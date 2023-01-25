package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsRequest struct {
	PathParams PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsPathParams
	Request    []shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount `request:"mediaType=application/json"`
	Security   PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse struct {
	CodatStandardizationBankFeedsAccountsContractBankFeedBankAccounts []shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount
	ContentType                                                       string
	StatusCode                                                        int64
}
