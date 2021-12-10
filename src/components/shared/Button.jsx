function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  type: 'button',
  version: 'primary',
  disabled: true,
};
export default Button;
