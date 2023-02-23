package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutCompaniesCompanyIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PutCompaniesCompanyIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutCompaniesCompanyIDRequest struct {
	PathParams PutCompaniesCompanyIDPathParams
	Request    *shared.CodatPublicAPIModelsCompanyUpdateCompanyModel `request:"mediaType=application/json"`
	Security   PutCompaniesCompanyIDSecurity
}

type PutCompaniesCompanyIDResponse struct {
	CodatPublicAPIModelsCompanyCompany *shared.CodatPublicAPIModelsCompanyCompany
	ContentType                        string
	StatusCode                         int
}
