package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PatchCompaniesCompanyIDConnectionsConnectionIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PatchCompaniesCompanyIDConnectionsConnectionIDRequestBody struct {
	Status *string `json:"status,omitempty"`
}

type PatchCompaniesCompanyIDConnectionsConnectionIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchCompaniesCompanyIDConnectionsConnectionIDRequest struct {
	PathParams PatchCompaniesCompanyIDConnectionsConnectionIDPathParams
	Request    *PatchCompaniesCompanyIDConnectionsConnectionIDRequestBody `request:"mediaType=application/json"`
	Security   PatchCompaniesCompanyIDConnectionsConnectionIDSecurity
}

type PatchCompaniesCompanyIDConnectionsConnectionIDResponse struct {
	CodatPublicAPIModelsCompanyDataConnection *shared.CodatPublicAPIModelsCompanyDataConnection
	ContentType                               string
	StatusCode                                int64
}
