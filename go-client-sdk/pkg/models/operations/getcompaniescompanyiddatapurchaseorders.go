package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataPurchaseOrdersPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataPurchaseOrdersQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataPurchaseOrdersSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataPurchaseOrdersRequest struct {
	PathParams  GetCompaniesCompanyIDDataPurchaseOrdersPathParams
	QueryParams GetCompaniesCompanyIDDataPurchaseOrdersQueryParams
	Security    GetCompaniesCompanyIDDataPurchaseOrdersSecurity
}

type GetCompaniesCompanyIDDataPurchaseOrdersResponse struct {
	CodatDataContractsDatasetsPurchaseOrderPagedResponseModel *shared.CodatDataContractsDatasetsPurchaseOrderPagedResponseModel
	ContentType                                               string
	StatusCode                                                int64
}
