package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsQueryParams struct {
	NumberOfPeriods  int32     `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLength     int32     `queryParam:"style=form,explode=true,name=periodLength"`
	ReportDate       time.Time `queryParam:"style=form,explode=true,name=reportDate"`
	ShowMetricInputs *bool     `queryParam:"style=form,explode=true,name=showMetricInputs"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsRequest struct {
	PathParams  GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsPathParams
	QueryParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsQueryParams
	Security    GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsResponse struct {
	CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet *shared.CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet
	ContentType                                                      string
	StatusCode                                                       int64
}
