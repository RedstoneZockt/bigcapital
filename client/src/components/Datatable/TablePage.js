import React, { useContext } from 'react';
import TableContext from './TableContext';

/**
 * Table page.
 */
export default function TablePage() {
  const {
    table: { page },
    props: {
      spinnerProps,
      loading,
      TableRowsRenderer,
      TableLoadingRenderer,
      TableNoResultsRow,
    },
  } = useContext(TableContext);

  if (loading) {
    return <TableLoadingRenderer spinnerProps={spinnerProps} />;
  }
  if (page.length === 0) {
    return <TableNoResultsRow />;
  }
  return (<TableRowsRenderer />);
}
