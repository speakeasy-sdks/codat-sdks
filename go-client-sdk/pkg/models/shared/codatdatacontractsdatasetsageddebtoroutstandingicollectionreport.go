package shared

import (
	"time"
)

type CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport struct {
	Data       []CodatDataContractsDatasetsAgedDebtorOutstanding `json:"data"`
	Generated  time.Time                                         `json:"generated"`
	ReportDate time.Time                                         `json:"reportDate"`
}
