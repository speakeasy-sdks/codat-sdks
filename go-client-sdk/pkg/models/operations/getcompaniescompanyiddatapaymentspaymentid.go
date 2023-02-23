package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataPaymentsPaymentIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetCompaniesCompanyIDDataPaymentsPaymentIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataPaymentsPaymentIDRequest struct {
	PathParams GetCompaniesCompanyIDDataPaymentsPaymentIDPathParams
	Security   GetCompaniesCompanyIDDataPaymentsPaymentIDSecurity
}

type GetCompaniesCompanyIDDataPaymentsPaymentIDResponse struct {
	CodatDataContractsDatasetsPayment *shared.CodatDataContractsDatasetsPayment
	ContentType                       string
	StatusCode                        int
}
