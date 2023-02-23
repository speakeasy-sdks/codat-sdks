import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsContactRef } from "./codatdatacontractsdatasetscontactref";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsDetailedPaymentAllocation } from "./codatdatacontractsdatasetsdetailedpaymentallocation";
import { CodatDataContractsDatasetsDirectIncomeLineItem } from "./codatdatacontractsdatasetsdirectincomelineitem";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";


export class CodatDataContractsDatasetsDirectIncome extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactRef" })
  contactRef?: CodatDataContractsDatasetsContactRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: CodatDataContractsDatasetsDirectIncomeLineItem })
  lineItems: CodatDataContractsDatasetsDirectIncomeLineItem[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: CodatDataContractsDatasetsDetailedPaymentAllocation })
  paymentAllocations: CodatDataContractsDatasetsDetailedPaymentAllocation[];

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;
}