package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfRequest struct {
	PathParams GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfPathParams
	Security   GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfSecurity
}

type GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfResponse struct {
	ContentType string
	StatusCode  int
}
