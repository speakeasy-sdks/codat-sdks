package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenuePathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueQueryParams struct {
	IncludeDisplayNames *bool                                                        `queryParam:"style=form,explode=true,name=includeDisplayNames"`
	NumberOfPeriods     int32                                                        `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLength        int32                                                        `queryParam:"style=form,explode=true,name=periodLength"`
	PeriodUnit          shared.CodatAssessDataContractsCommerceMetricsPeriodUnitEnum `queryParam:"style=form,explode=true,name=periodUnit"`
	ReportDate          time.Time                                                    `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueRequest struct {
	PathParams  GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenuePathParams
	QueryParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueQueryParams
	Security    GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenueResponse struct {
	CodatStandardReportingContractsReport *shared.CodatStandardReportingContractsReport
	ContentType                           string
	StatusCode                            int64
}
