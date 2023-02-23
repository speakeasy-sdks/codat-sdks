package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetIntegrationsCredentialsPlatformKeyPathParams struct {
	PlatformKey string `pathParam:"style=simple,explode=false,name=platformKey"`
}

type GetIntegrationsCredentialsPlatformKeySecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetIntegrationsCredentialsPlatformKeyRequest struct {
	PathParams GetIntegrationsCredentialsPlatformKeyPathParams
	Security   GetIntegrationsCredentialsPlatformKeySecurity
}

type GetIntegrationsCredentialsPlatformKeyResponse struct {
	ContentType                                                   string
	StatusCode                                                    int
	GetIntegrationsCredentialsPlatformKey200ApplicationJSONObject map[string]interface{}
}
