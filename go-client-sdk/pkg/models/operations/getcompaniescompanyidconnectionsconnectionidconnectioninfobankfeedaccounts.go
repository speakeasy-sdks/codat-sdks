package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse struct {
	CodatStandardizationBankFeedsAccountsContractBankFeedBankAccounts []shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount
	ContentType                                                       string
	StatusCode                                                        int
}
