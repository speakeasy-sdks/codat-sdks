package shared

import (
	"time"
)

type CodatDataContractsDatasetsJournalEntry struct {
	CreatedOn          *time.Time                                                `json:"createdOn,omitempty"`
	Description        *string                                                   `json:"description,omitempty"`
	ID                 *string                                                   `json:"id,omitempty"`
	JournalLines       []CodatDataContractsDatasetsJournalLine                   `json:"journalLines,omitempty"`
	JournalRef         *CodatDataContractsDatasetsJournalRef                     `json:"journalRef,omitempty"`
	Metadata           *CodatDataContractsDatasetsMetadata                       `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                                `json:"modifiedDate,omitempty"`
	PostedOn           *time.Time                                                `json:"postedOn,omitempty"`
	RecordRef          *CodatDataContractsDatasetsRecordRef                      `json:"recordRef,omitempty"`
	SourceModifiedDate *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	SupplementalData   *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	UpdatedOn          *time.Time                                                `json:"updatedOn,omitempty"`
}
