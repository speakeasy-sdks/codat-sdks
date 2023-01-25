package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDDataFinancialsCashFlowStatementPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataFinancialsCashFlowStatementQueryParams struct {
	PeriodLength     int32      `queryParam:"style=form,explode=true,name=periodLength"`
	PeriodsToCompare int32      `queryParam:"style=form,explode=true,name=periodsToCompare"`
	StartMonth       *time.Time `queryParam:"style=form,explode=true,name=startMonth"`
}

type GetCompaniesCompanyIDDataFinancialsCashFlowStatementSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataFinancialsCashFlowStatementRequest struct {
	PathParams  GetCompaniesCompanyIDDataFinancialsCashFlowStatementPathParams
	QueryParams GetCompaniesCompanyIDDataFinancialsCashFlowStatementQueryParams
	Security    GetCompaniesCompanyIDDataFinancialsCashFlowStatementSecurity
}

type GetCompaniesCompanyIDDataFinancialsCashFlowStatementResponse struct {
	CodatPublicAPIModelsDataCashFlowStatementResponse *shared.CodatPublicAPIModelsDataCashFlowStatementResponse
	ContentType                                       string
	StatusCode                                        int64
}
