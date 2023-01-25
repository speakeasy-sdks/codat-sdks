package shared

import (
	"time"
)

type CodatDataContractsDatasetsCommercePaymentMethod struct {
	ID                 *string                                                    `json:"id,omitempty"`
	ModifiedDate       *time.Time                                                 `json:"modifiedDate,omitempty"`
	Name               *string                                                    `json:"name,omitempty"`
	SourceModifiedDate *time.Time                                                 `json:"sourceModifiedDate,omitempty"`
	Status             *CodatDataContractsDatasetsCommercePaymentMethodStatusEnum `json:"status,omitempty"`
}
