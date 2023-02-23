import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsPlatformCredentialsDataProvidedByEnum } from "./codatpublicapimodelsplatformcredentialsdataprovidedbyenum";
import { CodatPublicApiModelsPlatformCredentialsDatatypeFeatures } from "./codatpublicapimodelsplatformcredentialsdatatypefeatures";
import { CodatPublicApiModelsPlatformCredentialsIntegrationSupportedEnvironmentsEnum } from "./codatpublicapimodelsplatformcredentialsintegrationsupportedenvironmentsenum";
import { CodatPublicApiModelsPlatformCredentialsSourceTypeEnum } from "./codatpublicapimodelsplatformcredentialssourcetypeenum";


export class CodatPublicApiModelsPlatformCredentialsPlatformSourceModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataProvidedBy" })
  dataProvidedBy?: CodatPublicApiModelsPlatformCredentialsDataProvidedByEnum;

  @SpeakeasyMetadata({ data: "json, name=datatypeFeatures", elemType: CodatPublicApiModelsPlatformCredentialsDatatypeFeatures })
  datatypeFeatures?: CodatPublicApiModelsPlatformCredentialsDatatypeFeatures[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId?: string;

  @SpeakeasyMetadata({ data: "json, name=isBeta" })
  isBeta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isOfflineConnector" })
  isOfflineConnector?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedConnectionsCount" })
  linkedConnectionsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: CodatPublicApiModelsPlatformCredentialsSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=supportedEnvironments" })
  supportedEnvironments?: CodatPublicApiModelsPlatformCredentialsIntegrationSupportedEnvironmentsEnum;

  @SpeakeasyMetadata({ data: "json, name=totalConnectionsCount" })
  totalConnectionsCount?: number;
}