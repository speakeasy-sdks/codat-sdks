import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsTrackingCategoryRef } from "./codatdatacontractsdatasetstrackingcategoryref";
import { CodatDataContractsDatasetsCustomerRef } from "./codatdatacontractsdatasetscustomerref";
import { CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum } from "./codatdatacontractsdatasetsaccountspayableisbilledtotypeenum";
import { CodatDataContractsDatasetsProjectRef } from "./codatdatacontractsdatasetsprojectref";



export class CodatDataContractsDatasetsAccountsPayableTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: CodatDataContractsDatasetsTrackingCategoryRef })
  categoryRefs: CodatDataContractsDatasetsTrackingCategoryRef[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: CodatDataContractsDatasetsCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: CodatDataContractsDatasetsProjectRef;
}
