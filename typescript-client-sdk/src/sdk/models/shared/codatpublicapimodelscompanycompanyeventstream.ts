import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyCompanyEventStreamItem } from "./codatpublicapimodelscompanycompanyeventstreamitem";
import { Expose, Transform, Type } from "class-transformer";


export class CodatPublicApiModelsCompanyCompanyEventStream extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsCompanyCompanyEventStreamItem })
  @Expose({ name: "data" })
  @Type(() => CodatPublicApiModelsCompanyCompanyEventStreamItem)
  data: CodatPublicApiModelsCompanyCompanyEventStreamItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  from?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  to?: Date;
}