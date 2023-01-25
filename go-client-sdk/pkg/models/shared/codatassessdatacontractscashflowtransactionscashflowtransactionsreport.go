package shared

type CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport struct {
	DataSources []CodatAssessDataContractsCashFlowTransactionsAccountsDataSource     `json:"dataSources,omitempty"`
	ReportInfo  *CodatAssessDataContractsCommonPagedReportInfo                       `json:"reportInfo,omitempty"`
	ReportItems []CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource `json:"reportItems,omitempty"`
}
