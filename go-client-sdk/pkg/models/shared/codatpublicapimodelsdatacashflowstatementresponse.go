package shared

import (
	"time"
)

type CodatPublicAPIModelsDataCashFlowStatementResponse struct {
	Currency                 string                                                        `json:"currency"`
	EarliestAvailableMonth   *time.Time                                                    `json:"earliestAvailableMonth,omitempty"`
	MostRecentAvailableMonth *time.Time                                                    `json:"mostRecentAvailableMonth,omitempty"`
	ReportBasis              CodatDataContractsDatasetsCashFlowStatementReportingBasisEnum `json:"reportBasis"`
	ReportInput              CodatDataContractsDatasetsCashFlowStatementReportingDataEnum  `json:"reportInput"`
	Reports                  []CodatDataContractsDatasetsCashFlowStatement                 `json:"reports"`
}
