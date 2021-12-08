import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 464px;
`;
export const StyledInput = styled.input`
    visibility: hidden;
`;
export const StyledLabel = styled.label`
    display: flex;
    cursor: ${(props) => (props.isBooked ? 'default' : 'pointer')};
    border-radius: 8px;
    box-shadow: ${(props) => (props.isBooked ? 'none' : '0 4px 32px rgba(218, 228, 255, 0.54)')};
    width: 104px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.isBooked ? '#DCE0EC' : '#FFFFFF')};
    border: ${(props) => (props.checked ? '1px solid #7297FF' : 'none')};
    color: ${(props) => {
    if (props.isBooked) {
      return '#F9FAFF';
    }
    if (!props.isBooked && props.checked) {
      return '#7297FF';
    }
    return '#202225';
  }};
`;
export const StyledInputWrapper = styled.div`
    margin-right: 16px;

    &:nth-of-type(4) {
        margin-right: 0;
    }
`;
