package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsTransactionIDPathParams struct {
	CompanyID     string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID  string `pathParam:"style=simple,explode=false,name=connectionId"`
	TransactionID string `pathParam:"style=simple,explode=false,name=transactionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsTransactionIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsTransactionIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsTransactionIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsTransactionIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsTransactionIDResponse struct {
	CodatDataContractsDatasetsBankingTransaction *shared.CodatDataContractsDatasetsBankingTransaction
	ContentType                                  string
	StatusCode                                   int64
}
