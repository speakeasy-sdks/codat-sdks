package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesResponse struct {
	CodatDataContractsDatasetsDirectIncomePagedResponseModel *shared.CodatDataContractsDatasetsDirectIncomePagedResponseModel
	ContentType                                              string
	StatusCode                                               int
}
