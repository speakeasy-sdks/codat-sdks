package shared

type CodatDataContractsDatasetsBankingAccountBalanceAmounts struct {
	Available *float64 `json:"available,omitempty"`
	Current   float64  `json:"current"`
	Limit     *float64 `json:"limit,omitempty"`
}
