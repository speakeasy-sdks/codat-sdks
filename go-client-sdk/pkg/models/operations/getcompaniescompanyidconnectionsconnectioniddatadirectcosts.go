package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsResponse struct {
	CodatDataContractsDatasetsDirectCostPagedResponseModel *shared.CodatDataContractsDatasetsDirectCostPagedResponseModel
	ContentType                                            string
	StatusCode                                             int64
}
