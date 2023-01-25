package shared

type CodatDataContractsDatasetsInvoiceItem struct {
	AccountRef  *CodatDataContractsDatasetsAccountRef `json:"accountRef,omitempty"`
	Description *string                               `json:"description,omitempty"`
	TaxRateRef  *CodatDataContractsDatasetsTaxRateRef `json:"taxRateRef,omitempty"`
	UnitPrice   *float64                              `json:"unitPrice,omitempty"`
}
