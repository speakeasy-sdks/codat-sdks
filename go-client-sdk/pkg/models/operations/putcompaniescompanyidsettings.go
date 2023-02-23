package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutCompaniesCompanyIDSettingsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PutCompaniesCompanyIDSettingsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutCompaniesCompanyIDSettingsRequest struct {
	PathParams PutCompaniesCompanyIDSettingsPathParams
	Request    *shared.CodatClientsAPIClientContractCompanySettings `request:"mediaType=application/json"`
	Security   PutCompaniesCompanyIDSettingsSecurity
}

type PutCompaniesCompanyIDSettingsResponse struct {
	CodatPublicAPIModelsCompanyCompanySettings *shared.CodatPublicAPIModelsCompanyCompanySettings
	ContentType                                string
	StatusCode                                 int
}
