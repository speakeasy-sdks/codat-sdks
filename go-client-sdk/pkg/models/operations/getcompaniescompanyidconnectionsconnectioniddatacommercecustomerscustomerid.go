package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersCustomerIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	CustomerID   string `pathParam:"style=simple,explode=false,name=customerId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersCustomerIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersCustomerIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersCustomerIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersCustomerIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersCustomerIDResponse struct {
	CodatDataContractsDatasetsCommerceCustomer *shared.CodatDataContractsDatasetsCommerceCustomer
	ContentType                                string
	StatusCode                                 int64
}
