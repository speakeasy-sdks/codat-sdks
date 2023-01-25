package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachmentId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	SupplierID   string `pathParam:"style=simple,explode=false,name=supplierId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadResponse struct {
	ContentType string
	StatusCode  int64
}
