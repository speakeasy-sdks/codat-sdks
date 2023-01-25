package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostProfileSyncSettingsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostProfileSyncSettingsRequest struct {
	Request  *shared.CodatClientsAPIClientContractClientSyncSettings `request:"mediaType=application/json"`
	Security PostProfileSyncSettingsSecurity
}

type PostProfileSyncSettingsResponse struct {
	ContentType string
	StatusCode  int64
}
