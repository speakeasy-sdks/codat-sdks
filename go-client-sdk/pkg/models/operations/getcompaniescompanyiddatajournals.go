package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataJournalsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataJournalsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataJournalsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataJournalsRequest struct {
	PathParams  GetCompaniesCompanyIDDataJournalsPathParams
	QueryParams GetCompaniesCompanyIDDataJournalsQueryParams
	Security    GetCompaniesCompanyIDDataJournalsSecurity
}

type GetCompaniesCompanyIDDataJournalsResponse struct {
	CodatDataContractsDatasetsJournalPagedResponseModel *shared.CodatDataContractsDatasetsJournalPagedResponseModel
	ContentType                                         string
	StatusCode                                          int64
}
