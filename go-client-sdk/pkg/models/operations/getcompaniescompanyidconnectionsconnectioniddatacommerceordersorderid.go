package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersOrderIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	OrderID      string `pathParam:"style=simple,explode=false,name=orderId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersOrderIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersOrderIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersOrderIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersOrderIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersOrderIDResponse struct {
	CodatDataContractsDatasetsCommerceOrder *shared.CodatDataContractsDatasetsCommerceOrder
	ContentType                             string
	StatusCode                              int
}
