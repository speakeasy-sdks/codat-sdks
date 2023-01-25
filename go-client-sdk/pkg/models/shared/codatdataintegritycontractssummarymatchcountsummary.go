package shared

type CodatDataIntegrityContractsSummaryMatchCountSummary struct {
	MatchPercentage *float64 `json:"matchPercentage,omitempty"`
	Matched         *int32   `json:"matched,omitempty"`
	Total           *int32   `json:"total,omitempty"`
	Unmatched       *int32   `json:"unmatched,omitempty"`
}
