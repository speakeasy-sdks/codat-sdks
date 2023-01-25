package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type Invoices struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewInvoices(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Invoices {
	return &Invoices{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

func (s *Invoices) GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachments(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsAttachmentsDataset
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsAttachmentsDataset = out
		}
	}

	return res, nil
}

func (s *Invoices) GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentID(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments/{attachmentId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsAttachmentsDatasetAttachment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsAttachmentsDatasetAttachment = out
		}
	}

	return res, nil
}

func (s *Invoices) GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownload(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments/{attachmentId}/download", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetCompaniesCompanyIDDataInvoices - Gets the latest invoices for a company, with pagination
func (s *Invoices) GetCompaniesCompanyIDDataInvoices(ctx context.Context, request operations.GetCompaniesCompanyIDDataInvoicesRequest) (*operations.GetCompaniesCompanyIDDataInvoicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/invoices", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDDataInvoicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsInvoicePagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsInvoicePagedResponseModel = out
		}
	}

	return res, nil
}

func (s *Invoices) GetCompaniesCompanyIDDataInvoicesInvoiceID(ctx context.Context, request operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDRequest) (*operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/invoices/{invoiceId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsInvoice
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsInvoice = out
		}
	}

	return res, nil
}

func (s *Invoices) GetCompaniesCompanyIDDataInvoicesInvoiceIDPdf(ctx context.Context, request operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfRequest) (*operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/invoices/{invoiceId}/pdf", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostCompaniesCompanyIDConnectionsConnectionIDPushInvoices - Posts a new invoice to the accounting package for a given company.
func (s *Invoices) PostCompaniesCompanyIDConnectionsConnectionIDPushInvoices(ctx context.Context, request operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesRequest) (*operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/push/invoices", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsInvoicePushOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsInvoicePushOperation = out
		}
	}

	return res, nil
}

func (s *Invoices) PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachment(ctx context.Context, request operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentRequest) (*operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/push/invoices/{invoiceId}/attachment", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceID - Posts an updated invoice to the accounting package for a given company.
func (s *Invoices) PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceID(ctx context.Context, request operations.PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDRequest) (*operations.PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/push/invoices/{invoiceId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsInvoicePushOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsInvoicePushOperation = out
		}
	}

	return res, nil
}
