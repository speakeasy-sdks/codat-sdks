package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataCustomersPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataCustomersQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataCustomersSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataCustomersRequest struct {
	PathParams  GetCompaniesCompanyIDDataCustomersPathParams
	QueryParams GetCompaniesCompanyIDDataCustomersQueryParams
	Security    GetCompaniesCompanyIDDataCustomersSecurity
}

type GetCompaniesCompanyIDDataCustomersResponse struct {
	CodatDataContractsDatasetsCustomerPagedResponseModel *shared.CodatDataContractsDatasetsCustomerPagedResponseModel
	ContentType                                          string
	StatusCode                                           int
}
