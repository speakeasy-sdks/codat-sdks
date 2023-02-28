package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDPathParams struct {
	CompanyID          string `pathParam:"style=simple,explode=false,name=companyId"`
	TrackingCategoryID string `pathParam:"style=simple,explode=false,name=trackingCategoryId"`
}

type GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDRequest struct {
	PathParams GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDPathParams
	Security   GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDSecurity
}

type GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDResponse struct {
	CodatPublicAPIModelsDataTrackingCategoryTree *shared.CodatPublicAPIModelsDataTrackingCategoryTree
	ContentType                                  string
	StatusCode                                   int
}
