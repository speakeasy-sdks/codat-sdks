package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDReportsEventsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsEventsQueryParams struct {
	FromDate *time.Time `queryParam:"style=form,explode=true,name=fromDate"`
	PageSize *int       `queryParam:"style=form,explode=true,name=pageSize"`
	ToDate   *time.Time `queryParam:"style=form,explode=true,name=toDate"`
}

type GetCompaniesCompanyIDReportsEventsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDReportsEventsRequest struct {
	PathParams  GetCompaniesCompanyIDReportsEventsPathParams
	QueryParams GetCompaniesCompanyIDReportsEventsQueryParams
	Security    GetCompaniesCompanyIDReportsEventsSecurity
}

type GetCompaniesCompanyIDReportsEventsResponse struct {
	CodatPublicAPIModelsCompanyCompanyEventStream *shared.CodatPublicAPIModelsCompanyCompanyEventStream
	ContentType                                   string
	StatusCode                                    int
}
