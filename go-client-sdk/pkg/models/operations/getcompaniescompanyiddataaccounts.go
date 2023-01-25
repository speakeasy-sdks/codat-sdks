package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataAccountsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataAccountsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataAccountsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataAccountsRequest struct {
	PathParams  GetCompaniesCompanyIDDataAccountsPathParams
	QueryParams GetCompaniesCompanyIDDataAccountsQueryParams
	Security    GetCompaniesCompanyIDDataAccountsSecurity
}

type GetCompaniesCompanyIDDataAccountsResponse struct {
	CodatDataContractsDatasetsAccountPagedResponseModel *shared.CodatDataContractsDatasetsAccountPagedResponseModel
	ContentType                                         string
	StatusCode                                          int64
}
