package shared

type CodatClientsAPIClientContractCompanySyncSettings struct {
	CompanyID         *string                                    `json:"companyId,omitempty"`
	OverridesDefaults *bool                                      `json:"overridesDefaults,omitempty"`
	Settings          []CodatClientsAPIClientContractSyncSetting `json:"settings,omitempty"`
}
