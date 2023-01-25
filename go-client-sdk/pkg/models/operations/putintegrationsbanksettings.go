package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutIntegrationsBankSettingsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutIntegrationsBankSettingsRequest struct {
	Request  *shared.CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset `request:"mediaType=application/json"`
	Security PutIntegrationsBankSettingsSecurity
}

type PutIntegrationsBankSettingsResponse struct {
	CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset *shared.CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset
	ContentType                                                         string
	StatusCode                                                          int64
}
