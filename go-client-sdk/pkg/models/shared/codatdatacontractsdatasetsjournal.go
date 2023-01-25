package shared

import (
	"time"
)

type CodatDataContractsDatasetsJournal struct {
	CreatedOn          *time.Time                                   `json:"createdOn,omitempty"`
	HasChildren        *bool                                        `json:"hasChildren,omitempty"`
	ID                 *string                                      `json:"id,omitempty"`
	JournalCode        *string                                      `json:"journalCode,omitempty"`
	Metadata           *CodatDataContractsDatasetsMetadata          `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                   `json:"modifiedDate,omitempty"`
	Name               *string                                      `json:"name,omitempty"`
	ParentID           *string                                      `json:"parentId,omitempty"`
	SourceModifiedDate *time.Time                                   `json:"sourceModifiedDate,omitempty"`
	Status             *CodatDataContractsDatasetsJournalStatusEnum `json:"status,omitempty"`
	Type               *string                                      `json:"type,omitempty"`
}
