import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsDirectCostPagedResponseHrefModel } from "./codatdatacontractsdatasetsdirectcostpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsDirectCostPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsDirectCostPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsDirectCostPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsDirectCostPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsDirectCostPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsDirectCostPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsDirectCostPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsDirectCostPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsDirectCostPagedResponseHrefModel;
}