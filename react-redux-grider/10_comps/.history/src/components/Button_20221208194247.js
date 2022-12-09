import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {

    const classes = className('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary
    })

  return (
    <button className={classes}>
      {children}
    </button>
  );
}


export default Button;
