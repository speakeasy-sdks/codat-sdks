package shared

type CodatDataIntegrityContractsSummaryMatchAmountSummary struct {
	Currency        *string  `json:"currency,omitempty"`
	MatchPercentage *float64 `json:"matchPercentage,omitempty"`
	Matched         *float64 `json:"matched,omitempty"`
	Total           *float64 `json:"total,omitempty"`
	Unmatched       *float64 `json:"unmatched,omitempty"`
}
