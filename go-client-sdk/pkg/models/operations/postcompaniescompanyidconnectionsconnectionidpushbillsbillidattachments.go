package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDAttachmentsPathParams struct {
	BillID       string `pathParam:"style=simple,explode=false,name=billId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDAttachmentsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDAttachmentsRequest struct {
	PathParams PostCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDAttachmentsPathParams
	Security   PostCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDAttachmentsSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDAttachmentsResponse struct {
	ContentType string
	StatusCode  int64
}
