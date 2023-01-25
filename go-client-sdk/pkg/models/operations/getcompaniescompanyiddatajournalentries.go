package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataJournalEntriesPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataJournalEntriesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataJournalEntriesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataJournalEntriesRequest struct {
	PathParams  GetCompaniesCompanyIDDataJournalEntriesPathParams
	QueryParams GetCompaniesCompanyIDDataJournalEntriesQueryParams
	Security    GetCompaniesCompanyIDDataJournalEntriesSecurity
}

type GetCompaniesCompanyIDDataJournalEntriesResponse struct {
	CodatDataContractsDatasetsJournalEntryPagedResponseModel *shared.CodatDataContractsDatasetsJournalEntryPagedResponseModel
	ContentType                                              string
	StatusCode                                               int64
}
