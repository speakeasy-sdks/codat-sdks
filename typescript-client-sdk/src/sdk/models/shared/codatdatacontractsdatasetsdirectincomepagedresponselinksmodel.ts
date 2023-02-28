import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsDirectIncomePagedResponseHrefModel } from "./codatdatacontractsdatasetsdirectincomepagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsDirectIncomePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsDirectIncomePagedResponseHrefModel)
  current?: CodatDataContractsDatasetsDirectIncomePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsDirectIncomePagedResponseHrefModel)
  next?: CodatDataContractsDatasetsDirectIncomePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsDirectIncomePagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsDirectIncomePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsDirectIncomePagedResponseHrefModel)
  self?: CodatDataContractsDatasetsDirectIncomePagedResponseHrefModel;
}