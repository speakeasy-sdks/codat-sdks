package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsQueryParams
	Request     *shared.CodatDataContractsDatasetsDirectCost `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsResponse struct {
	CodatDataContractsDatasetsDirectCostPushOperation *shared.CodatDataContractsDatasetsDirectCostPushOperation
	ContentType                                       string
	StatusCode                                        int64
}
