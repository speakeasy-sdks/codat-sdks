package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDDataAllPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type PostCompaniesCompanyIDDataAllSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDDataAllRequest struct {
	PathParams PostCompaniesCompanyIDDataAllPathParams
	Security   PostCompaniesCompanyIDDataAllSecurity
}

type PostCompaniesCompanyIDDataAllResponse struct {
	ContentType string
	StatusCode  int64
}
