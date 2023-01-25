package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDReportsEventsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDReportsEventsQueryParams struct {
	FromDate *time.Time `queryParam:"style=form,explode=true,name=fromDate"`
	PageSize *int32     `queryParam:"style=form,explode=true,name=pageSize"`
	ToDate   *time.Time `queryParam:"style=form,explode=true,name=toDate"`
}

type GetCompaniesCompanyIDReportsEventsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDReportsEventsRequest struct {
	PathParams  GetCompaniesCompanyIDReportsEventsPathParams
	QueryParams GetCompaniesCompanyIDReportsEventsQueryParams
	Security    GetCompaniesCompanyIDReportsEventsSecurity
}

type GetCompaniesCompanyIDReportsEventsResponse struct {
	CodatPublicAPIModelsCompanyCompanyEventStream *shared.CodatPublicAPIModelsCompanyCompanyEventStream
	ContentType                                   string
	StatusCode                                    int64
}
