package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesQueryParams struct {
	TimeoutInMinutes *int `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesQueryParams
	Request     *shared.CodatDataContractsDatasetsCreditNote `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesResponse struct {
	CodatDataContractsDatasetsCreditNotePushOperation *shared.CodatDataContractsDatasetsCreditNotePushOperation
	ContentType                                       string
	StatusCode                                        int
}
