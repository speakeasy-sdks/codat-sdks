import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsPlatformCredentialsDataProvidedByEnum } from "./codatpublicapimodelsplatformcredentialsdataprovidedbyenum";
import { CodatPublicApiModelsPlatformCredentialsDatatypeFeatures } from "./codatpublicapimodelsplatformcredentialsdatatypefeatures";
import { CodatPublicApiModelsPlatformCredentialsIntegrationSupportedEnvironmentsEnum } from "./codatpublicapimodelsplatformcredentialsintegrationsupportedenvironmentsenum";
import { CodatPublicApiModelsPlatformCredentialsSourceTypeEnum } from "./codatpublicapimodelsplatformcredentialssourcetypeenum";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsPlatformCredentialsPlatformSourceModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataProvidedBy" })
  dataProvidedBy?: CodatPublicApiModelsPlatformCredentialsDataProvidedByEnum;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsPlatformCredentialsDatatypeFeatures })
  @Expose({ name: "datatypeFeatures" })
  @Type(() => CodatPublicApiModelsPlatformCredentialsDatatypeFeatures)
  datatypeFeatures?: CodatPublicApiModelsPlatformCredentialsDatatypeFeatures[];

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "integrationId" })
  integrationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isBeta" })
  isBeta?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isOfflineConnector" })
  isOfflineConnector?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "linkedConnectionsCount" })
  linkedConnectionsCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "logoUrl" })
  logoUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: CodatPublicApiModelsPlatformCredentialsSourceTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supportedEnvironments" })
  supportedEnvironments?: CodatPublicApiModelsPlatformCredentialsIntegrationSupportedEnvironmentsEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "totalConnectionsCount" })
  totalConnectionsCount?: number;
}