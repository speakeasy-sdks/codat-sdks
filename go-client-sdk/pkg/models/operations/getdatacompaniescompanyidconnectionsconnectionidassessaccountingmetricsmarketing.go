package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingQueryParams struct {
	IncludeDisplayNames *bool     `queryParam:"style=form,explode=true,name=includeDisplayNames"`
	NumberOfPeriods     int       `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLength        int       `queryParam:"style=form,explode=true,name=periodLength"`
	ReportDate          time.Time `queryParam:"style=form,explode=true,name=reportDate"`
	ShowInputValues     *bool     `queryParam:"style=form,explode=true,name=showInputValues"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingRequest struct {
	PathParams  GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingPathParams
	QueryParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingQueryParams
	Security    GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingResponse struct {
	CodatStandardReportingContractsReport *shared.CodatStandardReportingContractsReport
	ContentType                           string
	StatusCode                            int
}
