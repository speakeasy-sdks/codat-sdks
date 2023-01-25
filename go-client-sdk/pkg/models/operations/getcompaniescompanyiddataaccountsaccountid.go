package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataAccountsAccountIDPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataAccountsAccountIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataAccountsAccountIDRequest struct {
	PathParams GetCompaniesCompanyIDDataAccountsAccountIDPathParams
	Security   GetCompaniesCompanyIDDataAccountsAccountIDSecurity
}

type GetCompaniesCompanyIDDataAccountsAccountIDResponse struct {
	CodatPublicAPIModelsDataAccountResponse *shared.CodatPublicAPIModelsDataAccountResponse
	ContentType                             string
	StatusCode                              int64
}
