package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type Info struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewInfo(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Info {
	return &Info{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCompaniesCompanyIDDataInfo - Gets the latest basic info for a company.
func (s *Info) GetCompaniesCompanyIDDataInfo(ctx context.Context, request operations.GetCompaniesCompanyIDDataInfoRequest) (*operations.GetCompaniesCompanyIDDataInfoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/info", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDDataInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsCompanyDataset
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsCompanyDataset = out
		}
	}

	return res, nil
}

// PostCompaniesCompanyIDDataInfo - Initiates the process of synchronising basic info for a company
func (s *Info) PostCompaniesCompanyIDDataInfo(ctx context.Context, request operations.PostCompaniesCompanyIDDataInfoRequest) (*operations.PostCompaniesCompanyIDDataInfoResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/info", request.PathParams)

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

	res := &operations.PostCompaniesCompanyIDDataInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatPublicAPIModelsDataDataSet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatPublicAPIModelsDataDataSet = out
		}
	}

	return res, nil
}
