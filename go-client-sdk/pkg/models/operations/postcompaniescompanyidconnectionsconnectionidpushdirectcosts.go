package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsQueryParams struct {
	TimeoutInMinutes *int `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
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
	StatusCode                                        int
}
