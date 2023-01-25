package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachmentId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	SupplierID   string `pathParam:"style=simple,explode=false,name=supplierId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDResponse struct {
	CodatDataContractsDatasetsAttachmentsDatasetAttachment *shared.CodatDataContractsDatasetsAttachmentsDatasetAttachment
	ContentType                                            string
	StatusCode                                             int64
}
