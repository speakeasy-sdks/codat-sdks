package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDSyncSettingsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PostCompaniesCompanyIDSyncSettingsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDSyncSettingsRequest struct {
	PathParams PostCompaniesCompanyIDSyncSettingsPathParams
	Request    *shared.CodatClientsAPIClientContractCompanySyncSettings `request:"mediaType=application/json"`
	Security   PostCompaniesCompanyIDSyncSettingsSecurity
}

type PostCompaniesCompanyIDSyncSettingsResponse struct {
	ContentType string
	StatusCode  int64
}
