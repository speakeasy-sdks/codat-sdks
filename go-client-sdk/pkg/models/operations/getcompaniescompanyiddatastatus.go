package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataStatusPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataStatusSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataStatusRequest struct {
	PathParams GetCompaniesCompanyIDDataStatusPathParams
	Security   GetCompaniesCompanyIDDataStatusSecurity
}

type GetCompaniesCompanyIDDataStatusResponse struct {
	ContentType                                             string
	StatusCode                                              int
	GetCompaniesCompanyIDDataStatus200ApplicationJSONObject map[string]shared.CodatPublicAPIModelsDataDataStatus
}
