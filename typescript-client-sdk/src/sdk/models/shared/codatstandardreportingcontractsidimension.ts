import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatStandardReportingContractsIDimensionItem } from "./codatstandardreportingcontractsidimensionitem";
import { Expose, Type } from "class-transformer";


export class CodatStandardReportingContractsIDimension extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata({ elemType: CodatStandardReportingContractsIDimensionItem })
  @Expose({ name: "items" })
  @Type(() => CodatStandardReportingContractsIDimensionItem)
  items?: CodatStandardReportingContractsIDimensionItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}