package shared

type CodatDataContractsDatasetsAgedCreditorOutstanding struct {
	AgedCurrencyOutstanding []CodatDataContractsDatasetsAgedCurrencyOutstanding `json:"agedCurrencyOutstanding,omitempty"`
	SupplierID              *string                                             `json:"supplierId,omitempty"`
	SupplierName            *string                                             `json:"supplierName,omitempty"`
}
