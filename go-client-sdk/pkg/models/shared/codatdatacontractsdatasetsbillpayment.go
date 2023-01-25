package shared

import (
	"time"
)

type CodatDataContractsDatasetsBillPayment struct {
	AccountRef         *CodatDataContractsDatasetsAccountRef                     `json:"accountRef,omitempty"`
	Currency           *string                                                   `json:"currency,omitempty"`
	CurrencyRate       *float64                                                  `json:"currencyRate,omitempty"`
	Date               time.Time                                                 `json:"date"`
	ID                 *string                                                   `json:"id,omitempty"`
	Lines              []CodatDataContractsDatasetsBillPaymentLine               `json:"lines,omitempty"`
	Metadata           *CodatDataContractsDatasetsMetadata                       `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                                `json:"modifiedDate,omitempty"`
	Note               *string                                                   `json:"note,omitempty"`
	PaymentMethodRef   *CodatDataContractsDatasetsPaymentMethodRef               `json:"paymentMethodRef,omitempty"`
	Reference          *string                                                   `json:"reference,omitempty"`
	SourceModifiedDate *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	SupplementalData   *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	SupplierRef        *CodatDataContractsDatasetsSupplierRef                    `json:"supplierRef,omitempty"`
	TotalAmount        *float64                                                  `json:"totalAmount,omitempty"`
}
