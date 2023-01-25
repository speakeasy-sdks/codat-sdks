package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PatchSettingsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchSettingsRequest struct {
	Request  *shared.CodatPublicAPIModelsClientsClientSettingsPatchModel `request:"mediaType=application/json"`
	Security PatchSettingsSecurity
}

type PatchSettingsResponse struct {
	CodatPublicAPIModelsClientsClientSettingsModel *shared.CodatPublicAPIModelsClientsClientSettingsModel
	ContentType                                    string
	StatusCode                                     int64
}
