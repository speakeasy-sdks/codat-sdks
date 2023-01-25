package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataPaymentsPaymentIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetCompaniesCompanyIDDataPaymentsPaymentIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataPaymentsPaymentIDRequest struct {
	PathParams GetCompaniesCompanyIDDataPaymentsPaymentIDPathParams
	Security   GetCompaniesCompanyIDDataPaymentsPaymentIDSecurity
}

type GetCompaniesCompanyIDDataPaymentsPaymentIDResponse struct {
	CodatDataContractsDatasetsPayment *shared.CodatDataContractsDatasetsPayment
	ContentType                       string
	StatusCode                        int64
}
