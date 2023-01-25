package shared

import (
	"time"
)

type CodatDataContractsDatasetsBillPaymentLine struct {
	AllocatedOnDate *time.Time                                      `json:"allocatedOnDate,omitempty"`
	Amount          float64                                         `json:"amount"`
	Links           []CodatDataContractsDatasetsBillPaymentLineLink `json:"links,omitempty"`
}
