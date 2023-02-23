package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductsProductIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	ProductID    string `pathParam:"style=simple,explode=false,name=productId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductsProductIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductsProductIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductsProductIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductsProductIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductsProductIDResponse struct {
	CodatDataContractsDatasetsCommerceProduct *shared.CodatDataContractsDatasetsCommerceProduct
	ContentType                               string
	StatusCode                                int
}
