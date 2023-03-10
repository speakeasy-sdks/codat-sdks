package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	LocationID   string `pathParam:"style=simple,explode=false,name=locationId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDResponse struct {
	CodatDataContractsDatasetsCommerceLocation *shared.CodatDataContractsDatasetsCommerceLocation
	ContentType                                string
	StatusCode                                 int64
}
