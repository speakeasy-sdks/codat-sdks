package shared

import (
	"time"
)

type CodatDataContractsDatasetsInvoice struct {
	AdditionalTaxAmount     *float64                                                  `json:"additionalTaxAmount,omitempty"`
	AdditionalTaxPercentage *float64                                                  `json:"additionalTaxPercentage,omitempty"`
	AmountDue               float64                                                   `json:"amountDue"`
	Currency                *string                                                   `json:"currency,omitempty"`
	CurrencyRate            *float64                                                  `json:"currencyRate,omitempty"`
	CustomerRef             *CodatDataContractsDatasetsCustomerRef                    `json:"customerRef,omitempty"`
	DiscountPercentage      *float64                                                  `json:"discountPercentage,omitempty"`
	DueDate                 *time.Time                                                `json:"dueDate,omitempty"`
	ID                      *string                                                   `json:"id,omitempty"`
	InvoiceNumber           *string                                                   `json:"invoiceNumber,omitempty"`
	IssueDate               time.Time                                                 `json:"issueDate"`
	LineItems               []CodatDataContractsDatasetsInvoiceLineItem               `json:"lineItems,omitempty"`
	Metadata                *CodatDataContractsDatasetsMetadata                       `json:"metadata,omitempty"`
	ModifiedDate            *time.Time                                                `json:"modifiedDate,omitempty"`
	Note                    *string                                                   `json:"note,omitempty"`
	PaidOnDate              *time.Time                                                `json:"paidOnDate,omitempty"`
	PaymentAllocations      []CodatDataContractsDatasetsDetailedPaymentAllocation     `json:"paymentAllocations,omitempty"`
	SalesOrderRefs          []CodatDataContractsDatasetsRecordRef                     `json:"salesOrderRefs,omitempty"`
	SourceModifiedDate      *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	Status                  CodatDataContractsDatasetsInvoiceStatusEnum               `json:"status"`
	SubTotal                *float64                                                  `json:"subTotal,omitempty"`
	SupplementalData        *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	TotalAmount             float64                                                   `json:"totalAmount"`
	TotalDiscount           *float64                                                  `json:"totalDiscount,omitempty"`
	TotalTaxAmount          float64                                                   `json:"totalTaxAmount"`
	WithholdingTax          []CodatDataContractsDatasetsWithholdingTax                `json:"withholdingTax,omitempty"`
}
