package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetIntegrationsPlatformKeyPathParams struct {
	PlatformKey string `pathParam:"style=simple,explode=false,name=platformKey"`
}

type GetIntegrationsPlatformKeySecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetIntegrationsPlatformKeyRequest struct {
	PathParams GetIntegrationsPlatformKeyPathParams
	Security   GetIntegrationsPlatformKeySecurity
}

type GetIntegrationsPlatformKeyResponse struct {
	CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel *shared.CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel
	ContentType                                                string
	StatusCode                                                 int64
}
