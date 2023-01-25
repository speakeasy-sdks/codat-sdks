package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type DirectCosts struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDirectCosts(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *DirectCosts {
	return &DirectCosts{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCosts - Gets the direct costs for the company.
func (s *DirectCosts) GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCosts(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/directCosts", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsDirectCostPagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsDirectCostPagedResponseModel = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostID - Gets the specified direct cost for a given company.
func (s *DirectCosts) GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostID(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsDirectCost
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsDirectCost = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachments - Gets all attachments for the specified direct cost for a given company.
func (s *DirectCosts) GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachments(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsResponse{
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

// GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentID - Gets the specified direct cost attachment for a given company.
func (s *DirectCosts) GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentID(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments/{attachmentId}", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDResponse{
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

// GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDDownload - Downloads an attachment for the specified direct cost for a given company.
func (s *DirectCosts) GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDDownload(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDDownloadRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDDownloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments/{attachmentId}/download", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDDownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCosts - Posts a new direct cost to the accounting package for a given company.
func (s *DirectCosts) PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCosts(ctx context.Context, request operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsRequest) (*operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/push/directCosts", request.PathParams)

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

	res := &operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsDirectCostPushOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsDirectCostPushOperation = out
		}
	}

	return res, nil
}

// PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachment - Posts a new direct cost attachment for a given company.
func (s *DirectCosts) PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachment(ctx context.Context, request operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentRequest) (*operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/push/directCosts/{directCostId}/attachment", request.PathParams)

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

	res := &operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
