package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataDatasetLogsDatasetIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type GetCompaniesCompanyIDDataDatasetLogsDatasetIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataDatasetLogsDatasetIDRequest struct {
	PathParams GetCompaniesCompanyIDDataDatasetLogsDatasetIDPathParams
	Security   GetCompaniesCompanyIDDataDatasetLogsDatasetIDSecurity
}

type GetCompaniesCompanyIDDataDatasetLogsDatasetIDResponse struct {
	CodatPullMessagesContractsDatasetMessages *shared.CodatPullMessagesContractsDatasetMessages
	ContentType                               string
	StatusCode                                int64
}
