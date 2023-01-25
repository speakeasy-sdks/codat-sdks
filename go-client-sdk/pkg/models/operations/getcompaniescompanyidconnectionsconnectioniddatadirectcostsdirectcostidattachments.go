package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	DirectCostID string `pathParam:"style=simple,explode=false,name=directCostId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsResponse struct {
	CodatDataContractsDatasetsAttachmentsDataset *shared.CodatDataContractsDatasetsAttachmentsDataset
	ContentType                                  string
	StatusCode                                   int64
}
