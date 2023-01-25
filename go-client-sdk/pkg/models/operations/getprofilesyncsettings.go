package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetProfileSyncSettingsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetProfileSyncSettingsRequest struct {
	Security GetProfileSyncSettingsSecurity
}

type GetProfileSyncSettingsResponse struct {
	CodatPublicAPIModelsClientsClientSyncSettingsModel *shared.CodatPublicAPIModelsClientsClientSyncSettingsModel
	ContentType                                        string
	StatusCode                                         int64
}
