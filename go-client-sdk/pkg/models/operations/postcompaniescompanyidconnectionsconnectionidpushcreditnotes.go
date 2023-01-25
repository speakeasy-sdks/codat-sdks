package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
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
	StatusCode                                        int64
}
