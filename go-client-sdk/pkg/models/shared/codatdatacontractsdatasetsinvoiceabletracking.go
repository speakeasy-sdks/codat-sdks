package shared

type CodatDataContractsDatasetsInvoiceableTracking struct {
	InvoiceTo  *CodatDataContractsDatasetsRecordRef  `json:"invoiceTo,omitempty"`
	RecordRefs []CodatDataContractsDatasetsRecordRef `json:"recordRefs"`
}
