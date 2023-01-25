package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDDataFinancialsProfitAndLossPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataFinancialsProfitAndLossQueryParams struct {
	PeriodLength     int32      `queryParam:"style=form,explode=true,name=periodLength"`
	PeriodsToCompare int32      `queryParam:"style=form,explode=true,name=periodsToCompare"`
	StartMonth       *time.Time `queryParam:"style=form,explode=true,name=startMonth"`
}

type GetCompaniesCompanyIDDataFinancialsProfitAndLossSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataFinancialsProfitAndLossRequest struct {
	PathParams  GetCompaniesCompanyIDDataFinancialsProfitAndLossPathParams
	QueryParams GetCompaniesCompanyIDDataFinancialsProfitAndLossQueryParams
	Security    GetCompaniesCompanyIDDataFinancialsProfitAndLossSecurity
}

type GetCompaniesCompanyIDDataFinancialsProfitAndLossResponse struct {
	CodatPublicAPIModelsDataProfitAndLossResponse *shared.CodatPublicAPIModelsDataProfitAndLossResponse
	ContentType                                   string
	StatusCode                                    int64
}
