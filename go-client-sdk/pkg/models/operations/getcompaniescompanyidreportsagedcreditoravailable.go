package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDReportsAgedCreditorAvailablePathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsAgedCreditorAvailableSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDReportsAgedCreditorAvailableRequest struct {
	PathParams GetCompaniesCompanyIDReportsAgedCreditorAvailablePathParams
	Security   GetCompaniesCompanyIDReportsAgedCreditorAvailableSecurity
}

type GetCompaniesCompanyIDReportsAgedCreditorAvailableResponse struct {
	ContentType                                                                string
	StatusCode                                                                 int64
	GetCompaniesCompanyIDReportsAgedCreditorAvailable200ApplicationJSONBoolean *bool
}
