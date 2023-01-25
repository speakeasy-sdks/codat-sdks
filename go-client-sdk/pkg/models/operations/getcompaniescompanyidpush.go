package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDPushPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDPushQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDPushSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDPushRequest struct {
	PathParams  GetCompaniesCompanyIDPushPathParams
	QueryParams GetCompaniesCompanyIDPushQueryParams
	Security    GetCompaniesCompanyIDPushSecurity
}

type GetCompaniesCompanyIDPushResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	SystemObjectPushOperationPagedResponseModel *shared.SystemObjectPushOperationPagedResponseModel
}
