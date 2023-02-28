package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetProfileSyncSettingsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetProfileSyncSettingsRequest struct {
	Security GetProfileSyncSettingsSecurity
}

type GetProfileSyncSettingsResponse struct {
	CodatPublicAPIModelsClientsClientSyncSettingsModel *shared.CodatPublicAPIModelsClientsClientSyncSettingsModel
	ContentType                                        string
	StatusCode                                         int
}
