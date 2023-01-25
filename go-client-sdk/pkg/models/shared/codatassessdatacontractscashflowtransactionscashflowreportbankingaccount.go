package shared

type CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount struct {
	AccountName     *string                                                `json:"accountName,omitempty"`
	AccountProvider *string                                                `json:"accountProvider,omitempty"`
	AccountType     *string                                                `json:"accountType,omitempty"`
	Currency        *string                                                `json:"currency,omitempty"`
	CurrentBalance  *float64                                               `json:"currentBalance,omitempty"`
	PlatformName    *string                                                `json:"platformName,omitempty"`
	SourceRef       *CodatAssessDataContractsCashFlowTransactionsSourceRef `json:"sourceRef,omitempty"`
}
