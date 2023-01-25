package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	InvoiceID    string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentRequest struct {
	PathParams PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentPathParams
	Security   PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentResponse struct {
	ContentType string
	StatusCode  int64
}
