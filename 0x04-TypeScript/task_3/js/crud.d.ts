import { RowID, RowElement } from "./interface";

// crud.d.ts
declare function createRow(data: RowElement): RowID;
declare function readRow(id: RowID): RowElement | undefined;
declare function updateRow(id: RowID, data: RowElement): boolean;
declare function deleteRow(id: RowID): boolean;
