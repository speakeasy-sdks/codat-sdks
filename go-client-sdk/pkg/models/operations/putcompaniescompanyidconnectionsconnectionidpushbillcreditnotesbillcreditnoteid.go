package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDPathParams struct {
	BillCreditNoteID string `pathParam:"style=simple,explode=false,name=billCreditNoteId"`
	CompanyID        string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID     string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDQueryParams struct {
	ForceUpdate      *bool  `queryParam:"style=form,explode=true,name=forceUpdate"`
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDRequest struct {
	PathParams  PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDPathParams
	QueryParams PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDQueryParams
	Request     *shared.CodatDataContractsDatasetsBillCreditNote `request:"mediaType=application/json"`
	Security    PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDResponse struct {
	CodatDataContractsDatasetsBillCreditNotePushOperation *shared.CodatDataContractsDatasetsBillCreditNotePushOperation
	ContentType                                           string
	StatusCode                                            int64
}
