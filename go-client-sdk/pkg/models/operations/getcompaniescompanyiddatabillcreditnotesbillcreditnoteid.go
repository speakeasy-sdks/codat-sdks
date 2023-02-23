package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDPathParams struct {
	BillCreditNoteID string `pathParam:"style=simple,explode=false,name=billCreditNoteId"`
	CompanyID        string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDRequest struct {
	PathParams GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDPathParams
	Security   GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDSecurity
}

type GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDResponse struct {
	CodatDataContractsDatasetsBillCreditNote *shared.CodatDataContractsDatasetsBillCreditNote
	ContentType                              string
	StatusCode                               int
}
