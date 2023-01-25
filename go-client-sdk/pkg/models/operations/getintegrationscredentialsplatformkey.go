package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetIntegrationsCredentialsPlatformKeyPathParams struct {
	PlatformKey string `pathParam:"style=simple,explode=false,name=platformKey"`
}

type GetIntegrationsCredentialsPlatformKeySecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetIntegrationsCredentialsPlatformKeyRequest struct {
	PathParams GetIntegrationsCredentialsPlatformKeyPathParams
	Security   GetIntegrationsCredentialsPlatformKeySecurity
}

type GetIntegrationsCredentialsPlatformKeyResponse struct {
	CodatPublicAPIModelsPlatformCredentialsPlatformCredentials map[string]interface{}
	ContentType                                                string
	StatusCode                                                 int64
}
