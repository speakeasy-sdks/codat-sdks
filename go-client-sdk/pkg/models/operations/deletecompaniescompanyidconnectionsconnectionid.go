package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type DeleteCompaniesCompanyIDConnectionsConnectionIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type DeleteCompaniesCompanyIDConnectionsConnectionIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type DeleteCompaniesCompanyIDConnectionsConnectionIDRequest struct {
	PathParams DeleteCompaniesCompanyIDConnectionsConnectionIDPathParams
	Security   DeleteCompaniesCompanyIDConnectionsConnectionIDSecurity
}

type DeleteCompaniesCompanyIDConnectionsConnectionIDResponse struct {
	ContentType                                                              string
	StatusCode                                                               int
	DeleteCompaniesCompanyIDConnectionsConnectionID200ApplicationJSONBoolean *bool
}
