package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"time"
)

type GetCompaniesCompanyIDFilesDownloadPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDFilesDownloadQueryParams struct {
	Date *time.Time `queryParam:"style=form,explode=true,name=date"`
}

type GetCompaniesCompanyIDFilesDownloadSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDFilesDownloadRequest struct {
	PathParams  GetCompaniesCompanyIDFilesDownloadPathParams
	QueryParams GetCompaniesCompanyIDFilesDownloadQueryParams
	Security    GetCompaniesCompanyIDFilesDownloadSecurity
}

type GetCompaniesCompanyIDFilesDownloadResponse struct {
	ContentType string
	StatusCode  int64
}
