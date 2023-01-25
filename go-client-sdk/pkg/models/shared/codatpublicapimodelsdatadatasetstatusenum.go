package shared

type CodatPublicAPIModelsDataDatasetStatusEnum string

const (
	CodatPublicAPIModelsDataDatasetStatusEnumInitial            CodatPublicAPIModelsDataDatasetStatusEnum = "Initial"
	CodatPublicAPIModelsDataDatasetStatusEnumQueued             CodatPublicAPIModelsDataDatasetStatusEnum = "Queued"
	CodatPublicAPIModelsDataDatasetStatusEnumFetching           CodatPublicAPIModelsDataDatasetStatusEnum = "Fetching"
	CodatPublicAPIModelsDataDatasetStatusEnumMapQueued          CodatPublicAPIModelsDataDatasetStatusEnum = "MapQueued"
	CodatPublicAPIModelsDataDatasetStatusEnumMapping            CodatPublicAPIModelsDataDatasetStatusEnum = "Mapping"
	CodatPublicAPIModelsDataDatasetStatusEnumComplete           CodatPublicAPIModelsDataDatasetStatusEnum = "Complete"
	CodatPublicAPIModelsDataDatasetStatusEnumFetchError         CodatPublicAPIModelsDataDatasetStatusEnum = "FetchError"
	CodatPublicAPIModelsDataDatasetStatusEnumMapError           CodatPublicAPIModelsDataDatasetStatusEnum = "MapError"
	CodatPublicAPIModelsDataDatasetStatusEnumInternalError      CodatPublicAPIModelsDataDatasetStatusEnum = "InternalError"
	CodatPublicAPIModelsDataDatasetStatusEnumProcessingQueued   CodatPublicAPIModelsDataDatasetStatusEnum = "ProcessingQueued"
	CodatPublicAPIModelsDataDatasetStatusEnumProcessing         CodatPublicAPIModelsDataDatasetStatusEnum = "Processing"
	CodatPublicAPIModelsDataDatasetStatusEnumProcessingError    CodatPublicAPIModelsDataDatasetStatusEnum = "ProcessingError"
	CodatPublicAPIModelsDataDatasetStatusEnumValidationQueued   CodatPublicAPIModelsDataDatasetStatusEnum = "ValidationQueued"
	CodatPublicAPIModelsDataDatasetStatusEnumValidating         CodatPublicAPIModelsDataDatasetStatusEnum = "Validating"
	CodatPublicAPIModelsDataDatasetStatusEnumValidationError    CodatPublicAPIModelsDataDatasetStatusEnum = "ValidationError"
	CodatPublicAPIModelsDataDatasetStatusEnumAuthError          CodatPublicAPIModelsDataDatasetStatusEnum = "AuthError"
	CodatPublicAPIModelsDataDatasetStatusEnumCancelled          CodatPublicAPIModelsDataDatasetStatusEnum = "Cancelled"
	CodatPublicAPIModelsDataDatasetStatusEnumNotSupported       CodatPublicAPIModelsDataDatasetStatusEnum = "NotSupported"
	CodatPublicAPIModelsDataDatasetStatusEnumRateLimitError     CodatPublicAPIModelsDataDatasetStatusEnum = "RateLimitError"
	CodatPublicAPIModelsDataDatasetStatusEnumPermissionsError   CodatPublicAPIModelsDataDatasetStatusEnum = "PermissionsError"
	CodatPublicAPIModelsDataDatasetStatusEnumPrerequisiteNotMet CodatPublicAPIModelsDataDatasetStatusEnum = "PrerequisiteNotMet"
)
