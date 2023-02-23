package shared

type CodatDataIntegrityContractsSummaryMatchCountSummary struct {
	MatchPercentage *float64 `json:"matchPercentage,omitempty"`
	Matched         *int     `json:"matched,omitempty"`
	Total           *int     `json:"total,omitempty"`
	Unmatched       *int     `json:"unmatched,omitempty"`
}
