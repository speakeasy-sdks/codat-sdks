package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	DirectCostID string `pathParam:"style=simple,explode=false,name=directCostId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDResponse struct {
	CodatDataContractsDatasetsDirectCost *shared.CodatDataContractsDatasetsDirectCost
	ContentType                          string
	StatusCode                           int
}
