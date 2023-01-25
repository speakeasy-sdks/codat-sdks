package shared

import (
	"time"
)

type CodatPublicAPIModelsDataBalanceSheetResponse struct {
	Currency                 string                                   `json:"currency"`
	EarliestAvailableMonth   *time.Time                               `json:"earliestAvailableMonth,omitempty"`
	MostRecentAvailableMonth *time.Time                               `json:"mostRecentAvailableMonth,omitempty"`
	Reports                  []CodatDataContractsDatasetsBalanceSheet `json:"reports"`
}
