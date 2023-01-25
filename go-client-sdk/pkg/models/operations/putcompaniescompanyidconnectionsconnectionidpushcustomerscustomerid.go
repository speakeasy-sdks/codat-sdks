package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	CustomerID   string `pathParam:"style=simple,explode=false,name=customerId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDQueryParams struct {
	ForceUpdate      *bool  `queryParam:"style=form,explode=true,name=forceUpdate"`
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDRequest struct {
	PathParams  PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDPathParams
	QueryParams PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDQueryParams
	Request     *shared.CodatDataContractsDatasetsCustomer `request:"mediaType=application/json"`
	Security    PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDResponse struct {
	CodatDataContractsDatasetsCustomerPushOperation *shared.CodatDataContractsDatasetsCustomerPushOperation
	ContentType                                     string
	StatusCode                                      int64
}
