package shared

import (
	"time"
)

type CodatDataContractsDatasetsProfitAndLossReport struct {
	CostOfSales        *CodatDataContractsDatasetsReportLine `json:"costOfSales,omitempty"`
	Expenses           *CodatDataContractsDatasetsReportLine `json:"expenses,omitempty"`
	FromDate           *time.Time                            `json:"fromDate,omitempty"`
	GrossProfit        float64                               `json:"grossProfit"`
	Income             *CodatDataContractsDatasetsReportLine `json:"income,omitempty"`
	NetOperatingProfit float64                               `json:"netOperatingProfit"`
	NetOtherIncome     float64                               `json:"netOtherIncome"`
	NetProfit          float64                               `json:"netProfit"`
	OtherExpenses      *CodatDataContractsDatasetsReportLine `json:"otherExpenses,omitempty"`
	OtherIncome        *CodatDataContractsDatasetsReportLine `json:"otherIncome,omitempty"`
	ToDate             *time.Time                            `json:"toDate,omitempty"`
}
