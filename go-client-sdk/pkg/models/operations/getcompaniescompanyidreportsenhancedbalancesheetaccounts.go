package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsQueryParams struct {
	NumberOfPeriods *int       `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	ReportDate      *time.Time `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsRequest struct {
	PathParams  GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsPathParams
	QueryParams GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsQueryParams
	Security    GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsSecurity
}

type GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsResponse struct {
	CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement *shared.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement
	ContentType                                                            string
	StatusCode                                                             int
}
