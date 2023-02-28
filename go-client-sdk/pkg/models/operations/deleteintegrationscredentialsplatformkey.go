package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type DeleteIntegrationsCredentialsPlatformKeyPathParams struct {
	PlatformKey string `pathParam:"style=simple,explode=false,name=platformKey"`
}

type DeleteIntegrationsCredentialsPlatformKeySecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type DeleteIntegrationsCredentialsPlatformKeyRequest struct {
	PathParams DeleteIntegrationsCredentialsPlatformKeyPathParams
	Security   DeleteIntegrationsCredentialsPlatformKeySecurity
}

type DeleteIntegrationsCredentialsPlatformKeyResponse struct {
	ContentType                                                      string
	StatusCode                                                       int
	DeleteIntegrationsCredentialsPlatformKey200ApplicationJSONObject map[string]interface{}
}
