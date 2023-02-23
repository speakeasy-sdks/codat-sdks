package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationRequest struct {
	PathParams PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationResponse struct {
	CodatPublicAPIModelsCompanyDataConnection *shared.CodatPublicAPIModelsCompanyDataConnection
	ContentType                               string
	StatusCode                                int
}
