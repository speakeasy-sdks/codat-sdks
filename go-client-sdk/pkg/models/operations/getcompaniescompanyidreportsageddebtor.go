package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDReportsAgedDebtorPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsAgedDebtorQueryParams struct {
	NumberOfPeriods  *int       `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLengthDays *int       `queryParam:"style=form,explode=true,name=periodLengthDays"`
	ReportDate       *time.Time `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetCompaniesCompanyIDReportsAgedDebtorSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDReportsAgedDebtorRequest struct {
	PathParams  GetCompaniesCompanyIDReportsAgedDebtorPathParams
	QueryParams GetCompaniesCompanyIDReportsAgedDebtorQueryParams
	Security    GetCompaniesCompanyIDReportsAgedDebtorSecurity
}

type GetCompaniesCompanyIDReportsAgedDebtorResponse struct {
	CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport *shared.CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport
	ContentType                                                      string
	StatusCode                                                       int
}
