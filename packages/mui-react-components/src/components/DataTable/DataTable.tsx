import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface FileOrFolder {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileOrFolder[];
}

interface DataTableProps {
  data: FileOrFolder[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const handleRowClick = (id: string) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const flattenData = (data: FileOrFolder[], parentId: string | null = null): GridRowsProp => {
    return data.reduce((acc, item) => {
      const row = { id: item.id, name: item.name, type: item.type, parentId };
      acc.push(row);
      if (item.type === 'folder' && expandedRows.has(item.id) && item.children) {
        acc.push(...flattenData(item.children, item.id));
      }
      return acc;
    }, [] as GridRowsProp);
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'type', headerName: 'Type', width: 150 },
  ];

  const rows = flattenData(data);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={(params) => handleRowClick(params.id as string)}
        getRowClassName={(params) => (params.row.parentId ? 'child-row' : '')}
      />
    </div>
  );
};

export default DataTable;
