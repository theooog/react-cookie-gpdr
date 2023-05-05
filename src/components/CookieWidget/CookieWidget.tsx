import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./CookieWidget.css";

const [showAnalytics, setShowAnalytics] = useState<boolean>(true);
const cookieConsentName = "cookie_gpdr_consent";

interface Props {
  title?: string;
  subtitle?: string;
  text?: string;
  editLink?: string;
  policyLink?: string;
  policyLinkText?: string;
  color?: string;
  location?: "right" | "left";
  hideOnScrollDown?: boolean;
  onAccept: () => void;
  onReject: () => void;
  cookieSecurity?: boolean;
  acceptButtonText?: string;
  rejectButtonText?: string;
}

export const getCookieConsentValue = (): string | undefined => {
  const cookieValue = Cookies.get(cookieConsentName);

  if (cookieValue === undefined) {
    return Cookies.get(cookieConsentName);
  }

  return cookieValue;
};

export const resetCookieConsentValue = (name = cookieConsentName): void => {
  Cookies.remove(name);
};

const CookieWidget: React.FC<Props> = (props: any) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const _handleScroll = (e: Event): void => {
    console.log(window.scrollY);
    if (isVisible && window.scrollY > 150) {
      _onAccept();
    }
  };

  useEffect(() => {
    if (getCookieValue() === undefined) {
      setIsVisible(true);

      if (props.hideOnScrollDown) {
        console.log(window.scrollY);
        window.addEventListener("scroll", _handleScroll, { passive: true });
      }
    }

    return () => {
      window.removeEventListener("scroll", _handleScroll);
    };
  }, []);

  const setCookie = (cookieValue: string): void => {
    let { cookieSecurity } = props;

    if (cookieSecurity === undefined) {
      cookieSecurity = location ? location.protocol === "https:" : true;
    }

    Cookies.set(cookieConsentName, cookieValue, {
      expires: 365,
      sameSite: "lax",
      secure: cookieSecurity,
    });
  };

  const getCookieValue = (): string | undefined => {
    return getCookieConsentValue();
  };

  const _onAccept = (): void => {
    setCookie("accepted");
    props.onAccept();
    setIsVisible(false);
  };

  const _onDecline = (): void => {
    setCookie("declined");
    props.onReject();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const _onEditPreferences = (): void => {
    setShowAnalytics(false);
  };
  const cookieText = showAnalytics
    ? props.text ??
      "We use cookies and similar methods to recognize visitors and remember their preferences. We also use them to measure ad campaign effectiveness, target ads and analyze site traffic. To learn more about these methods, including how to disable them, view our Cookie Policy."
    : "Analytical cookies and technologies help us understand how people interact with our website. This helps us improve our website, apps, and communications, and helps us show you interesting and relevant content.";

  const buttonText = showAnalytics ? "Reject All" : "Apply Changes";

  return (
    <div
      className={
        "cookie_widget_container " +
        (props.location === "right" ? "is-right" : "is-left")
      }
    >
      <div
        className="cookie_widget_shape_1"
        style={{ background: props.color }}
      ></div>
      <div className="cookie_widget_shape_2"></div>
      <div className="cookie_widget_heading">
        <p className="cookie_widget_title">{props.title ?? "This website"}</p>
        <p className="cookie_widget_subtitle">
          {props.subtitle ?? "use Cookies"}
        </p>
      </div>
      <div className="cookie_widget_content">
        <p className="cookie_widget_text">
          {cookieText}
          {props.editLink && (
            <>
              <br />
              <a
                href={props.editLink}
                onClick={_onEditPreferences}
                style={{ color: props.color, textDecoration: "underline" }}
              >
                Edit Preferences
              </a>
            </>
          )}
        </p>
        {showAnalytics && (
          <div className="cookie_widget_switch_container">
            <span>Analytics:</span>

            <label className="toggle">
              <input
                type="checkbox"
                checked={showAnalytics}
                onChange={() => setShowAnalytics(!showAnalytics)}
              />
              <span className="slider"></span>
            </label>
          </div>
        )}
        {props.policyLink && (
          <a
            className="cookie_widget_privacy_policy"
            href={props.policyLink}
            target="_blank"
            style={{ color: props.color }}
          >
            {(props.policyLinkText && !isVisible) ?? "Read the privacy 5policy"}
          </a>
        )}
      </div>
      <div className="cookie_widget_footer">
        <button
          className="cookie_widget_button_reject"
          aria-label={props.rejectButtonText ?? "Reject All"}
          onClick={_onDecline}
        >
          {props.rejectButtonText ?? "Reject All"}
        </button>
        <button
          className="cookie_widget_button_accept"
          aria-label={props.acceptButtonText ?? "Accept All"}
          style={{ color: props.color }}
          onClick={_onAccept}
        >
          {props.acceptButtonText ?? "Accept All"}
        </button>
      </div>
    </div>
  );
};

export default CookieWidget;
