package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersQueryParams struct {
	IncludeDisplayNames *bool                                                        `queryParam:"style=form,explode=true,name=includeDisplayNames"`
	NumberOfPeriods     int                                                          `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLength        int                                                          `queryParam:"style=form,explode=true,name=periodLength"`
	PeriodUnit          shared.CodatAssessDataContractsCommerceMetricsPeriodUnitEnum `queryParam:"style=form,explode=true,name=periodUnit"`
	ReportDate          time.Time                                                    `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersRequest struct {
	PathParams  GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersPathParams
	QueryParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersQueryParams
	Security    GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrdersResponse struct {
	CodatStandardReportingContractsReport *shared.CodatStandardReportingContractsReport
	ContentType                           string
	StatusCode                            int
}
