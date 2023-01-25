package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachmentId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	CustomerID   string `pathParam:"style=simple,explode=false,name=customerId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadResponse struct {
	ContentType string
	StatusCode  int64
}
