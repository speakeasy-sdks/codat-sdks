package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrRequest struct {
	PathParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrPathParams
	Security   GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrResponse struct {
	CodatStandardReportingContractsReport *shared.CodatStandardReportingContractsReport
	ContentType                           string
	StatusCode                            int
}
