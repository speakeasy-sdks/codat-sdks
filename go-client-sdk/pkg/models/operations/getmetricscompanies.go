package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetMetricsCompaniesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetMetricsCompaniesRequest struct {
	Security GetMetricsCompaniesSecurity
}

type GetMetricsCompaniesResponse struct {
	CodatPublicAPIModelsClientsClientCompanyMetricsModel *shared.CodatPublicAPIModelsClientsClientCompanyMetricsModel
	ContentType                                          string
	StatusCode                                           int64
}
