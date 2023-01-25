package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutProfileSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutProfileRequest struct {
	Request  *shared.CodatPublicAPIModelsCompanyProfileModel `request:"mediaType=application/json"`
	Security PutProfileSecurity
}

type PutProfileResponse struct {
	CodatPublicAPIModelsCompanyProfileModel *shared.CodatPublicAPIModelsCompanyProfileModel
	ContentType                             string
	StatusCode                              int64
}
