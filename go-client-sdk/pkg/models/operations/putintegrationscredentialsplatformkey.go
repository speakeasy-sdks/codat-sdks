package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutIntegrationsCredentialsPlatformKeyPathParams struct {
	PlatformKey string `pathParam:"style=simple,explode=false,name=platformKey"`
}

type PutIntegrationsCredentialsPlatformKeySecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutIntegrationsCredentialsPlatformKeyRequest struct {
	PathParams PutIntegrationsCredentialsPlatformKeyPathParams
	Request    map[string]string `request:"mediaType=application/json"`
	Security   PutIntegrationsCredentialsPlatformKeySecurity
}

type PutIntegrationsCredentialsPlatformKeyResponse struct {
	CodatPublicAPIModelsPlatformCredentialsPlatformCredentials map[string]interface{}
	ContentType                                                string
	StatusCode                                                 int64
}
