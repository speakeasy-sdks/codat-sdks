package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type DeleteCompaniesCompanyIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type DeleteCompaniesCompanyIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type DeleteCompaniesCompanyIDRequest struct {
	PathParams DeleteCompaniesCompanyIDPathParams
	Security   DeleteCompaniesCompanyIDSecurity
}

type DeleteCompaniesCompanyIDResponse struct {
	ContentType string
	StatusCode  int
}
