import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsPaymentMethodPagedResponseHrefModel } from "./codatdatacontractsdatasetspaymentmethodpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsPaymentMethodPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsPaymentMethodPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsPaymentMethodPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsPaymentMethodPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsPaymentMethodPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsPaymentMethodPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsPaymentMethodPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsPaymentMethodPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsPaymentMethodPagedResponseHrefModel;
}