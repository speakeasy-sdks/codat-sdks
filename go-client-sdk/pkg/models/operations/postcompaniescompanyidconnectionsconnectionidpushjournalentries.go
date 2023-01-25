package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesQueryParams
	Request     *shared.CodatDataContractsDatasetsJournalEntry `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesResponse struct {
	CodatDataContractsDatasetsJournalEntryPushOperation *shared.CodatDataContractsDatasetsJournalEntryPushOperation
	ContentType                                         string
	StatusCode                                          int64
}
