package shared

type CodatDataContractsDatasetsBankTransactions struct {
	AccountID       *string                                       `json:"accountId,omitempty"`
	ContractVersion *string                                       `json:"contractVersion,omitempty"`
	Transactions    []CodatDataContractsDatasetsBankStatementLine `json:"transactions,omitempty"`
}
