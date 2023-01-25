package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataSuppliersPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataSuppliersQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataSuppliersSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataSuppliersRequest struct {
	PathParams  GetCompaniesCompanyIDDataSuppliersPathParams
	QueryParams GetCompaniesCompanyIDDataSuppliersQueryParams
	Security    GetCompaniesCompanyIDDataSuppliersSecurity
}

type GetCompaniesCompanyIDDataSuppliersResponse struct {
	CodatDataContractsDatasetsSupplierPagedResponseModel *shared.CodatDataContractsDatasetsSupplierPagedResponseModel
	ContentType                                          string
	StatusCode                                           int64
}
