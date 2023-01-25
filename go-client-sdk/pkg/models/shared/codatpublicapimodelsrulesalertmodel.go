package shared

import (
	"time"
)

type CodatPublicAPIModelsRulesAlertModel struct {
	AlertID          *string      `json:"alertId,omitempty"`
	ClientID         *string      `json:"clientId,omitempty"`
	ClientName       *string      `json:"clientName,omitempty"`
	CompanyID        *string      `json:"companyId,omitempty"`
	CompanyName      *string      `json:"companyName,omitempty"`
	Data             *interface{} `json:"data,omitempty"`
	DataConnectionID *string      `json:"dataConnectionId,omitempty"`
	ID               *string      `json:"id,omitempty"`
	Message          *string      `json:"message,omitempty"`
	RaisedOnUtc      *time.Time   `json:"raisedOnUtc,omitempty"`
	RuleID           *string      `json:"ruleId,omitempty"`
	RuleType         *string      `json:"ruleType,omitempty"`
}
