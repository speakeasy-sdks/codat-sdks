package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDReportsAgedCreditorPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsAgedCreditorQueryParams struct {
	NumberOfPeriods  *int       `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLengthDays *int       `queryParam:"style=form,explode=true,name=periodLengthDays"`
	ReportDate       *time.Time `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetCompaniesCompanyIDReportsAgedCreditorSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDReportsAgedCreditorRequest struct {
	PathParams  GetCompaniesCompanyIDReportsAgedCreditorPathParams
	QueryParams GetCompaniesCompanyIDReportsAgedCreditorQueryParams
	Security    GetCompaniesCompanyIDReportsAgedCreditorSecurity
}

type GetCompaniesCompanyIDReportsAgedCreditorResponse struct {
	CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport *shared.CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport
	ContentType                                                        string
	StatusCode                                                         int
}
