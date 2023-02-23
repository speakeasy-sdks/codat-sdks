package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutProfileSyncSettingsDataTypePathParams struct {
	DataType string `pathParam:"style=simple,explode=false,name=dataType"`
}

type PutProfileSyncSettingsDataTypeSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutProfileSyncSettingsDataTypeRequest struct {
	PathParams PutProfileSyncSettingsDataTypePathParams
	Request    *shared.CodatPublicAPIModelsClientsClientSyncSettingsSinglePutModel `request:"mediaType=application/json"`
	Security   PutProfileSyncSettingsDataTypeSecurity
}

type PutProfileSyncSettingsDataTypeResponse struct {
	CodatPublicAPIModelsSyncSettingsSyncSettingModel *shared.CodatPublicAPIModelsSyncSettingsSyncSettingModel
	ContentType                                      string
	StatusCode                                       int
}
