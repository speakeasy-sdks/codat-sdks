package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetQueryParams struct {
	IncludeDisplayNames *bool     `queryParam:"style=form,explode=true,name=includeDisplayNames"`
	NumberOfPeriods     int32     `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLength        int32     `queryParam:"style=form,explode=true,name=periodLength"`
	ReportDate          time.Time `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetRequest struct {
	PathParams  GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetPathParams
	QueryParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetQueryParams
	Security    GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheetResponse struct {
	CodatStandardReportingContractsReport *shared.CodatStandardReportingContractsReport
	ContentType                           string
	StatusCode                            int64
}
