package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsQueryParams struct {
	NumberOfPeriods *int32     `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	ReportDate      *time.Time `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsRequest struct {
	PathParams  GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsPathParams
	QueryParams GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsQueryParams
	Security    GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsSecurity
}

type GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsResponse struct {
	CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement *shared.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement
	ContentType                                                            string
	StatusCode                                                             int64
}
