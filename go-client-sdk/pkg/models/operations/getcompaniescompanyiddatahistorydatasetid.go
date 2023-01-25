package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataHistoryDatasetIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type GetCompaniesCompanyIDDataHistoryDatasetIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataHistoryDatasetIDRequest struct {
	PathParams GetCompaniesCompanyIDDataHistoryDatasetIDPathParams
	Security   GetCompaniesCompanyIDDataHistoryDatasetIDSecurity
}

type GetCompaniesCompanyIDDataHistoryDatasetIDResponse struct {
	CodatPublicAPIModelsDataDataSet *shared.CodatPublicAPIModelsDataDataSet
	ContentType                     string
	StatusCode                      int64
}
