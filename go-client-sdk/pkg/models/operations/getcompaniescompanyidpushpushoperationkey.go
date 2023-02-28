package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDPushPushOperationKeyPathParams struct {
	CompanyID        string `pathParam:"style=simple,explode=false,name=companyId"`
	PushOperationKey string `pathParam:"style=simple,explode=false,name=pushOperationKey"`
}

type GetCompaniesCompanyIDPushPushOperationKeySecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDPushPushOperationKeyRequest struct {
	PathParams GetCompaniesCompanyIDPushPushOperationKeyPathParams
	Security   GetCompaniesCompanyIDPushPushOperationKeySecurity
}

type GetCompaniesCompanyIDPushPushOperationKeyResponse struct {
	ContentType               string
	StatusCode                int
	SystemObjectPushOperation *shared.SystemObjectPushOperation
}
