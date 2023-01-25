package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetRulesAlertsAlertIDPathParams struct {
	AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
}

type GetRulesAlertsAlertIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetRulesAlertsAlertIDRequest struct {
	PathParams GetRulesAlertsAlertIDPathParams
	Security   GetRulesAlertsAlertIDSecurity
}

type GetRulesAlertsAlertIDResponse struct {
	CodatPublicAPIModelsRulesAlertModel *shared.CodatPublicAPIModelsRulesAlertModel
	ContentType                         string
	StatusCode                          int64
}
