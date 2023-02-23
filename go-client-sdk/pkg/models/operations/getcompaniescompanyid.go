package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDRequest struct {
	PathParams GetCompaniesCompanyIDPathParams
	Security   GetCompaniesCompanyIDSecurity
}

type GetCompaniesCompanyIDResponse struct {
	CodatPublicAPIModelsCompanyCompany *shared.CodatPublicAPIModelsCompanyCompany
	ContentType                        string
	StatusCode                         int
}
