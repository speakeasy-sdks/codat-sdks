package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDPathParams struct {
	CompanyID       string `pathParam:"style=simple,explode=false,name=companyId"`
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=paymentMethodId"`
}

type GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDRequest struct {
	PathParams GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDPathParams
	Security   GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDSecurity
}

type GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDResponse struct {
	CodatDataContractsDatasetsPaymentMethod *shared.CodatDataContractsDatasetsPaymentMethod
	ContentType                             string
	StatusCode                              int64
}
