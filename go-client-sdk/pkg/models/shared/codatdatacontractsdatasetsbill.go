package shared

import (
	"time"
)

type CodatDataContractsDatasetsBill struct {
	AmountDue          *float64                                                  `json:"amountDue,omitempty"`
	Currency           *string                                                   `json:"currency,omitempty"`
	CurrencyRate       *float64                                                  `json:"currencyRate,omitempty"`
	DueDate            *time.Time                                                `json:"dueDate,omitempty"`
	ID                 *string                                                   `json:"id,omitempty"`
	IssueDate          time.Time                                                 `json:"issueDate"`
	LineItems          []CodatDataContractsDatasetsBillLineItem                  `json:"lineItems,omitempty"`
	Metadata           *CodatDataContractsDatasetsMetadata                       `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                                `json:"modifiedDate,omitempty"`
	Note               *string                                                   `json:"note,omitempty"`
	PaymentAllocations []CodatDataContractsDatasetsDetailedPaymentAllocation     `json:"paymentAllocations,omitempty"`
	PurchaseOrderRefs  []CodatDataContractsDatasetsPurchaseOrderRef              `json:"purchaseOrderRefs,omitempty"`
	Reference          *string                                                   `json:"reference,omitempty"`
	SourceModifiedDate *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	Status             CodatDataContractsDatasetsBillStatusEnum                  `json:"status"`
	SubTotal           float64                                                   `json:"subTotal"`
	SupplementalData   *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	SupplierRef        *CodatDataContractsDatasetsSupplierRef                    `json:"supplierRef,omitempty"`
	TaxAmount          float64                                                   `json:"taxAmount"`
	TotalAmount        float64                                                   `json:"totalAmount"`
	WithholdingTax     []CodatDataContractsDatasetsWithholdingTax                `json:"withholdingTax,omitempty"`
}
