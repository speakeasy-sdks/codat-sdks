package shared

type CodatDataContractsDatasetsAgedDebtorOutstanding struct {
	AgedCurrencyOutstanding []CodatDataContractsDatasetsAgedCurrencyOutstanding `json:"agedCurrencyOutstanding,omitempty"`
	CustomerID              *string                                             `json:"customerId,omitempty"`
	CustomerName            *string                                             `json:"customerName,omitempty"`
}
