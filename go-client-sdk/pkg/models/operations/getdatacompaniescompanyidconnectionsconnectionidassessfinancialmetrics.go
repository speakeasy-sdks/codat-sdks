package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsQueryParams struct {
	NumberOfPeriods  int       `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLength     int       `queryParam:"style=form,explode=true,name=periodLength"`
	ReportDate       time.Time `queryParam:"style=form,explode=true,name=reportDate"`
	ShowMetricInputs *bool     `queryParam:"style=form,explode=true,name=showMetricInputs"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsRequest struct {
	PathParams  GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsPathParams
	QueryParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsQueryParams
	Security    GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsResponse struct {
	CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet *shared.CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet
	ContentType                                                      string
	StatusCode                                                       int
}
