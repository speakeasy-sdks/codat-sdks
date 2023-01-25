package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachmentId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	InvoiceID    string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDResponse struct {
	CodatDataContractsDatasetsAttachmentsDatasetAttachment *shared.CodatDataContractsDatasetsAttachmentsDatasetAttachment
	ContentType                                            string
	StatusCode                                             int64
}
