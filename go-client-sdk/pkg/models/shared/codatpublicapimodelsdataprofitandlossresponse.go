package shared

import (
	"time"
)

type CodatPublicAPIModelsDataProfitAndLossResponse struct {
	Currency                 string                                                   `json:"currency"`
	EarliestAvailableMonth   *time.Time                                               `json:"earliestAvailableMonth,omitempty"`
	MostRecentAvailableMonth *time.Time                                               `json:"mostRecentAvailableMonth,omitempty"`
	ReportBasis              CodatDataContractsDatasetsProfitAndLossReportingTypeEnum `json:"reportBasis"`
	Reports                  []CodatDataContractsDatasetsProfitAndLossReport          `json:"reports"`
}
