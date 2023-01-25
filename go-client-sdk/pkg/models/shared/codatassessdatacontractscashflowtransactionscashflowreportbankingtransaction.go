package shared

type CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction struct {
	Amount              *float64                                                         `json:"amount,omitempty"`
	Currency            *string                                                          `json:"currency,omitempty"`
	Date                *string                                                          `json:"date,omitempty"`
	Description         *string                                                          `json:"description,omitempty"`
	ID                  *string                                                          `json:"id,omitempty"`
	SourceRef           *CodatAssessDataContractsCashFlowTransactionsSourceRef           `json:"sourceRef,omitempty"`
	TransactionCategory *CodatAssessDataContractsCashFlowTransactionsTransactionCategory `json:"transactionCategory,omitempty"`
}
