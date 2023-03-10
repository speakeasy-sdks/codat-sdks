package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsQueryParams struct {
	NumberOfPeriods *int32     `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	ReportDate      *time.Time `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsRequest struct {
	PathParams  GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsPathParams
	QueryParams GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsQueryParams
	Security    GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsSecurity
}

type GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccountsResponse struct {
	CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement *shared.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement
	ContentType                                                            string
	StatusCode                                                             int64
}
