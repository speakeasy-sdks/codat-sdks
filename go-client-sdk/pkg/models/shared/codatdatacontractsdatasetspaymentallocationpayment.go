package shared

import (
	"time"
)

type CodatDataContractsDatasetsPaymentAllocationPayment struct {
	AccountRef   *CodatDataContractsDatasetsAccountRef `json:"accountRef,omitempty"`
	Currency     *string                               `json:"currency,omitempty"`
	CurrencyRate *float64                              `json:"currencyRate,omitempty"`
	ID           *string                               `json:"id,omitempty"`
	Note         *string                               `json:"note,omitempty"`
	PaidOnDate   *time.Time                            `json:"paidOnDate,omitempty"`
	Reference    *string                               `json:"reference,omitempty"`
	TotalAmount  *float64                              `json:"totalAmount,omitempty"`
}
