package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDPathParams struct {
	CompanyID       string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID    string `pathParam:"style=simple,explode=false,name=connectionId"`
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=paymentMethodId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDResponse struct {
	CodatDataContractsDatasetsCommercePaymentMethod *shared.CodatDataContractsDatasetsCommercePaymentMethod
	ContentType                                     string
	StatusCode                                      int64
}
