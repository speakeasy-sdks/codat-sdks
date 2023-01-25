package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesCreditNoteIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	CreditNoteID string `pathParam:"style=simple,explode=false,name=creditNoteId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesCreditNoteIDQueryParams struct {
	ForceUpdate      *bool  `queryParam:"style=form,explode=true,name=forceUpdate"`
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesCreditNoteIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesCreditNoteIDRequest struct {
	PathParams  PutCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesCreditNoteIDPathParams
	QueryParams PutCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesCreditNoteIDQueryParams
	Request     *shared.CodatDataContractsDatasetsCreditNote `request:"mediaType=application/json"`
	Security    PutCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesCreditNoteIDSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesCreditNoteIDResponse struct {
	CodatDataContractsDatasetsCreditNotePushOperation *shared.CodatDataContractsDatasetsCreditNotePushOperation
	ContentType                                       string
	StatusCode                                        int64
}
