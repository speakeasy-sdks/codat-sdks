package shared

import (
	"time"
)

type CodatDataContractsDatasetsCommerceLocation struct {
	Address            *CodatDataContractsDatasetsCommerceAddress `json:"address,omitempty"`
	ID                 *string                                    `json:"id,omitempty"`
	ModifiedDate       *time.Time                                 `json:"modifiedDate,omitempty"`
	Name               *string                                    `json:"name,omitempty"`
	SourceModifiedDate *time.Time                                 `json:"sourceModifiedDate,omitempty"`
}
