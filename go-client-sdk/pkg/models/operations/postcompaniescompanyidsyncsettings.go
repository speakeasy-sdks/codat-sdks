package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDSyncSettingsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PostCompaniesCompanyIDSyncSettingsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDSyncSettingsRequest struct {
	PathParams PostCompaniesCompanyIDSyncSettingsPathParams
	Request    *shared.CodatClientsAPIClientContractCompanySyncSettings `request:"mediaType=application/json"`
	Security   PostCompaniesCompanyIDSyncSettingsSecurity
}

type PostCompaniesCompanyIDSyncSettingsResponse struct {
	ContentType string
	StatusCode  int
}
