package shared

type CodatDataContractsDatasetsFromAccount struct {
	AccountRef *CodatDataContractsDatasetsRecordRef `json:"accountRef,omitempty"`
	Amount     *float64                             `json:"amount,omitempty"`
	Currency   *string                              `json:"currency,omitempty"`
}
