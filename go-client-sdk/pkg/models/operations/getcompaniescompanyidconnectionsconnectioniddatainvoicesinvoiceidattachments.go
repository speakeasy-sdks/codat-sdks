package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	InvoiceID    string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsResponse struct {
	CodatDataContractsDatasetsAttachmentsDataset *shared.CodatDataContractsDatasetsAttachmentsDataset
	ContentType                                  string
	StatusCode                                   int
}
