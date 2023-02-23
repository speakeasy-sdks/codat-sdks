package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutIntegrationsPlatformKeyEnabledPathParams struct {
	PlatformKey string `pathParam:"style=simple,explode=false,name=platformKey"`
}

type PutIntegrationsPlatformKeyEnabledSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutIntegrationsPlatformKeyEnabledRequest struct {
	PathParams PutIntegrationsPlatformKeyEnabledPathParams
	Request    *shared.CodatPublicAPIModelsPlatformCredentialsEnabledArgs `request:"mediaType=application/json"`
	Security   PutIntegrationsPlatformKeyEnabledSecurity
}

type PutIntegrationsPlatformKeyEnabledResponse struct {
	CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel *shared.CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel
	ContentType                                                string
	StatusCode                                                 int
}
