package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetIntegrationsPlatformKeyBrandingPathParams struct {
	PlatformKey string `pathParam:"style=simple,explode=false,name=platformKey"`
}

type GetIntegrationsPlatformKeyBrandingSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetIntegrationsPlatformKeyBrandingRequest struct {
	PathParams GetIntegrationsPlatformKeyBrandingPathParams
	Security   GetIntegrationsPlatformKeyBrandingSecurity
}

type GetIntegrationsPlatformKeyBrandingResponse struct {
	CodatPublicAPIModelsClientsIntegrationBrandingModel *shared.CodatPublicAPIModelsClientsIntegrationBrandingModel
	ContentType                                         string
	StatusCode                                          int64
}
