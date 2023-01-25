package shared

import (
	"time"
)

type CodatDataContractsDatasetsBalanceSheet struct {
	Assets      *CodatDataContractsDatasetsReportLine `json:"assets,omitempty"`
	Date        *time.Time                            `json:"date,omitempty"`
	Equity      *CodatDataContractsDatasetsReportLine `json:"equity,omitempty"`
	Liabilities *CodatDataContractsDatasetsReportLine `json:"liabilities,omitempty"`
	NetAssets   float64                               `json:"netAssets"`
}
