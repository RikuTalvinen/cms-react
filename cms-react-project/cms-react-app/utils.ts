import { logInfo } from '@hubspot/cms-components';
import {
  ICON_MAP,
} from './constants.ts';

export function getIcon(iconCode: string) {
  switch (iconCode) {
    case 'Arrow':
      return ICON_MAP.ARROW;

    default:
      return '';
  }
}
