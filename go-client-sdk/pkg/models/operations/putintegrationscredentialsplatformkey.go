package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutIntegrationsCredentialsPlatformKeyPathParams struct {
	PlatformKey string `pathParam:"style=simple,explode=false,name=platformKey"`
}

type PutIntegrationsCredentialsPlatformKeySecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutIntegrationsCredentialsPlatformKeyRequest struct {
	PathParams PutIntegrationsCredentialsPlatformKeyPathParams
	Request    map[string]string `request:"mediaType=application/json"`
	Security   PutIntegrationsCredentialsPlatformKeySecurity
}

type PutIntegrationsCredentialsPlatformKeyResponse struct {
	ContentType                                                   string
	StatusCode                                                    int
	PutIntegrationsCredentialsPlatformKey200ApplicationJSONObject map[string]interface{}
}
