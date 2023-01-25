package shared

type CodatPublicAPIModelsRulesAddRuleModel struct {
	CompanyID string                              `json:"companyId"`
	Notifiers *CodatPublicAPIModelsRulesNotifiers `json:"notifiers,omitempty"`
	Type      string                              `json:"type"`
}
