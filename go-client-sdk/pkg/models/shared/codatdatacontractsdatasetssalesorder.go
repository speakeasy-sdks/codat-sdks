package shared

import (
	"time"
)

type CodatDataContractsDatasetsSalesOrder struct {
	Currency                    *string                                         `json:"currency,omitempty"`
	CurrencyRate                *float64                                        `json:"currencyRate,omitempty"`
	CustomerPurchaseOrderNumber *string                                         `json:"customerPurchaseOrderNumber,omitempty"`
	CustomerRef                 *CodatDataContractsDatasetsCustomerRef          `json:"customerRef,omitempty"`
	ExpectedDeliveryDate        *time.Time                                      `json:"expectedDeliveryDate,omitempty"`
	ID                          *string                                         `json:"id,omitempty"`
	InvoicingStatus             *CodatDataContractsDatasetsInvoicingStatusEnum  `json:"invoicingStatus,omitempty"`
	IssueDate                   *time.Time                                      `json:"issueDate,omitempty"`
	LineItems                   []CodatDataContractsDatasetsSalesOrderLineItem  `json:"lineItems,omitempty"`
	Metadata                    *CodatDataContractsDatasetsMetadata             `json:"metadata,omitempty"`
	ModifiedDate                *time.Time                                      `json:"modifiedDate,omitempty"`
	Note                        *string                                         `json:"note,omitempty"`
	SalesOrderNumber            *string                                         `json:"salesOrderNumber,omitempty"`
	ShipTo                      *CodatDataContractsDatasetsShipTo               `json:"shipTo,omitempty"`
	SourceModifiedDate          *time.Time                                      `json:"sourceModifiedDate,omitempty"`
	Status                      *CodatDataContractsDatasetsSalesOrderStatusEnum `json:"status,omitempty"`
	SubTotal                    *float64                                        `json:"subTotal,omitempty"`
	TotalAmount                 *float64                                        `json:"totalAmount,omitempty"`
	TotalDiscount               *float64                                        `json:"totalDiscount,omitempty"`
	TotalTaxAmount              *float64                                        `json:"totalTaxAmount,omitempty"`
}
