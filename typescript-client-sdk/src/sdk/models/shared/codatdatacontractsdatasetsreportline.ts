import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataContractsDatasetsReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: CodatDataContractsDatasetsReportLine })
  items?: CodatDataContractsDatasetsReportLine[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}