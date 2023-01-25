package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPaymentIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	PaymentID    string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPaymentIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPaymentIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPaymentIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPaymentIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPaymentIDResponse struct {
	ContentType string
	StatusCode  int64
}
