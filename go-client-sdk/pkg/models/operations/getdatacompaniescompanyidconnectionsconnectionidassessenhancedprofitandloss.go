package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossQueryParams struct {
	IncludeDisplayNames *bool     `queryParam:"style=form,explode=true,name=includeDisplayNames"`
	NumberOfPeriods     int32     `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLength        int32     `queryParam:"style=form,explode=true,name=periodLength"`
	ReportDate          time.Time `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossRequest struct {
	PathParams  GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossPathParams
	QueryParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossQueryParams
	Security    GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLossResponse struct {
	CodatStandardReportingContractsReport *shared.CodatStandardReportingContractsReport
	ContentType                           string
	StatusCode                            int64
}
