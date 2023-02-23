import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatPublicApiModelsCompanyAddCompanyModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platformType" })
  platformType?: string;
}