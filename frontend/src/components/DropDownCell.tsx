import * as React from 'react';
import {
  DropDownList,
  DropDownListChangeEvent,
} from '@progress/kendo-react-dropdowns';
import { GridCellProps } from '@progress/kendo-react-grid';

const DropDownCell = (props: GridCellProps) => {
  const localizedData = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' },
  ];

  const handleChange = (e: DropDownListChangeEvent) => {
    if (props.onChange) {
      props.onChange({
        dataIndex: 0,
        dataItem: props.dataItem,
        field: props.field,
        syntheticEvent: e.syntheticEvent,
        value: e.target.value.value,
      });
    }
  };

  const { dataItem } = props;
  const field = props.field || '';
  const dataValue = dataItem[field] === null ? '' : dataItem[field];

  return (
    <td>
      {dataItem.inEdit ? (
        <DropDownList
          style={{ width: '100px' }}
          onChange={handleChange}
          value={localizedData.find((c) => c.value === dataValue)}
          data={localizedData}
          textField='text'
        />
      ) : (
        dataValue.toString()
      )}
    </td>
  );
};
export default DropDownCell;
