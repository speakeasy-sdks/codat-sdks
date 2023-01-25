package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentPathParams struct {
	CompanyID      string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID   string `pathParam:"style=simple,explode=false,name=connectionId"`
	DirectIncomeID string `pathParam:"style=simple,explode=false,name=directIncomeId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentRequest struct {
	PathParams PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentPathParams
	Security   PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentResponse struct {
	ContentType string
	StatusCode  int64
}
