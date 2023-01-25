package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDDataInfoPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PostCompaniesCompanyIDDataInfoSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDDataInfoRequest struct {
	PathParams PostCompaniesCompanyIDDataInfoPathParams
	Security   PostCompaniesCompanyIDDataInfoSecurity
}

type PostCompaniesCompanyIDDataInfoResponse struct {
	CodatPublicAPIModelsDataDataSet *shared.CodatPublicAPIModelsDataDataSet
	ContentType                     string
	StatusCode                      int64
}
