package shared

import (
	"time"
)

type CodatDataContractsDatasetsPaymentMethod struct {
	ID                 *string                                            `json:"id,omitempty"`
	Metadata           *CodatDataContractsDatasetsMetadata                `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                         `json:"modifiedDate,omitempty"`
	Name               *string                                            `json:"name,omitempty"`
	SourceModifiedDate *time.Time                                         `json:"sourceModifiedDate,omitempty"`
	Status             *CodatDataContractsDatasetsPaymentMethodStatusEnum `json:"status,omitempty"`
	Type               *CodatDataContractsDatasetsPaymentMethodTypeEnum   `json:"type,omitempty"`
}
