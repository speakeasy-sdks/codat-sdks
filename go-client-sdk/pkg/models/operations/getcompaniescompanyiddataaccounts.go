package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataAccountsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataAccountsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataAccountsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataAccountsRequest struct {
	PathParams  GetCompaniesCompanyIDDataAccountsPathParams
	QueryParams GetCompaniesCompanyIDDataAccountsQueryParams
	Security    GetCompaniesCompanyIDDataAccountsSecurity
}

type GetCompaniesCompanyIDDataAccountsResponse struct {
	CodatDataContractsDatasetsAccountPagedResponseModel *shared.CodatDataContractsDatasetsAccountPagedResponseModel
	ContentType                                         string
	StatusCode                                          int
}
