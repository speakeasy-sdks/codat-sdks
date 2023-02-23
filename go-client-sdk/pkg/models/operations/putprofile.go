package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutProfileSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutProfileRequest struct {
	Request  *shared.CodatPublicAPIModelsCompanyProfileModel `request:"mediaType=application/json"`
	Security PutProfileSecurity
}

type PutProfileResponse struct {
	CodatPublicAPIModelsCompanyProfileModel *shared.CodatPublicAPIModelsCompanyProfileModel
	ContentType                             string
	StatusCode                              int
}
