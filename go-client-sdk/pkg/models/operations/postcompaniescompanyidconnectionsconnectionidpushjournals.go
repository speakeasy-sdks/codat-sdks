package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsQueryParams struct {
	TimeoutInMinutes *int `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsQueryParams
	Request     *shared.CodatDataContractsDatasetsJournal `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsResponse struct {
	CodatDataContractsDatasetsJournalPushOperation *shared.CodatDataContractsDatasetsJournalPushOperation
	ContentType                                    string
	StatusCode                                     int
}
