package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductCategoriesProductIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	ProductID    string `pathParam:"style=simple,explode=false,name=productId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductCategoriesProductIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductCategoriesProductIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductCategoriesProductIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductCategoriesProductIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductCategoriesProductIDResponse struct {
	CodatDataContractsDatasetsCommerceProductCategory *shared.CodatDataContractsDatasetsCommerceProductCategory
	ContentType                                       string
	StatusCode                                        int64
}
