package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesRequest struct {
	Request  *shared.CodatPublicAPIModelsCompanyAddCompanyModel `request:"mediaType=application/json"`
	Security PostCompaniesSecurity
}

type PostCompaniesResponse struct {
	CodatPublicAPIModelsCompanyCompany *shared.CodatPublicAPIModelsCompanyCompany
	ContentType                        string
	StatusCode                         int64
}
