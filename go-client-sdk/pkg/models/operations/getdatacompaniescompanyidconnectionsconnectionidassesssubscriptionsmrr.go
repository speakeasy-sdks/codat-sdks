package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrRequest struct {
	PathParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrPathParams
	Security   GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrrResponse struct {
	CodatStandardReportingContractsReport *shared.CodatStandardReportingContractsReport
	ContentType                           string
	StatusCode                            int64
}
