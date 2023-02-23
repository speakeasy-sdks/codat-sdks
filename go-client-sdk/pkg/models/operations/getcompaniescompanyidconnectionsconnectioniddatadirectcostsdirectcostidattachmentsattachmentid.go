package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachmentId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	DirectCostID string `pathParam:"style=simple,explode=false,name=directCostId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDResponse struct {
	CodatDataContractsDatasetsAttachmentsDatasetAttachment *shared.CodatDataContractsDatasetsAttachmentsDatasetAttachment
	ContentType                                            string
	StatusCode                                             int
}
