package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValuePathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueQueryParams struct {
	IncludeDisplayNames *bool                                                        `queryParam:"style=form,explode=true,name=includeDisplayNames"`
	NumberOfPeriods     int32                                                        `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLength        int32                                                        `queryParam:"style=form,explode=true,name=periodLength"`
	PeriodUnit          shared.CodatAssessDataContractsCommerceMetricsPeriodUnitEnum `queryParam:"style=form,explode=true,name=periodUnit"`
	ReportDate          time.Time                                                    `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueRequest struct {
	PathParams  GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValuePathParams
	QueryParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueQueryParams
	Security    GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValueResponse struct {
	CodatStandardReportingContractsReport *shared.CodatStandardReportingContractsReport
	ContentType                           string
	StatusCode                            int64
}
