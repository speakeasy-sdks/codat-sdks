import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutProfileSyncSettingsDataTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: string;
}


export class PutProfileSyncSettingsDataTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutProfileSyncSettingsDataTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutProfileSyncSettingsDataTypePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatPublicApiModelsClientsClientSyncSettingsSinglePutModel;

  @SpeakeasyMetadata()
  security: PutProfileSyncSettingsDataTypeSecurity;
}


export class PutProfileSyncSettingsDataTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsSyncSettingsSyncSettingModel?: shared.CodatPublicApiModelsSyncSettingsSyncSettingModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
