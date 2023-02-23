package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersQueryParams struct {
	TimeoutInMinutes *int `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersQueryParams
	Request     *shared.CodatDataContractsDatasetsTransfer `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersResponse struct {
	CodatDataContractsDatasetsTransferPushOperation *shared.CodatDataContractsDatasetsTransferPushOperation
	ContentType                                     string
	StatusCode                                      int
}
