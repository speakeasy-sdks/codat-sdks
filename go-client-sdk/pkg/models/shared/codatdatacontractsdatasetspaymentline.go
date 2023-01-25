package shared

import (
	"time"
)

type CodatDataContractsDatasetsPaymentLine struct {
	AllocatedOnDate *time.Time                                  `json:"allocatedOnDate,omitempty"`
	Amount          float64                                     `json:"amount"`
	Links           []CodatDataContractsDatasetsPaymentLineLink `json:"links,omitempty"`
}
