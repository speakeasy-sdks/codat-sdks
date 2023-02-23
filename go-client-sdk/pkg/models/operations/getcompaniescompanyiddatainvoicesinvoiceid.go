package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataInvoicesInvoiceIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetCompaniesCompanyIDDataInvoicesInvoiceIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataInvoicesInvoiceIDRequest struct {
	PathParams GetCompaniesCompanyIDDataInvoicesInvoiceIDPathParams
	Security   GetCompaniesCompanyIDDataInvoicesInvoiceIDSecurity
}

type GetCompaniesCompanyIDDataInvoicesInvoiceIDResponse struct {
	CodatDataContractsDatasetsInvoice *shared.CodatDataContractsDatasetsInvoice
	ContentType                       string
	StatusCode                        int
}
