package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionQueryParams struct {
	IncludeDisplayNames *bool                                                        `queryParam:"style=form,explode=true,name=includeDisplayNames"`
	NumberOfPeriods     int                                                          `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLength        int                                                          `queryParam:"style=form,explode=true,name=periodLength"`
	PeriodUnit          shared.CodatAssessDataContractsCommerceMetricsPeriodUnitEnum `queryParam:"style=form,explode=true,name=periodUnit"`
	ReportDate          time.Time                                                    `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionRequest struct {
	PathParams  GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionPathParams
	QueryParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionQueryParams
	Security    GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetentionResponse struct {
	CodatStandardReportingContractsReport *shared.CodatStandardReportingContractsReport
	ContentType                           string
	StatusCode                            int
}
