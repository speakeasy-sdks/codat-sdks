package shared

import (
	"time"
)

type CodatDataContractsDatasetsCashFlowStatement struct {
	CashPayments *CodatDataContractsDatasetsReportLine `json:"cashPayments,omitempty"`
	CashReceipts *CodatDataContractsDatasetsReportLine `json:"cashReceipts,omitempty"`
	FromDate     *time.Time                            `json:"fromDate,omitempty"`
	ToDate       *time.Time                            `json:"toDate,omitempty"`
}
