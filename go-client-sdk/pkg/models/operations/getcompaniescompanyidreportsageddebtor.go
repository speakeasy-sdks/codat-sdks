package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDReportsAgedDebtorPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsAgedDebtorQueryParams struct {
	NumberOfPeriods  *int32     `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLengthDays *int32     `queryParam:"style=form,explode=true,name=periodLengthDays"`
	ReportDate       *time.Time `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetCompaniesCompanyIDReportsAgedDebtorSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDReportsAgedDebtorRequest struct {
	PathParams  GetCompaniesCompanyIDReportsAgedDebtorPathParams
	QueryParams GetCompaniesCompanyIDReportsAgedDebtorQueryParams
	Security    GetCompaniesCompanyIDReportsAgedDebtorSecurity
}

type GetCompaniesCompanyIDReportsAgedDebtorResponse struct {
	CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport *shared.CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport
	ContentType                                                      string
	StatusCode                                                       int64
}
