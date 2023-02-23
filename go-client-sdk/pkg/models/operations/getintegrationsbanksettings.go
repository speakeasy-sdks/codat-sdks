package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetIntegrationsBankSettingsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetIntegrationsBankSettingsRequest struct {
	Security GetIntegrationsBankSettingsSecurity
}

type GetIntegrationsBankSettingsResponse struct {
	CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset *shared.CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset
	ContentType                                                         string
	StatusCode                                                          int
}
