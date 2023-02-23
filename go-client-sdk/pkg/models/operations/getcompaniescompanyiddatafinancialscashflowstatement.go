package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDDataFinancialsCashFlowStatementPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataFinancialsCashFlowStatementQueryParams struct {
	PeriodLength     int        `queryParam:"style=form,explode=true,name=periodLength"`
	PeriodsToCompare int        `queryParam:"style=form,explode=true,name=periodsToCompare"`
	StartMonth       *time.Time `queryParam:"style=form,explode=true,name=startMonth"`
}

type GetCompaniesCompanyIDDataFinancialsCashFlowStatementSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataFinancialsCashFlowStatementRequest struct {
	PathParams  GetCompaniesCompanyIDDataFinancialsCashFlowStatementPathParams
	QueryParams GetCompaniesCompanyIDDataFinancialsCashFlowStatementQueryParams
	Security    GetCompaniesCompanyIDDataFinancialsCashFlowStatementSecurity
}

type GetCompaniesCompanyIDDataFinancialsCashFlowStatementResponse struct {
	CodatPublicAPIModelsDataCashFlowStatementResponse *shared.CodatPublicAPIModelsDataCashFlowStatementResponse
	ContentType                                       string
	StatusCode                                        int
}
