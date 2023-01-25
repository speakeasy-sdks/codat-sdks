package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetIntegrationsBankSettingsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetIntegrationsBankSettingsRequest struct {
	Security GetIntegrationsBankSettingsSecurity
}

type GetIntegrationsBankSettingsResponse struct {
	CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset *shared.CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset
	ContentType                                                         string
	StatusCode                                                          int64
}
