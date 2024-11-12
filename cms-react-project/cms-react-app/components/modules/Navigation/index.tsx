import { Menu } from '@hubspot/cms-components';
import {
  ImageField,
  MenuField,
  ModuleFields,
} from '@hubspot/cms-components/fields';
import logo from '../../../assets/clear.svg';
import headerStyles from '../../../styles/header.module.css';

export function Component({ fieldValues }: any) {
  const { src, alt, width, height } = fieldValues.logo;

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.header__inner}>
        <div className={headerStyles.header__branding}>
          <img src={src} alt={alt} width={width} height={height} />
        </div>
        <div className={headerStyles.header__nav}>
          <Menu fieldPath="menu" />
        </div>
      </div>
    </header>
  );
}

const DEFAULT_MENU_ID = '<YOUR_DEFAULT_MENU_ID>';

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: logo, height: 100, alt: 'Logo' }}
      resizable={false}
    />
    <MenuField name="menu" label="Menu" default={DEFAULT_MENU_ID} />
  </ModuleFields>
);

export const meta = {
  label: 'Navigation',
};