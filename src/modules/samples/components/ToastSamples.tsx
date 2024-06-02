import { Button, toastDanger, toastInfo, toastSuccess, toastWarning } from 'core-ui';

function ToastSamples() {
  return (
    <div className="space-x-2">
      <Button solid success onClick={() => toastSuccess('Success')}>
        Success
      </Button>
      <Button solid info onClick={() => toastInfo('Info')}>
        Info
      </Button>
      <Button solid warning onClick={() => toastWarning('Warning')}>
        Warning
      </Button>
      <Button solid danger onClick={() => toastDanger('Danger')}>
        Danger
      </Button>
    </div>
  );
}

export default ToastSamples;
