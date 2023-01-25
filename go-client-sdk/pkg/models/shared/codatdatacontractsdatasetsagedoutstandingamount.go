package shared

import (
	"time"
)

type CodatDataContractsDatasetsAgedOutstandingAmount struct {
	Amount   *float64                                                `json:"amount,omitempty"`
	Details  []CodatDataContractsDatasetsAgedOutstandingAmountDetail `json:"details,omitempty"`
	FromDate *time.Time                                              `json:"fromDate,omitempty"`
	ToDate   *time.Time                                              `json:"toDate,omitempty"`
}
