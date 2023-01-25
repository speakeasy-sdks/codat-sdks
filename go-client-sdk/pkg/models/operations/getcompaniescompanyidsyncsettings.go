package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDSyncSettingsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDSyncSettingsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDSyncSettingsRequest struct {
	PathParams GetCompaniesCompanyIDSyncSettingsPathParams
	Security   GetCompaniesCompanyIDSyncSettingsSecurity
}

type GetCompaniesCompanyIDSyncSettingsResponse struct {
	CodatClientsAPIClientContractCompanySyncSettings *shared.CodatClientsAPIClientContractCompanySyncSettings
	ContentType                                      string
	StatusCode                                       int64
}
