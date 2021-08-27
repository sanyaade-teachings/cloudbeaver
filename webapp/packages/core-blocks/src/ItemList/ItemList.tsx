/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import styled from 'reshadow';

import { useStyles, Style } from '@cloudbeaver/core-theming';

import { Styles, ITEM_LIST_STYLES_ARRAY } from './styles';

interface IProps {
  className?: string;
  styles?: Style[];
}

export const ItemList: React.FC<IProps> = function ItemList({
  children, className, styles,
}) {
  return styled(useStyles(...(styles || ITEM_LIST_STYLES_ARRAY)))(
    <item-list className={className}>
      <Styles.Provider value={styles || ITEM_LIST_STYLES_ARRAY}>
        {children}
      </Styles.Provider>
      <item-list-overflow />
    </item-list>
  );
};
