package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachmentId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	InvoiceID    string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadResponse struct {
	ContentType string
	StatusCode  int64
}
