import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyCompanyEventStreamItem } from "./codatpublicapimodelscompanycompanyeventstreamitem";


export class CodatPublicApiModelsCompanyCompanyEventStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: CodatPublicApiModelsCompanyCompanyEventStreamItem })
  data: CodatPublicApiModelsCompanyCompanyEventStreamItem[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;
}