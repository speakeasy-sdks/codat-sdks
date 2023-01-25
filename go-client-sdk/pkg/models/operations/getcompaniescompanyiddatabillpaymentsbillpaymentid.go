package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDPathParams struct {
	BillPaymentID string `pathParam:"style=simple,explode=false,name=billPaymentId"`
	CompanyID     string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDRequest struct {
	PathParams GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDPathParams
	Security   GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDSecurity
}

type GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDResponse struct {
	CodatDataContractsDatasetsBillPayment *shared.CodatDataContractsDatasetsBillPayment
	ContentType                           string
	StatusCode                            int64
}
