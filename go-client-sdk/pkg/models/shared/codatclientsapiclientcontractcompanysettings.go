package shared

type CodatClientsAPIClientContractCompanySettings struct {
	CompanyID               *string `json:"companyId,omitempty"`
	OfflineConnectorInstall *bool   `json:"offlineConnectorInstall,omitempty"`
	OneTimeSync             *string `json:"oneTimeSync,omitempty"`
}
