package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutProfileAPIKeySecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutProfileAPIKeyRequest struct {
	Security PutProfileAPIKeySecurity
}

type PutProfileAPIKeyResponse struct {
	CodatPublicAPIModelsCompanyProfileModel *shared.CodatPublicAPIModelsCompanyProfileModel
	ContentType                             string
	StatusCode                              int64
}
