const Icon = ({ className = '', styles = {} }) => {
  return (
    <i className={ className }
      style={ {
        color: 'var(--text-primary)',
        ...styles
      } }
    />
  )
}

export default Icon
