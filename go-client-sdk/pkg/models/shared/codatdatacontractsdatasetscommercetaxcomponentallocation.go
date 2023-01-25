package shared

type CodatDataContractsDatasetsCommerceTaxComponentAllocation struct {
	TaxAmount       *float64                                           `json:"taxAmount,omitempty"`
	TaxComponentRef *CodatDataContractsDatasetsCommerceTaxComponentRef `json:"taxComponentRef,omitempty"`
}
