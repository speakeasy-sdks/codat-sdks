package shared

import (
	"time"
)

type CodatDataContractsDatasetsDirectIncome struct {
	ContactRef         *CodatDataContractsDatasetsContactRef                     `json:"contactRef,omitempty"`
	Currency           string                                                    `json:"currency"`
	CurrencyRate       *float64                                                  `json:"currencyRate,omitempty"`
	ID                 *string                                                   `json:"id,omitempty"`
	IssueDate          time.Time                                                 `json:"issueDate"`
	LineItems          []CodatDataContractsDatasetsDirectIncomeLineItem          `json:"lineItems"`
	Metadata           *CodatDataContractsDatasetsMetadata                       `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                                `json:"modifiedDate,omitempty"`
	Note               *string                                                   `json:"note,omitempty"`
	PaymentAllocations []CodatDataContractsDatasetsDetailedPaymentAllocation     `json:"paymentAllocations"`
	Reference          *string                                                   `json:"reference,omitempty"`
	SourceModifiedDate *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	SubTotal           float64                                                   `json:"subTotal"`
	SupplementalData   *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	TaxAmount          float64                                                   `json:"taxAmount"`
	TotalAmount        float64                                                   `json:"totalAmount"`
}
