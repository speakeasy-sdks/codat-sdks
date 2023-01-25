package shared

import (
	"time"
)

type CodatDataContractsDatasetsCreditNote struct {
	AdditionalTaxAmount     *float64                                                  `json:"additionalTaxAmount,omitempty"`
	AdditionalTaxPercentage *float64                                                  `json:"additionalTaxPercentage,omitempty"`
	AllocatedOnDate         *time.Time                                                `json:"allocatedOnDate,omitempty"`
	CreditNoteNumber        *string                                                   `json:"creditNoteNumber,omitempty"`
	Currency                *string                                                   `json:"currency,omitempty"`
	CurrencyRate            *float64                                                  `json:"currencyRate,omitempty"`
	CustomerRef             *CodatDataContractsDatasetsCustomerRef                    `json:"customerRef,omitempty"`
	DiscountPercentage      float64                                                   `json:"discountPercentage"`
	ID                      *string                                                   `json:"id,omitempty"`
	IssueDate               *time.Time                                                `json:"issueDate,omitempty"`
	LineItems               []CodatDataContractsDatasetsCreditNoteLineItem            `json:"lineItems,omitempty"`
	Metadata                *CodatDataContractsDatasetsMetadata                       `json:"metadata,omitempty"`
	ModifiedDate            *time.Time                                                `json:"modifiedDate,omitempty"`
	Note                    *string                                                   `json:"note,omitempty"`
	PaymentAllocations      []CodatDataContractsDatasetsDetailedPaymentAllocation     `json:"paymentAllocations,omitempty"`
	RemainingCredit         float64                                                   `json:"remainingCredit"`
	SourceModifiedDate      *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	Status                  CodatDataContractsDatasetsCreditNoteStatusEnum            `json:"status"`
	SubTotal                float64                                                   `json:"subTotal"`
	SupplementalData        *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	TotalAmount             float64                                                   `json:"totalAmount"`
	TotalDiscount           float64                                                   `json:"totalDiscount"`
	TotalTaxAmount          float64                                                   `json:"totalTaxAmount"`
	WithholdingTax          []CodatDataContractsDatasetsWithholdingTax                `json:"withholdingTax,omitempty"`
}
