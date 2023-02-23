package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataSalesOrdersPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataSalesOrdersQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataSalesOrdersSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataSalesOrdersRequest struct {
	PathParams  GetCompaniesCompanyIDDataSalesOrdersPathParams
	QueryParams GetCompaniesCompanyIDDataSalesOrdersQueryParams
	Security    GetCompaniesCompanyIDDataSalesOrdersSecurity
}

type GetCompaniesCompanyIDDataSalesOrdersResponse struct {
	CodatDataContractsDatasetsSalesOrderPagedResponseModel *shared.CodatDataContractsDatasetsSalesOrderPagedResponseModel
	ContentType                                            string
	StatusCode                                             int
}
