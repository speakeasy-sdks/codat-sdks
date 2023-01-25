package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDDataFinancialsBalanceSheetPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataFinancialsBalanceSheetQueryParams struct {
	PeriodLength     int32      `queryParam:"style=form,explode=true,name=periodLength"`
	PeriodsToCompare int32      `queryParam:"style=form,explode=true,name=periodsToCompare"`
	StartMonth       *time.Time `queryParam:"style=form,explode=true,name=startMonth"`
}

type GetCompaniesCompanyIDDataFinancialsBalanceSheetSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataFinancialsBalanceSheetRequest struct {
	PathParams  GetCompaniesCompanyIDDataFinancialsBalanceSheetPathParams
	QueryParams GetCompaniesCompanyIDDataFinancialsBalanceSheetQueryParams
	Security    GetCompaniesCompanyIDDataFinancialsBalanceSheetSecurity
}

type GetCompaniesCompanyIDDataFinancialsBalanceSheetResponse struct {
	CodatPublicAPIModelsDataBalanceSheetResponse *shared.CodatPublicAPIModelsDataBalanceSheetResponse
	ContentType                                  string
	StatusCode                                   int64
}
