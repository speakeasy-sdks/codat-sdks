package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetMetricsCompaniesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetMetricsCompaniesRequest struct {
	Security GetMetricsCompaniesSecurity
}

type GetMetricsCompaniesResponse struct {
	CodatPublicAPIModelsClientsClientCompanyMetricsModel *shared.CodatPublicAPIModelsClientsClientCompanyMetricsModel
	ContentType                                          string
	StatusCode                                           int
}
