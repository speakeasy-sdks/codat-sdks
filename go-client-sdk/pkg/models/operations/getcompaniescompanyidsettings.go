package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDSettingsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDSettingsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDSettingsRequest struct {
	PathParams GetCompaniesCompanyIDSettingsPathParams
	Security   GetCompaniesCompanyIDSettingsSecurity
}

type GetCompaniesCompanyIDSettingsResponse struct {
	CodatPublicAPIModelsCompanyCompanySettings *shared.CodatPublicAPIModelsCompanyCompanySettings
	ContentType                                string
	StatusCode                                 int64
}
