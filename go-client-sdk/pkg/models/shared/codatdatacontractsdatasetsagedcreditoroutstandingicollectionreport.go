package shared

import (
	"time"
)

type CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport struct {
	Data       []CodatDataContractsDatasetsAgedCreditorOutstanding `json:"data"`
	Generated  time.Time                                           `json:"generated"`
	ReportDate time.Time                                           `json:"reportDate"`
}
