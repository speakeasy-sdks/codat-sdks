package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PatchSettingsIntegrationsIntegrationIDPathParams struct {
	IntegrationID string `pathParam:"style=simple,explode=false,name=integrationId"`
}

type PatchSettingsIntegrationsIntegrationIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PatchSettingsIntegrationsIntegrationIDRequest struct {
	PathParams PatchSettingsIntegrationsIntegrationIDPathParams
	Request    *shared.CodatPublicAPIModelsClientsIntegrationSettingsPatchModel `request:"mediaType=application/json"`
	Security   PatchSettingsIntegrationsIntegrationIDSecurity
}

type PatchSettingsIntegrationsIntegrationIDResponse struct {
	CodatPublicAPIModelsClientsIntegrationSettingsModel *shared.CodatPublicAPIModelsClientsIntegrationSettingsModel
	ContentType                                         string
	StatusCode                                          int
}
