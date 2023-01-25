package shared

import (
	"time"
)

type CodatDataContractsDatasetsCompanyDataset struct {
	AccountingPlatformRef  *string                             `json:"accountingPlatformRef,omitempty"`
	Addresses              []CodatDataContractsDatasetsAddress `json:"addresses,omitempty"`
	BaseCurrency           *string                             `json:"baseCurrency,omitempty"`
	CompanyLegalName       *string                             `json:"companyLegalName,omitempty"`
	CompanyName            *string                             `json:"companyName,omitempty"`
	ContractVersion        *string                             `json:"contractVersion,omitempty"`
	CreatedDate            *time.Time                          `json:"createdDate,omitempty"`
	FinancialYearStartDate *time.Time                          `json:"financialYearStartDate,omitempty"`
	LedgerLockDate         *time.Time                          `json:"ledgerLockDate,omitempty"`
	PhoneNumbers           []CodatDataContractsDatasetsPhone   `json:"phoneNumbers,omitempty"`
	RegistrationNumber     *string                             `json:"registrationNumber,omitempty"`
	SourceUrls             map[string]string                   `json:"sourceUrls,omitempty"`
	TaxNumber              *string                             `json:"taxNumber,omitempty"`
	WebLinks               []CodatDataContractsDatasetsWebLink `json:"webLinks,omitempty"`
}
