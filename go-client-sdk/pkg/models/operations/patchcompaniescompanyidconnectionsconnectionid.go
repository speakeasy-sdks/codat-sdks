package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PatchCompaniesCompanyIDConnectionsConnectionIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PatchCompaniesCompanyIDConnectionsConnectionIDRequestBody struct {
	Status *string `json:"status,omitempty"`
}

type PatchCompaniesCompanyIDConnectionsConnectionIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PatchCompaniesCompanyIDConnectionsConnectionIDRequest struct {
	PathParams PatchCompaniesCompanyIDConnectionsConnectionIDPathParams
	Request    *PatchCompaniesCompanyIDConnectionsConnectionIDRequestBody `request:"mediaType=application/json"`
	Security   PatchCompaniesCompanyIDConnectionsConnectionIDSecurity
}

type PatchCompaniesCompanyIDConnectionsConnectionIDResponse struct {
	CodatPublicAPIModelsCompanyDataConnection *shared.CodatPublicAPIModelsCompanyDataConnection
	ContentType                               string
	StatusCode                                int
}
