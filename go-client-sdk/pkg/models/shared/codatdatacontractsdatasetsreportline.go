package shared

type CodatDataContractsDatasetsReportLine struct {
	AccountID *string                                `json:"accountId,omitempty"`
	Items     []CodatDataContractsDatasetsReportLine `json:"items,omitempty"`
	Name      *string                                `json:"name,omitempty"`
	Value     float64                                `json:"value"`
}
