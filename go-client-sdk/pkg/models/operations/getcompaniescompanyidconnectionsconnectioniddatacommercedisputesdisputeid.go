package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	DisputeID    string `pathParam:"style=simple,explode=false,name=disputeId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDResponse struct {
	CodatDataContractsDatasetsCommerceDispute *shared.CodatDataContractsDatasetsCommerceDispute
	ContentType                               string
	StatusCode                                int
}
