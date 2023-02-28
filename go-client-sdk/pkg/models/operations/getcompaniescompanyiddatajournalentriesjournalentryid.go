package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDPathParams struct {
	CompanyID      string `pathParam:"style=simple,explode=false,name=companyId"`
	JournalEntryID string `pathParam:"style=simple,explode=false,name=journalEntryId"`
}

type GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDRequest struct {
	PathParams GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDPathParams
	Security   GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDSecurity
}

type GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDResponse struct {
	CodatDataContractsDatasetsJournalEntry *shared.CodatDataContractsDatasetsJournalEntry
	ContentType                            string
	StatusCode                             int
}
