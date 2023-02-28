package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataCreditNotesCreditNoteIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	CreditNoteID string `pathParam:"style=simple,explode=false,name=creditNoteId"`
}

type GetCompaniesCompanyIDDataCreditNotesCreditNoteIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataCreditNotesCreditNoteIDRequest struct {
	PathParams GetCompaniesCompanyIDDataCreditNotesCreditNoteIDPathParams
	Security   GetCompaniesCompanyIDDataCreditNotesCreditNoteIDSecurity
}

type GetCompaniesCompanyIDDataCreditNotesCreditNoteIDResponse struct {
	CodatDataContractsDatasetsCreditNote *shared.CodatDataContractsDatasetsCreditNote
	ContentType                          string
	StatusCode                           int
}
