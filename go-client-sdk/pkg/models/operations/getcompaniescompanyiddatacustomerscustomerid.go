package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataCustomersCustomerIDPathParams struct {
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
}

type GetCompaniesCompanyIDDataCustomersCustomerIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataCustomersCustomerIDRequest struct {
	PathParams GetCompaniesCompanyIDDataCustomersCustomerIDPathParams
	Security   GetCompaniesCompanyIDDataCustomersCustomerIDSecurity
}

type GetCompaniesCompanyIDDataCustomersCustomerIDResponse struct {
	CodatDataContractsDatasetsCustomer *shared.CodatDataContractsDatasetsCustomer
	ContentType                        string
	StatusCode                         int64
}
