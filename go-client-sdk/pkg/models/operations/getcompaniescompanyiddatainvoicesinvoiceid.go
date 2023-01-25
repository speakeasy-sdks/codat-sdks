package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataInvoicesInvoiceIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetCompaniesCompanyIDDataInvoicesInvoiceIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataInvoicesInvoiceIDRequest struct {
	PathParams GetCompaniesCompanyIDDataInvoicesInvoiceIDPathParams
	Security   GetCompaniesCompanyIDDataInvoicesInvoiceIDSecurity
}

type GetCompaniesCompanyIDDataInvoicesInvoiceIDResponse struct {
	CodatDataContractsDatasetsInvoice *shared.CodatDataContractsDatasetsInvoice
	ContentType                       string
	StatusCode                        int64
}
