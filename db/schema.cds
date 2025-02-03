namespace TESTGS1;

using {
    cuid,
    sap.common
} from '@sap/cds/common';

  entity Books {
    key ID : Integer;
    title  : String(50);
    author : String(50);
    stock  : Integer;
  }