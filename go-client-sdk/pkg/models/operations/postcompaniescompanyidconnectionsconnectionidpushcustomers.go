package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersQueryParams
	Request     *shared.CodatDataContractsDatasetsCustomer `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersResponse struct {
	CodatDataContractsDatasetsCustomerPushOperation *shared.CodatDataContractsDatasetsCustomerPushOperation
	ContentType                                     string
	StatusCode                                      int64
}
