import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel } from "./codatdatacontractsdatasetscommercepaymentmethodpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommercePaymentMethodPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel;
}