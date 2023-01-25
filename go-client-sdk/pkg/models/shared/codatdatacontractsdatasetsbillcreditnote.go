package shared

import (
	"time"
)

type CodatDataContractsDatasetsBillCreditNote struct {
	AllocatedOnDate      *time.Time                                                `json:"allocatedOnDate,omitempty"`
	BillCreditNoteNumber *string                                                   `json:"billCreditNoteNumber,omitempty"`
	Currency             *string                                                   `json:"currency,omitempty"`
	CurrencyRate         *float64                                                  `json:"currencyRate,omitempty"`
	DiscountPercentage   float64                                                   `json:"discountPercentage"`
	ID                   *string                                                   `json:"id,omitempty"`
	IssueDate            *time.Time                                                `json:"issueDate,omitempty"`
	LineItems            []CodatDataContractsDatasetsBillCreditNoteLineItem        `json:"lineItems,omitempty"`
	Metadata             *CodatDataContractsDatasetsMetadata                       `json:"metadata,omitempty"`
	ModifiedDate         *time.Time                                                `json:"modifiedDate,omitempty"`
	Note                 *string                                                   `json:"note,omitempty"`
	PaymentAllocations   []CodatDataContractsDatasetsDetailedPaymentAllocation     `json:"paymentAllocations,omitempty"`
	RemainingCredit      float64                                                   `json:"remainingCredit"`
	SourceModifiedDate   *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	Status               CodatDataContractsDatasetsCreditNoteStatusEnum            `json:"status"`
	SubTotal             float64                                                   `json:"subTotal"`
	SupplementalData     *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	SupplierRef          *CodatDataContractsDatasetsSupplierRef                    `json:"supplierRef,omitempty"`
	TotalAmount          float64                                                   `json:"totalAmount"`
	TotalDiscount        float64                                                   `json:"totalDiscount"`
	TotalTaxAmount       float64                                                   `json:"totalTaxAmount"`
	WithholdingTax       []CodatDataContractsDatasetsWithholdingTax                `json:"withholdingTax,omitempty"`
}
