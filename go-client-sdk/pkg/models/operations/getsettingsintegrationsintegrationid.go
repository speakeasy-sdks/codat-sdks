package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetSettingsIntegrationsIntegrationIDPathParams struct {
	IntegrationID string `pathParam:"style=simple,explode=false,name=integrationId"`
}

type GetSettingsIntegrationsIntegrationIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetSettingsIntegrationsIntegrationIDRequest struct {
	PathParams GetSettingsIntegrationsIntegrationIDPathParams
	Security   GetSettingsIntegrationsIntegrationIDSecurity
}

type GetSettingsIntegrationsIntegrationIDResponse struct {
	CodatPublicAPIModelsClientsIntegrationSettingsModel *shared.CodatPublicAPIModelsClientsIntegrationSettingsModel
	ContentType                                         string
	StatusCode                                          int
}
