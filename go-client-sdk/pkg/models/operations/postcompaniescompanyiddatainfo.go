package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDDataInfoPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PostCompaniesCompanyIDDataInfoSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDDataInfoRequest struct {
	PathParams PostCompaniesCompanyIDDataInfoPathParams
	Security   PostCompaniesCompanyIDDataInfoSecurity
}

type PostCompaniesCompanyIDDataInfoResponse struct {
	CodatPublicAPIModelsDataDataSet *shared.CodatPublicAPIModelsDataDataSet
	ContentType                     string
	StatusCode                      int
}
