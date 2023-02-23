package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PatchSettingsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PatchSettingsRequest struct {
	Request  *shared.CodatPublicAPIModelsClientsClientSettingsPatchModel `request:"mediaType=application/json"`
	Security PatchSettingsSecurity
}

type PatchSettingsResponse struct {
	CodatPublicAPIModelsClientsClientSettingsModel *shared.CodatPublicAPIModelsClientsClientSettingsModel
	ContentType                                    string
	StatusCode                                     int
}
