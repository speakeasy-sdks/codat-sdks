package shared

type CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem struct {
	AccountCategory *CodatAssessDataContractsFinancialsStatementsAccountCategory `json:"accountCategory,omitempty"`
	AccountID       *string                                                      `json:"accountId,omitempty"`
	AccountName     *string                                                      `json:"accountName,omitempty"`
	Balance         *float64                                                     `json:"balance,omitempty"`
	Date            *string                                                      `json:"date,omitempty"`
}
