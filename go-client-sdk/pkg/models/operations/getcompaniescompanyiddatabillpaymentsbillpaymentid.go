package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDPathParams struct {
	BillPaymentID string `pathParam:"style=simple,explode=false,name=billPaymentId"`
	CompanyID     string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDRequest struct {
	PathParams GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDPathParams
	Security   GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDSecurity
}

type GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDResponse struct {
	CodatDataContractsDatasetsBillPayment *shared.CodatDataContractsDatasetsBillPayment
	ContentType                           string
	StatusCode                            int
}
