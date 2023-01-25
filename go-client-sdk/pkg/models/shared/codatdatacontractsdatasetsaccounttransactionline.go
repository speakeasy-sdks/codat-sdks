package shared

type CodatDataContractsDatasetsAccountTransactionLine struct {
	Amount      *float64                             `json:"amount,omitempty"`
	Description *string                              `json:"description,omitempty"`
	RecordRef   *CodatDataContractsDatasetsRecordRef `json:"recordRef,omitempty"`
}
