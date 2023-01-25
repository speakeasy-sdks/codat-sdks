package shared

type CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem struct {
	AccountCategory *CodatAssessDataContractsFinancialsStatementsAccountCategory `json:"accountCategory,omitempty"`
	AccountName     *string                                                      `json:"accountName,omitempty"`
	Balance         *float64                                                     `json:"balance,omitempty"`
	Date            *string                                                      `json:"date,omitempty"`
}
