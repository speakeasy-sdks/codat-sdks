package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDSyncSettingsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDSyncSettingsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDSyncSettingsRequest struct {
	PathParams GetCompaniesCompanyIDSyncSettingsPathParams
	Security   GetCompaniesCompanyIDSyncSettingsSecurity
}

type GetCompaniesCompanyIDSyncSettingsResponse struct {
	CodatClientsAPIClientContractCompanySyncSettings *shared.CodatClientsAPIClientContractCompanySyncSettings
	ContentType                                      string
	StatusCode                                       int
}
