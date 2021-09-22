import styled from 'styled-components';
export const ToggleSwitch = styled.div`
  position: relative;

  margin-top: 65px;
  width: 255px;
  display: flex;
  flex-direction: row;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  .toggle-text {
  }
  .toggle-text-monthly {
  }

  .toggle-switch-checkbox {
    position: absolute;
    opacity: 0;
  }
  .toggle-switch-label {
    width: 64px;
    height: 32px;
    margin-left: 32px;
    margin-right: 32px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 20px;
    margin-top: 1rem;
  }
  .toggle-switch-inner {
    display: block;
    width: 200%;
    height: 24px;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;

    &:before,
    &:after {
      display: block;
      float: left;
      width: 50%;
      height: 34px;
      padding: 0;
      box-sizing: border-box;
    }
    &:before {
      content: '';
      background-color: #000;
    }
  }
  .toggle-switch-inner:after {
    content: '';
    background-color: #dfdfdf;
    text-align: right;
  }
  .toggle-switch-switch {
    width: 24px;
    height: 24px;
    margin: 10px;
    background: #000;
    position: absolute;
    top: 21px;
    bottom: 0;
    right: 115px;
    transform: translate(0, -50%);
    border: 0 solid #bbb;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }
  .toggle-switch-checkbox:checked + .toggle-switch-label {
    .toggle-switch-inner {
      margin-left: 0;
    }
    .toggle-switch-switch {
      background: #fff;
      transform: translate(calc(3.7em - 100%), -50%);
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
  }
  @media only screen and (min-width: 1024px) {
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
  }
`;

export const ToggleTextMonthly = styled.p`
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  opacity: ${({ checked }) => (checked ? '0.5' : '1')};
`;
export const ToggleTextYearly = styled(ToggleTextMonthly)`
  opacity: ${({ checked }) => (checked ? '1' : '0.5')};
`;
