package shared

type CodatPullMessagesContractsDatasetMessages struct {
	Fetch      []CodatPullMessagesContractsFetchMessage      `json:"fetch,omitempty"`
	Map        []CodatPullMessagesContractsMapMessage        `json:"map,omitempty"`
	Validation []CodatPullMessagesContractsValidationMessage `json:"validation,omitempty"`
}
