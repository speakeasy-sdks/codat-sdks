package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetRulesAlertsAlertIDPathParams struct {
	AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
}

type GetRulesAlertsAlertIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetRulesAlertsAlertIDRequest struct {
	PathParams GetRulesAlertsAlertIDPathParams
	Security   GetRulesAlertsAlertIDSecurity
}

type GetRulesAlertsAlertIDResponse struct {
	CodatPublicAPIModelsRulesAlertModel *shared.CodatPublicAPIModelsRulesAlertModel
	ContentType                         string
	StatusCode                          int
}
