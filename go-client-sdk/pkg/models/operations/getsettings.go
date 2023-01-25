package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetSettingsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetSettingsRequest struct {
	Security GetSettingsSecurity
}

type GetSettingsResponse struct {
	CodatPublicAPIModelsClientsClientSettingsModel *shared.CodatPublicAPIModelsClientsClientSettingsModel
	ContentType                                    string
	StatusCode                                     int64
}
