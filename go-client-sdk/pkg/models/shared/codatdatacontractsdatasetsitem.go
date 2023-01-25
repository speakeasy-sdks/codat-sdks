package shared

import (
	"time"
)

type CodatDataContractsDatasetsItem struct {
	BillItem           *CodatDataContractsDatasetsBillItem      `json:"billItem,omitempty"`
	Code               *string                                  `json:"code,omitempty"`
	ID                 *string                                  `json:"id,omitempty"`
	InvoiceItem        *CodatDataContractsDatasetsInvoiceItem   `json:"invoiceItem,omitempty"`
	IsBillItem         bool                                     `json:"isBillItem"`
	IsInvoiceItem      bool                                     `json:"isInvoiceItem"`
	ItemStatus         CodatDataContractsDatasetsItemStatusEnum `json:"itemStatus"`
	Metadata           *CodatDataContractsDatasetsMetadata      `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                               `json:"modifiedDate,omitempty"`
	Name               *string                                  `json:"name,omitempty"`
	SourceModifiedDate *time.Time                               `json:"sourceModifiedDate,omitempty"`
	Type               CodatDataContractsDatasetsItemTypeEnum   `json:"type"`
}
