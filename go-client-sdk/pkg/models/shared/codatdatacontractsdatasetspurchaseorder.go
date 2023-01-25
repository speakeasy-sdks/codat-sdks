package shared

import (
	"time"
)

type CodatDataContractsDatasetsPurchaseOrder struct {
	Currency             *string                                            `json:"currency,omitempty"`
	CurrencyRate         *float64                                           `json:"currencyRate,omitempty"`
	DeliveryDate         *time.Time                                         `json:"deliveryDate,omitempty"`
	ExpectedDeliveryDate *time.Time                                         `json:"expectedDeliveryDate,omitempty"`
	ID                   *string                                            `json:"id,omitempty"`
	IssueDate            *time.Time                                         `json:"issueDate,omitempty"`
	LineItems            []CodatDataContractsDatasetsPurchaseOrderLineItem  `json:"lineItems,omitempty"`
	Metadata             *CodatDataContractsDatasetsMetadata                `json:"metadata,omitempty"`
	ModifiedDate         *time.Time                                         `json:"modifiedDate,omitempty"`
	Note                 *string                                            `json:"note,omitempty"`
	PaymentDueDate       *time.Time                                         `json:"paymentDueDate,omitempty"`
	PurchaseOrderNumber  *string                                            `json:"purchaseOrderNumber,omitempty"`
	ShipTo               *CodatDataContractsDatasetsShipTo                  `json:"shipTo,omitempty"`
	SourceModifiedDate   *time.Time                                         `json:"sourceModifiedDate,omitempty"`
	Status               *CodatDataContractsDatasetsPurchaseOrderStatusEnum `json:"status,omitempty"`
	SubTotal             *float64                                           `json:"subTotal,omitempty"`
	SupplierRef          *CodatDataContractsDatasetsSupplierRef             `json:"supplierRef,omitempty"`
	TotalAmount          *float64                                           `json:"totalAmount,omitempty"`
	TotalDiscount        *float64                                           `json:"totalDiscount,omitempty"`
	TotalTaxAmount       *float64                                           `json:"totalTaxAmount,omitempty"`
}
