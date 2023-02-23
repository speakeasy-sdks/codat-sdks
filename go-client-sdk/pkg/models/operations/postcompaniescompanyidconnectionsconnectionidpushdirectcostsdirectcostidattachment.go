package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	DirectCostID string `pathParam:"style=simple,explode=false,name=directCostId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentRequest struct {
	PathParams PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentPathParams
	Security   PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentResponse struct {
	ContentType string
	StatusCode  int
}
