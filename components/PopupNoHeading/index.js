import styles from './index.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import React, { useEffect, useCallback } from 'react';
import ClientOnlyPortal from './ClientOnlyPortal';

export default function useOnClickOutside(ref, handler) {
  const escapeListener = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        handler(e);
      }
    },
    [handler]
  );
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    document.addEventListener('keyup', escapeListener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [ref, handler, escapeListener]);
}

const PopupNoHeading = React.forwardRef((props, ref) => {
  const {
    children,
    heading1,
    heading2,
    popupState,
    className,
    crossHandler,
    noPadding = false,
    center = false,
    noShowCross,
    ...others
  } = props;

  return (
    <ClientOnlyPortal selector="#popupContainer">
      <div
        className={cx(styles['popup-overlay'], {
          [styles['popup-overlay--open']]: popupState,
        })}
      />
      <div
        className={cx(styles.popup, className, {
          [styles['popup--open']]: popupState,
          [styles['popup--no-padding']]: noPadding,
          [styles['popup--center']]: center,
        })}
        ref={ref}
        {...others}
      >
        <div className={styles.dots}>
          <div className={styles.dots__dot1}></div>
          <div className={styles.dots__dot2}></div>
          <div className={styles.dots__dot3}></div>
          <div className={styles.dots__dot4}></div>
        </div>
        {noShowCross ? null : (
        <svg onClick={(e) => {crossHandler()}}width="32" height="32" viewBox="0 0 49 49" className={styles.popup__cross} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="13.5029" y="37.544" width="4.19178" height="14.9041" transform="rotate(-135 13.5029 37.544)" fill="#D9D9D9" fill-opacity="0.7"/>
        <rect x="27.0054" y="24.0414" width="4.19178" height="14.9041" transform="rotate(-135 27.0054 24.0414)" fill="#D9D9D9" fill-opacity="0.7"/>
        <rect x="24.0415" y="27.0053" width="4.19178" height="14.9041" transform="rotate(-45 24.0415 27.0053)" fill="#D9D9D9" fill-opacity="0.7"/>
        <rect x="10.5391" y="13.5027" width="4.19178" height="14.9041" transform="rotate(-45 10.5391 13.5027)" fill="#D9D9D9" fill-opacity="0.7"/>
        <rect x="21.0776" y="24.0414" width="4.19178" height="4.19178" transform="rotate(-45 21.0776 24.0414)" fill="#D9D9D9" fill-opacity="0.7"/>
        </svg>)
          }
        {children}
      </div>
    </ClientOnlyPortal>
  );
});

export { PopupNoHeading, useOnClickOutside };
