package shared

type CodatDataIntegrityContractsSummaryMatchSummary struct {
	ByAmount *CodatDataIntegrityContractsSummaryMatchAmountSummary `json:"byAmount,omitempty"`
	ByCount  *CodatDataIntegrityContractsSummaryMatchCountSummary  `json:"byCount,omitempty"`
	Type     *string                                               `json:"type,omitempty"`
}
