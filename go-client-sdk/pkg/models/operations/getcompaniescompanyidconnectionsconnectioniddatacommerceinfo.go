package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfoResponse struct {
	CodatDataContractsDatasetsCommerceCompanyInfo *shared.CodatDataContractsDatasetsCommerceCompanyInfo
	ContentType                                   string
	StatusCode                                    int64
}
