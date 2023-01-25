package shared

import (
	"time"
)

type CodatDataContractsDatasetsCommerceProductCategory struct {
	AncestorRefs       []CodatDataContractsDatasetsCommerceAncestorRef `json:"ancestorRefs,omitempty"`
	HasChildren        *bool                                           `json:"hasChildren,omitempty"`
	ID                 *string                                         `json:"id,omitempty"`
	ModifiedDate       *time.Time                                      `json:"modifiedDate,omitempty"`
	Name               *string                                         `json:"name,omitempty"`
	SourceModifiedDate *time.Time                                      `json:"sourceModifiedDate,omitempty"`
}
