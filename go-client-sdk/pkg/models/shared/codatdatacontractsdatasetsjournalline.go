package shared

type CodatDataContractsDatasetsJournalLine struct {
	AccountRef  *CodatDataContractsDatasetsAccountRef `json:"accountRef,omitempty"`
	Currency    *string                               `json:"currency,omitempty"`
	Description *string                               `json:"description,omitempty"`
	NetAmount   float64                               `json:"netAmount"`
	Tracking    *CodatDataContractsDatasetsTracking   `json:"tracking,omitempty"`
}
