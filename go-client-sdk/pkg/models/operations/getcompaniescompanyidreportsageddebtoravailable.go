package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDReportsAgedDebtorAvailablePathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsAgedDebtorAvailableSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDReportsAgedDebtorAvailableRequest struct {
	PathParams GetCompaniesCompanyIDReportsAgedDebtorAvailablePathParams
	Security   GetCompaniesCompanyIDReportsAgedDebtorAvailableSecurity
}

type GetCompaniesCompanyIDReportsAgedDebtorAvailableResponse struct {
	ContentType                                                              string
	StatusCode                                                               int64
	GetCompaniesCompanyIDReportsAgedDebtorAvailable200ApplicationJSONBoolean *bool
}
