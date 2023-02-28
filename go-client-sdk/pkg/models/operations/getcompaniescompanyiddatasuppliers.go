package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataSuppliersPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataSuppliersQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataSuppliersSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataSuppliersRequest struct {
	PathParams  GetCompaniesCompanyIDDataSuppliersPathParams
	QueryParams GetCompaniesCompanyIDDataSuppliersQueryParams
	Security    GetCompaniesCompanyIDDataSuppliersSecurity
}

type GetCompaniesCompanyIDDataSuppliersResponse struct {
	CodatDataContractsDatasetsSupplierPagedResponseModel *shared.CodatDataContractsDatasetsSupplierPagedResponseModel
	ContentType                                          string
	StatusCode                                           int
}
