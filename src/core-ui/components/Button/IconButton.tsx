import { ReactNode } from 'react';

import clsx from 'clsx';
import { FaCube, FaSpinner } from 'react-icons/fa';

import './_button.scss';
import { ButtonThemeType, ButtonType } from './models';
import { iconButtonSize, iconTextTheme, outlineTheme, solidTheme } from './theme';

interface Props {
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  onClick: () => void;

  isLoading: boolean;
  isLoadingRender: () => ReactNode;
  icon: ReactNode;

  sm?: boolean;
  md?: boolean;
  lg?: boolean;

  solid?: boolean;
  outline?: boolean;
  text?: boolean;

  primary?: boolean;
  secondary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  gray?: boolean;
}

export function IconButton({
  type,
  className,
  disabled,
  onClick,

  isLoading,
  isLoadingRender,
  icon,

  sm,
  md,
  lg,

  solid,
  outline,
  text,

  primary,
  secondary,
  info,
  success,
  warning,
  danger,
  gray,
  ...rest
}: Props) {
  const buildThemeClass = () => {
    let theme: ButtonThemeType | null = null;
    if (solid) theme = solidTheme;
    if (outline) theme = outlineTheme;
    if (text) theme = iconTextTheme;

    if (theme) {
      if (disabled) return theme.disabled;
      if (primary) return theme.primary;
      if (secondary) return theme.secondary;
      if (info) return theme.info;
      if (success) return theme.success;
      if (warning) return theme.warning;
      if (danger) return theme.danger;
      if (gray) return theme.gray;
    }

    return '';
  };

  const buildSizeClass = () => {
    if (sm) return iconButtonSize.sm;
    if (md) return iconButtonSize.md;
    if (lg) return iconButtonSize.lg;
    return iconButtonSize.md;
  };

  const buildClassName = () => {
    if (text) {
      return clsx(buildThemeClass(), className, isLoading && 'cursor-wait', 'px-2');
    }
    return clsx(buildThemeClass(), buildSizeClass(), className, isLoading && 'cursor-wait');
  };

  return (
    <button
      type={type}
      className={clsx('ds-btn-icon', buildClassName())}
      onClick={!isLoading && !disabled ? onClick : () => {}}
      disabled={isLoading || disabled}
      {...rest}
    >
      <div className={clsx('flex items-center', isLoading ? 'opacity-0' : '')}>{icon}</div>
      <div className="absolute flex items-center justify-center">
        {isLoading && isLoadingRender()}
      </div>
    </button>
  );
}

IconButton.defaultProps = {
  type: 'button',
  className: '',
  disabled: false,
  onClick: () => {},

  isLoading: false,
  isLoadingRender: () => <FaSpinner className="animate-spin" />,
  icon: <FaCube />,

  sm: false,
  md: false,
  lg: false,

  solid: false,
  outline: false,
  text: false,

  primary: false,
  secondary: false,
  info: false,
  success: false,
  warning: false,
  danger: false,
  gray: false,
};

export default IconButton;
