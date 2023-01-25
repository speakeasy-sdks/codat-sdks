package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesQueryParams
	Request     *shared.CodatDataContractsDatasetsBillCreditNote `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesResponse struct {
	CodatDataContractsDatasetsBillCreditNotePushOperation *shared.CodatDataContractsDatasetsBillCreditNotePushOperation
	ContentType                                           string
	StatusCode                                            int64
}
