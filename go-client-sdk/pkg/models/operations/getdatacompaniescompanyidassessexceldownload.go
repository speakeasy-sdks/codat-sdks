package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetDataCompaniesCompanyIDAssessExcelDownloadPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetDataCompaniesCompanyIDAssessExcelDownloadQueryParams struct {
	ReportType *string `queryParam:"style=form,explode=true,name=reportType"`
}

type GetDataCompaniesCompanyIDAssessExcelDownloadSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetDataCompaniesCompanyIDAssessExcelDownloadRequest struct {
	PathParams  GetDataCompaniesCompanyIDAssessExcelDownloadPathParams
	QueryParams GetDataCompaniesCompanyIDAssessExcelDownloadQueryParams
	Security    GetDataCompaniesCompanyIDAssessExcelDownloadSecurity
}

type GetDataCompaniesCompanyIDAssessExcelDownloadResponse struct {
	ContentType                                                                string
	StatusCode                                                                 int
	GetDataCompaniesCompanyIDAssessExcelDownload200ApplicationJSONBinaryString []byte
}
