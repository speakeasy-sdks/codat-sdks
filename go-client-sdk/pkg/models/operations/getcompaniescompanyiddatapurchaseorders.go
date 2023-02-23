package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataPurchaseOrdersPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataPurchaseOrdersQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataPurchaseOrdersSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataPurchaseOrdersRequest struct {
	PathParams  GetCompaniesCompanyIDDataPurchaseOrdersPathParams
	QueryParams GetCompaniesCompanyIDDataPurchaseOrdersQueryParams
	Security    GetCompaniesCompanyIDDataPurchaseOrdersSecurity
}

type GetCompaniesCompanyIDDataPurchaseOrdersResponse struct {
	CodatDataContractsDatasetsPurchaseOrderPagedResponseModel *shared.CodatDataContractsDatasetsPurchaseOrderPagedResponseModel
	ContentType                                               string
	StatusCode                                                int
}
