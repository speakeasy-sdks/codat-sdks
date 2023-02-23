package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetSettingsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetSettingsRequest struct {
	Security GetSettingsSecurity
}

type GetSettingsResponse struct {
	CodatPublicAPIModelsClientsClientSettingsModel *shared.CodatPublicAPIModelsClientsClientSettingsModel
	ContentType                                    string
	StatusCode                                     int
}
