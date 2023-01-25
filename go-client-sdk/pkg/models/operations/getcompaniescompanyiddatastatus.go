package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataStatusPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataStatusSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataStatusRequest struct {
	PathParams GetCompaniesCompanyIDDataStatusPathParams
	Security   GetCompaniesCompanyIDDataStatusSecurity
}

type GetCompaniesCompanyIDDataStatusResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetCompaniesCompanyIDDataStatus200ApplicationJSONObject map[string]shared.CodatPublicAPIModelsDataDataStatus
}
