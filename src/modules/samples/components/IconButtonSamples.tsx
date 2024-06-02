import { IconButton } from 'core-ui';

function IconButtonSamples() {
  const renderColors = (props: any) => (
    <div className="space-x-1">
      <IconButton disabled {...props} />
      <IconButton primary {...props} />
      <IconButton secondary {...props} />
      <IconButton info {...props} />
      <IconButton success {...props} />
      <IconButton warning {...props} />
      <IconButton danger {...props} />
      <IconButton gray {...props} />
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

export default IconButtonSamples;
