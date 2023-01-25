package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type DeleteIntegrationsCredentialsPlatformKeyPathParams struct {
	PlatformKey string `pathParam:"style=simple,explode=false,name=platformKey"`
}

type DeleteIntegrationsCredentialsPlatformKeySecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteIntegrationsCredentialsPlatformKeyRequest struct {
	PathParams DeleteIntegrationsCredentialsPlatformKeyPathParams
	Security   DeleteIntegrationsCredentialsPlatformKeySecurity
}

type DeleteIntegrationsCredentialsPlatformKeyResponse struct {
	CodatPublicAPIModelsPlatformCredentialsPlatformCredentials map[string]interface{}
	ContentType                                                string
	StatusCode                                                 int64
}
