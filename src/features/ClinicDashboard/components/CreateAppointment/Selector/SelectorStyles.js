const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: '#202225',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '19px',
    paddingLeft: '24px',
    borderRadius: '6px',
    backgroundColor: state.isFocused ? '#F9FAFF' : 'transparent',
  }),
  control: () => ({
    background: '#FFFFFF',
    borderRadius: '8px',
    border: '1px solid #DCE0EC',
    display: 'flex',
    boxShadow: '0 4px 32px rgba(218, 228, 255, 0.36)',
    // none of react-select's styles are passed to <Control />
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  input: (provided) => ({
    ...provided,
    margin: '0',
    padding: '0',
  }),
  /*  menu: (provided) => ({
    ...provided,
    width: '100%',
    background: '#FFFFFF',
    borderRadius: '8px',
    marginTop: '4px',
    padding: '4px',
    height: '128px',
    overflowY: 'scroll',
  }), */
  menu: (provided) => ({
    ...provided,
    padding: 4,
    fontSize: 17,
    borderRadius: 8,
  }),
  menuList: (provided) => ({
    ...provided,
    overflow: 'auto',
    height: 128,
    '::-webkit-scrollbar': {
      width: 8,
      backgroundColor: 'rgba(220, 224, 236, 0.32)',
      borderRadius: 4,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(161, 171, 201, 0.32)',
      borderRadius: 4,
    },
  }),
  menuPortal: (provided) => ({
    ...provided,
    padding: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    width: '100%',
    padding: '16px 24px',
    boxSizing: 'border-box',
    borderRadius: '8px 0 0 8px',
    fontSize: '17px',
    lineHeight: '24px',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

export default customStyles;
