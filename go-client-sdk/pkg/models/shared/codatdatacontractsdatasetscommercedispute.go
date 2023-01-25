package shared

import (
	"time"
)

type CodatDataContractsDatasetsCommerceDispute struct {
	CreatedDate          *time.Time                                               `json:"createdDate,omitempty"`
	Currency             *string                                                  `json:"currency,omitempty"`
	DisputedTransactions []CodatDataContractsDatasetsCommerceTransactionSourceRef `json:"disputedTransactions,omitempty"`
	DueDate              *time.Time                                               `json:"dueDate,omitempty"`
	ID                   *string                                                  `json:"id,omitempty"`
	ModifiedDate         *time.Time                                               `json:"modifiedDate,omitempty"`
	Reason               *string                                                  `json:"reason,omitempty"`
	SourceModifiedDate   *time.Time                                               `json:"sourceModifiedDate,omitempty"`
	Status               *CodatDataContractsDatasetsCommerceDisputeStatusEnum     `json:"status,omitempty"`
	TotalAmount          *float64                                                 `json:"totalAmount,omitempty"`
}
