package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoResponse struct {
	CodatDataContractsDatasetsCommerceCompanyInfo *shared.CodatDataContractsDatasetsCommerceCompanyInfo
	ContentType                                   string
	StatusCode                                    int
}
