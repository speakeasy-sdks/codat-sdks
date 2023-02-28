import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyDataConnection } from "./codatpublicapimodelscompanydataconnection";
import { Expose, Transform, Type } from "class-transformer";


export class CodatPublicApiModelsCompanyCompany extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "createdByUserName" })
  createdByUserName?: string;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsCompanyDataConnection })
  @Expose({ name: "dataConnections" })
  @Type(() => CodatPublicApiModelsCompanyDataConnection)
  dataConnections: CodatPublicApiModelsCompanyDataConnection[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastSync" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSync?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "platform" })
  platform: string;

  @SpeakeasyMetadata()
  @Expose({ name: "redirect" })
  redirect: string;
}