package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataTrackingCategoriesPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataTrackingCategoriesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataTrackingCategoriesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataTrackingCategoriesRequest struct {
	PathParams  GetCompaniesCompanyIDDataTrackingCategoriesPathParams
	QueryParams GetCompaniesCompanyIDDataTrackingCategoriesQueryParams
	Security    GetCompaniesCompanyIDDataTrackingCategoriesSecurity
}

type GetCompaniesCompanyIDDataTrackingCategoriesResponse struct {
	CodatPublicAPIModelsDataTrackingCategoryPagedResponseModel *shared.CodatPublicAPIModelsDataTrackingCategoryPagedResponseModel
	ContentType                                                string
	StatusCode                                                 int
}
