package shared

import (
	"time"
)

type CodatDataContractsDatasetsPayment struct {
	AccountRef         *CodatDataContractsDatasetsAccountRef                     `json:"accountRef,omitempty"`
	Currency           *string                                                   `json:"currency,omitempty"`
	CurrencyRate       *float64                                                  `json:"currencyRate,omitempty"`
	CustomerRef        *CodatDataContractsDatasetsCustomerRef                    `json:"customerRef,omitempty"`
	Date               time.Time                                                 `json:"date"`
	ID                 *string                                                   `json:"id,omitempty"`
	Lines              []CodatDataContractsDatasetsPaymentLine                   `json:"lines,omitempty"`
	Metadata           *CodatDataContractsDatasetsMetadata                       `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                                `json:"modifiedDate,omitempty"`
	Note               *string                                                   `json:"note,omitempty"`
	PaymentMethodRef   *CodatDataContractsDatasetsPaymentMethodRef               `json:"paymentMethodRef,omitempty"`
	Reference          *string                                                   `json:"reference,omitempty"`
	SourceModifiedDate *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	SupplementalData   *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	TotalAmount        *float64                                                  `json:"totalAmount,omitempty"`
}
