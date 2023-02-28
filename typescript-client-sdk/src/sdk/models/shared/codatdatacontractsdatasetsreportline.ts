import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsReportLine })
  @Expose({ name: "items" })
  @Type(() => CodatDataContractsDatasetsReportLine)
  items?: CodatDataContractsDatasetsReportLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}