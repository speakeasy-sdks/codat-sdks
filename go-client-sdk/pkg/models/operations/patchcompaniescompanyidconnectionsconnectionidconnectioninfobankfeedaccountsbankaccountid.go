package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDPathParams struct {
	BankAccountID string `pathParam:"style=simple,explode=false,name=bankAccountId"`
	CompanyID     string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID  string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDRequest struct {
	PathParams PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDPathParams
	Request    *shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount `request:"mediaType=application/json"`
	Security   PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDSecurity
}

type PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDResponse struct {
	CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount *shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount
	ContentType                                                      string
	StatusCode                                                       int64
}
