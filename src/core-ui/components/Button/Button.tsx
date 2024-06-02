import { ReactNode } from 'react';

import clsx from 'clsx';
import { FaSpinner } from 'react-icons/fa';

import './_button.scss';
import { ButtonThemeType, ButtonType } from './models';
import { buttonSize, outlineTheme, solidTheme, textTheme } from './theme';

interface Props {
  children: ReactNode;

  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  onClick: () => void;

  isLoading?: boolean;
  isLoadingRender: () => ReactNode;

  leftItem?: ReactNode;
  rightItem?: ReactNode;

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

export function Button({
  children,

  type,
  className,
  disabled,
  onClick,

  isLoading,
  isLoadingRender,

  leftItem,
  rightItem,

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
    if (text) theme = textTheme;

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
    return 'text-inherit';
  };

  const buildSizeClass = () => {
    if (sm) return buttonSize.sm;
    if (md) return buttonSize.md;
    if (lg) return buttonSize.lg;
    return buttonSize.md;
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
      className={clsx('ds-btn', buildClassName())}
      onClick={!isLoading && !disabled ? onClick : () => {}}
      disabled={isLoading || disabled}
      {...rest}
    >
      <div className={clsx('ds-btn-body', isLoading ? 'is-loading' : '')}>
        {leftItem && <span className="ds-btn-left">{leftItem}</span>}
        {children}
        {rightItem && <span className="ds-btn-right">{rightItem}</span>}
      </div>
      {isLoading && <div className="ds-btn-loading-body">{isLoadingRender()}</div>}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  className: '',
  disabled: false,
  onClick: () => {},

  isLoading: false,
  isLoadingRender: () => <FaSpinner className="animate-spin" />,

  leftItem: null,
  rightItem: null,

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

export default Button;
