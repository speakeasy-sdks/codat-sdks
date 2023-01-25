package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadPathParams struct {
	AttachmentID   string `pathParam:"style=simple,explode=false,name=attachmentId"`
	CompanyID      string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID   string `pathParam:"style=simple,explode=false,name=connectionId"`
	DirectIncomeID string `pathParam:"style=simple,explode=false,name=directIncomeId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadResponse struct {
	ContentType string
	StatusCode  int64
}
