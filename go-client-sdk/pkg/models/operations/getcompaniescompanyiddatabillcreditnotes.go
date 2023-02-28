package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBillCreditNotesPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBillCreditNotesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataBillCreditNotesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataBillCreditNotesRequest struct {
	PathParams  GetCompaniesCompanyIDDataBillCreditNotesPathParams
	QueryParams GetCompaniesCompanyIDDataBillCreditNotesQueryParams
	Security    GetCompaniesCompanyIDDataBillCreditNotesSecurity
}

type GetCompaniesCompanyIDDataBillCreditNotesResponse struct {
	CodatDataContractsDatasetsBillCreditNotePagedResponseModel *shared.CodatDataContractsDatasetsBillCreditNotePagedResponseModel
	ContentType                                                string
	StatusCode                                                 int
}
