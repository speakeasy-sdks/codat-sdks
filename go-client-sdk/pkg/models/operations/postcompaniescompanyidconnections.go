package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PostCompaniesCompanyIDConnectionsRequestBody struct {
	PlatformKey *string `json:"platformKey,omitempty"`
}

type PostCompaniesCompanyIDConnectionsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsRequest struct {
	PathParams PostCompaniesCompanyIDConnectionsPathParams
	Request    *PostCompaniesCompanyIDConnectionsRequestBody `request:"mediaType=application/json"`
	Security   PostCompaniesCompanyIDConnectionsSecurity
}

type PostCompaniesCompanyIDConnectionsResponse struct {
	CodatPublicAPIModelsCompanyDataConnection *shared.CodatPublicAPIModelsCompanyDataConnection
	ContentType                               string
	StatusCode                                int64
}
