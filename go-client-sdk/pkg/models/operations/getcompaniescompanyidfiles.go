package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDFilesPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDFilesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDFilesRequest struct {
	PathParams GetCompaniesCompanyIDFilesPathParams
	Security   GetCompaniesCompanyIDFilesSecurity
}

type GetCompaniesCompanyIDFilesResponse struct {
	CodatPublicAPIModelsFileMetadataModels []shared.CodatPublicAPIModelsFileMetadataModel
	ContentType                            string
	StatusCode                             int64
}
