package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsTransactionIDPathParams struct {
	CompanyID     string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID  string `pathParam:"style=simple,explode=false,name=connectionId"`
	TransactionID string `pathParam:"style=simple,explode=false,name=transactionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsTransactionIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsTransactionIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsTransactionIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsTransactionIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsTransactionIDResponse struct {
	CodatDataContractsDatasetsCommerceTransaction *shared.CodatDataContractsDatasetsCommerceTransaction
	ContentType                                   string
	StatusCode                                    int
}
