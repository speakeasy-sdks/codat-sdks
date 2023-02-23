package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachmentId"`
	BillID       string `pathParam:"style=simple,explode=false,name=billId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDResponse struct {
	CodatDataContractsDatasetsAttachmentsDatasetAttachment *shared.CodatDataContractsDatasetsAttachmentsDatasetAttachment
	ContentType                                            string
	StatusCode                                             int
}
