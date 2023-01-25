package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
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
	StatusCode                                     int64
}
