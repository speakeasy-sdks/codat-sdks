package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetProfileSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetProfileRequest struct {
	Security GetProfileSecurity
}

type GetProfileResponse struct {
	CodatPublicAPIModelsCompanyProfileModel *shared.CodatPublicAPIModelsCompanyProfileModel
	ContentType                             string
	StatusCode                              int64
}
