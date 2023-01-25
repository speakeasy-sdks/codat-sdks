package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDResponse struct {
	CodatPublicAPIModelsCompanyDataConnection *shared.CodatPublicAPIModelsCompanyDataConnection
	ContentType                               string
	StatusCode                                int64
}
