import { ReactNode } from 'react';

import _ from 'lodash';

import { ToastProp } from './models';

interface ToastTemplateProp {
  content: ToastProp;
  icon: ReactNode;
}

function ToastTemplate({ content, icon }: ToastTemplateProp) {
  return (
    <div className="flex items-center">
      {icon && icon}
      <div className={icon ? 'ml-3' : ''}>{content}</div>
    </div>
  );
}

ToastTemplate.defaultProps = {
  icon: undefined,
};

export default ToastTemplate;
