package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessRequest struct {
	PathParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessPathParams
	Security   GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcessResponse struct {
	ContentType string
	StatusCode  int
}
