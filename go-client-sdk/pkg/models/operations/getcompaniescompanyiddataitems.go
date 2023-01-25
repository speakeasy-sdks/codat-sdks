package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataItemsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataItemsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataItemsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataItemsRequest struct {
	PathParams  GetCompaniesCompanyIDDataItemsPathParams
	QueryParams GetCompaniesCompanyIDDataItemsQueryParams
	Security    GetCompaniesCompanyIDDataItemsSecurity
}

type GetCompaniesCompanyIDDataItemsResponse struct {
	CodatDataContractsDatasetsItemPagedResponseModel *shared.CodatDataContractsDatasetsItemPagedResponseModel
	ContentType                                      string
	StatusCode                                       int64
}
