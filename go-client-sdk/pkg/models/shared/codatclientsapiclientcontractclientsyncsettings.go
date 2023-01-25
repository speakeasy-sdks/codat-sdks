package shared

type CodatClientsAPIClientContractClientSyncSettings struct {
	ClientID          *string                                    `json:"clientId,omitempty"`
	OverridesDefaults *bool                                      `json:"overridesDefaults,omitempty"`
	Settings          []CodatClientsAPIClientContractSyncSetting `json:"settings,omitempty"`
}
