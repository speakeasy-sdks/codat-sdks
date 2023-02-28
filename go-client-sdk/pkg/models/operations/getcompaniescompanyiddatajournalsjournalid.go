package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataJournalsJournalIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	JournalID string `pathParam:"style=simple,explode=false,name=journalId"`
}

type GetCompaniesCompanyIDDataJournalsJournalIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataJournalsJournalIDRequest struct {
	PathParams GetCompaniesCompanyIDDataJournalsJournalIDPathParams
	Security   GetCompaniesCompanyIDDataJournalsJournalIDSecurity
}

type GetCompaniesCompanyIDDataJournalsJournalIDResponse struct {
	CodatDataContractsDatasetsJournalPagedResponseModel *shared.CodatDataContractsDatasetsJournalPagedResponseModel
	ContentType                                         string
	StatusCode                                          int
}
