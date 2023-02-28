package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutIntegrationsBankSettingsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutIntegrationsBankSettingsRequest struct {
	Request  *shared.CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset `request:"mediaType=application/json"`
	Security PutIntegrationsBankSettingsSecurity
}

type PutIntegrationsBankSettingsResponse struct {
	CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset *shared.CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset
	ContentType                                                         string
	StatusCode                                                          int
}
