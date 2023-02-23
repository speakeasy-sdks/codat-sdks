package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/utils"
	"net/http"
)

type datasetLogs struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
	language       string
	sdkVersion     string
	genVersion     string
}

func newDatasetLogs(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *datasetLogs {
	return &datasetLogs{
		defaultClient:  defaultClient,
		securityClient: securityClient,
		serverURL:      serverURL,
		language:       language,
		sdkVersion:     sdkVersion,
		genVersion:     genVersion,
	}
}

// GetCompaniesCompanyIDDataDatasetLogsDatasetID - Gets dataset messages for a given dataset
func (s *datasetLogs) GetCompaniesCompanyIDDataDatasetLogsDatasetID(ctx context.Context, request operations.GetCompaniesCompanyIDDataDatasetLogsDatasetIDRequest) (*operations.GetCompaniesCompanyIDDataDatasetLogsDatasetIDResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/datasetLogs/{datasetId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDDataDatasetLogsDatasetIDResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatPullMessagesContractsDatasetMessages
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatPullMessagesContractsDatasetMessages = out
		}
	}

	return res, nil
}
