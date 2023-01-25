package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type DeleteCompaniesCompanyIDConnectionsConnectionIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type DeleteCompaniesCompanyIDConnectionsConnectionIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteCompaniesCompanyIDConnectionsConnectionIDRequest struct {
	PathParams DeleteCompaniesCompanyIDConnectionsConnectionIDPathParams
	Security   DeleteCompaniesCompanyIDConnectionsConnectionIDSecurity
}

type DeleteCompaniesCompanyIDConnectionsConnectionIDResponse struct {
	ContentType                                                              string
	StatusCode                                                               int64
	DeleteCompaniesCompanyIDConnectionsConnectionID200ApplicationJSONBoolean *bool
}
