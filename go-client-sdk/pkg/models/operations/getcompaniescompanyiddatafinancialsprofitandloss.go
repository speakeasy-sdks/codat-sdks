package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDDataFinancialsProfitAndLossPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataFinancialsProfitAndLossQueryParams struct {
	PeriodLength     int        `queryParam:"style=form,explode=true,name=periodLength"`
	PeriodsToCompare int        `queryParam:"style=form,explode=true,name=periodsToCompare"`
	StartMonth       *time.Time `queryParam:"style=form,explode=true,name=startMonth"`
}

type GetCompaniesCompanyIDDataFinancialsProfitAndLossSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataFinancialsProfitAndLossRequest struct {
	PathParams  GetCompaniesCompanyIDDataFinancialsProfitAndLossPathParams
	QueryParams GetCompaniesCompanyIDDataFinancialsProfitAndLossQueryParams
	Security    GetCompaniesCompanyIDDataFinancialsProfitAndLossSecurity
}

type GetCompaniesCompanyIDDataFinancialsProfitAndLossResponse struct {
	CodatPublicAPIModelsDataProfitAndLossResponse *shared.CodatPublicAPIModelsDataProfitAndLossResponse
	ContentType                                   string
	StatusCode                                    int
}
