package shared

import (
	"time"
)

type CodatPublicAPIModelsDataTrackingCategoryTree struct {
	HasChildren        *bool                                                 `json:"hasChildren,omitempty"`
	ID                 *string                                               `json:"id,omitempty"`
	ModifiedDate       *time.Time                                            `json:"modifiedDate,omitempty"`
	Name               *string                                               `json:"name,omitempty"`
	ParentID           *string                                               `json:"parentId,omitempty"`
	SourceModifiedDate *time.Time                                            `json:"sourceModifiedDate,omitempty"`
	Status             *CodatDataContractsDatasetsTrackingCategoryStatusEnum `json:"status,omitempty"`
	SubCategories      []CodatPublicAPIModelsDataTrackingCategoryTree        `json:"subCategories,omitempty"`
}
