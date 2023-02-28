package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDReportsAgedDebtorAvailablePathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsAgedDebtorAvailableSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDReportsAgedDebtorAvailableRequest struct {
	PathParams GetCompaniesCompanyIDReportsAgedDebtorAvailablePathParams
	Security   GetCompaniesCompanyIDReportsAgedDebtorAvailableSecurity
}

type GetCompaniesCompanyIDReportsAgedDebtorAvailableResponse struct {
	ContentType                                                              string
	StatusCode                                                               int
	GetCompaniesCompanyIDReportsAgedDebtorAvailable200ApplicationJSONBoolean *bool
}
