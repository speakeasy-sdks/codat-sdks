package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBillsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBillsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataBillsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataBillsRequest struct {
	PathParams  GetCompaniesCompanyIDDataBillsPathParams
	QueryParams GetCompaniesCompanyIDDataBillsQueryParams
	Security    GetCompaniesCompanyIDDataBillsSecurity
}

type GetCompaniesCompanyIDDataBillsResponse struct {
	CodatDataContractsDatasetsBillPagedResponseModel *shared.CodatDataContractsDatasetsBillPagedResponseModel
	ContentType                                      string
	StatusCode                                       int64
}
