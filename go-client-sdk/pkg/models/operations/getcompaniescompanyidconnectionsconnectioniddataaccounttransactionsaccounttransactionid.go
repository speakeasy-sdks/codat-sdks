package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDPathParams struct {
	AccountTransactionID string `pathParam:"style=simple,explode=false,name=accountTransactionId"`
	CompanyID            string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID         string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDResponse struct {
	CodatDataContractsDatasetsAccountTransaction *shared.CodatDataContractsDatasetsAccountTransaction
	ContentType                                  string
	StatusCode                                   int
}
