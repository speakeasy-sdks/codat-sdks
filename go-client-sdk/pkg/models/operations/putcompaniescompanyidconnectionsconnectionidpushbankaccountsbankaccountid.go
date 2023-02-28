package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDPathParams struct {
	BankAccountID string `pathParam:"style=simple,explode=false,name=bankAccountId"`
	CompanyID     string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID  string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDQueryParams struct {
	ForceUpdate      *bool `queryParam:"style=form,explode=true,name=forceUpdate"`
	TimeoutInMinutes *int  `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDRequest struct {
	PathParams  PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDPathParams
	QueryParams PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDQueryParams
	Request     *shared.CodatDataContractsDatasetsBankAccount `request:"mediaType=application/json"`
	Security    PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDResponse struct {
	CodatDataContractsDatasetsBankAccountPushOperation *shared.CodatDataContractsDatasetsBankAccountPushOperation
	ContentType                                        string
	StatusCode                                         int
}
