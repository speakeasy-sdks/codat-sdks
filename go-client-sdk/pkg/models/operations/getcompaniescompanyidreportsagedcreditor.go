package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDReportsAgedCreditorPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsAgedCreditorQueryParams struct {
	NumberOfPeriods  *int32     `queryParam:"style=form,explode=true,name=numberOfPeriods"`
	PeriodLengthDays *int32     `queryParam:"style=form,explode=true,name=periodLengthDays"`
	ReportDate       *time.Time `queryParam:"style=form,explode=true,name=reportDate"`
}

type GetCompaniesCompanyIDReportsAgedCreditorSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDReportsAgedCreditorRequest struct {
	PathParams  GetCompaniesCompanyIDReportsAgedCreditorPathParams
	QueryParams GetCompaniesCompanyIDReportsAgedCreditorQueryParams
	Security    GetCompaniesCompanyIDReportsAgedCreditorSecurity
}

type GetCompaniesCompanyIDReportsAgedCreditorResponse struct {
	CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport *shared.CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport
	ContentType                                                        string
	StatusCode                                                         int64
}
