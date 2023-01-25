package shared

type CodatDataContractsDatasetsBankingAccountIdentifiers struct {
	BankCode            *string `json:"bankCode,omitempty"`
	Bic                 *string `json:"bic,omitempty"`
	Iban                *string `json:"iban,omitempty"`
	MaskedAccountNumber *string `json:"maskedAccountNumber,omitempty"`
	Number              *string `json:"number,omitempty"`
	Subtype             *string `json:"subtype,omitempty"`
	Type                string  `json:"type"`
}
