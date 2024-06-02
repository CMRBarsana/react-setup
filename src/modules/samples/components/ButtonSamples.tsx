import { Button } from 'core-ui';

function ButtonSamples() {
  const renderColors = (props: any) => (
    <div className="space-x-1">
      <Button disabled {...props}>
        disabled
      </Button>
      <Button primary {...props}>
        primary
      </Button>
      <Button secondary {...props}>
        secondary
      </Button>
      <Button info {...props}>
        info
      </Button>
      <Button success {...props}>
        success
      </Button>
      <Button warning {...props}>
        warning
      </Button>
      <Button danger {...props}>
        danger
      </Button>
      <Button gray {...props}>
        gray
      </Button>
    </div>
  );
  return (
    <div className="w-full space-y-2">
      <div>Solid</div>
      {renderColors({ solid: true })}

      <div>Outline</div>
      {renderColors({ outline: true })}

      <div>Text</div>
      {renderColors({ text: true })}

      <div>SM</div>
      {renderColors({ solid: true, sm: true })}

      <div>MD</div>
      {renderColors({ solid: true, md: true })}

      <div>LG</div>
      {renderColors({ solid: true, lg: true })}
    </div>
  );
}

export default ButtonSamples;
