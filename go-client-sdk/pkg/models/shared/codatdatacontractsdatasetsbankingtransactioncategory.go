package shared

import (
	"time"
)

type CodatDataContractsDatasetsBankingTransactionCategory struct {
	HasChildren        *bool                                                           `json:"hasChildren,omitempty"`
	ID                 string                                                          `json:"id"`
	ModifiedDate       *time.Time                                                      `json:"modifiedDate,omitempty"`
	Name               string                                                          `json:"name"`
	ParentID           *string                                                         `json:"parentId,omitempty"`
	SourceModifiedDate *time.Time                                                      `json:"sourceModifiedDate,omitempty"`
	Status             *CodatDataContractsDatasetsBankingTransactionCategoryStatusEnum `json:"status,omitempty"`
}
