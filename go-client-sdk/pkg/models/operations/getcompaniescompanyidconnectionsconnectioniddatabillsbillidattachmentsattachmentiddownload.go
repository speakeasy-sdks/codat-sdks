package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDDownloadPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachmentId"`
	BillID       string `pathParam:"style=simple,explode=false,name=billId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDDownloadSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDDownloadRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDDownloadPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDDownloadSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDDownloadResponse struct {
	ContentType string
	StatusCode  int64
}
