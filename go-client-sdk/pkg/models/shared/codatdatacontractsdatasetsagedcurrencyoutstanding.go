package shared

type CodatDataContractsDatasetsAgedCurrencyOutstanding struct {
	AgedOutstandingAmounts []CodatDataContractsDatasetsAgedOutstandingAmount `json:"agedOutstandingAmounts,omitempty"`
	Currency               *string                                           `json:"currency,omitempty"`
}
