package shared

import (
	"time"
)

type CodatDataContractsDatasetsTransfer struct {
	ContactRef           *CodatDataContractsDatasetsContactRef                     `json:"contactRef,omitempty"`
	Date                 *time.Time                                                `json:"date,omitempty"`
	DepositedRecordRefs  []CodatDataContractsDatasetsRecordRef                     `json:"depositedRecordRefs,omitempty"`
	Description          *string                                                   `json:"description,omitempty"`
	From                 *CodatDataContractsDatasetsFromAccount                    `json:"from,omitempty"`
	ID                   *string                                                   `json:"id,omitempty"`
	Metadata             *CodatDataContractsDatasetsMetadata                       `json:"metadata,omitempty"`
	ModifiedDate         *time.Time                                                `json:"modifiedDate,omitempty"`
	SourceModifiedDate   *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	SupplementalData     *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	To                   *CodatDataContractsDatasetsToAccount                      `json:"to,omitempty"`
	TrackingCategoryRefs []CodatDataContractsDatasetsTrackingCategoryRef           `json:"trackingCategoryRefs,omitempty"`
}
