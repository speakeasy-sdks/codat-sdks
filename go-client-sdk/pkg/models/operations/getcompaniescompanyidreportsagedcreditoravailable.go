package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDReportsAgedCreditorAvailablePathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsAgedCreditorAvailableSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDReportsAgedCreditorAvailableRequest struct {
	PathParams GetCompaniesCompanyIDReportsAgedCreditorAvailablePathParams
	Security   GetCompaniesCompanyIDReportsAgedCreditorAvailableSecurity
}

type GetCompaniesCompanyIDReportsAgedCreditorAvailableResponse struct {
	ContentType                                                                string
	StatusCode                                                                 int
	GetCompaniesCompanyIDReportsAgedCreditorAvailable200ApplicationJSONBoolean *bool
}
