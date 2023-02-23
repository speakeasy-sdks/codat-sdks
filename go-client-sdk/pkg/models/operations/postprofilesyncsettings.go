package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostProfileSyncSettingsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostProfileSyncSettingsRequest struct {
	Request  *shared.CodatClientsAPIClientContractClientSyncSettings `request:"mediaType=application/json"`
	Security PostProfileSyncSettingsSecurity
}

type PostProfileSyncSettingsResponse struct {
	ContentType string
	StatusCode  int
}
