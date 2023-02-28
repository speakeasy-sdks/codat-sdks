package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataDatasetLogsDatasetIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type GetCompaniesCompanyIDDataDatasetLogsDatasetIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataDatasetLogsDatasetIDRequest struct {
	PathParams GetCompaniesCompanyIDDataDatasetLogsDatasetIDPathParams
	Security   GetCompaniesCompanyIDDataDatasetLogsDatasetIDSecurity
}

type GetCompaniesCompanyIDDataDatasetLogsDatasetIDResponse struct {
	CodatPullMessagesContractsDatasetMessages *shared.CodatPullMessagesContractsDatasetMessages
	ContentType                               string
	StatusCode                                int
}
