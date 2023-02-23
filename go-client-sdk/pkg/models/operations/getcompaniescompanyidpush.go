package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDPushPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDPushQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDPushSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDPushRequest struct {
	PathParams  GetCompaniesCompanyIDPushPathParams
	QueryParams GetCompaniesCompanyIDPushQueryParams
	Security    GetCompaniesCompanyIDPushSecurity
}

type GetCompaniesCompanyIDPushResponse struct {
	ContentType                                 string
	StatusCode                                  int
	SystemObjectPushOperationPagedResponseModel *shared.SystemObjectPushOperationPagedResponseModel
}
