package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetProfileSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetProfileRequest struct {
	Security GetProfileSecurity
}

type GetProfileResponse struct {
	CodatPublicAPIModelsCompanyProfileModel *shared.CodatPublicAPIModelsCompanyProfileModel
	ContentType                             string
	StatusCode                              int
}
