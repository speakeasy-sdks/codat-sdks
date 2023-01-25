package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PatchSettingsIntegrationsIntegrationIDPathParams struct {
	IntegrationID string `pathParam:"style=simple,explode=false,name=integrationId"`
}

type PatchSettingsIntegrationsIntegrationIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchSettingsIntegrationsIntegrationIDRequest struct {
	PathParams PatchSettingsIntegrationsIntegrationIDPathParams
	Request    *shared.CodatPublicAPIModelsClientsIntegrationSettingsPatchModel `request:"mediaType=application/json"`
	Security   PatchSettingsIntegrationsIntegrationIDSecurity
}

type PatchSettingsIntegrationsIntegrationIDResponse struct {
	CodatPublicAPIModelsClientsIntegrationSettingsModel *shared.CodatPublicAPIModelsClientsIntegrationSettingsModel
	ContentType                                         string
	StatusCode                                          int64
}
