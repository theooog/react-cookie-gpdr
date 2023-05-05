"use strict";
const React = require("react");
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react");
function t(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
function PreferencesModal(props) {
  if (!props.visible) return null;

  return React.createElement(
    "div",
    { className: "preferences_modal_container" },
    React.createElement("h2", null, "Cookie Preferences"),
    React.createElement(
      "div",
      { className: "preferences_toggle_container" },
      React.createElement(
        "label",
        null,
        React.createElement("input", {
          type: "checkbox",
          onChange: props.onToggleChange,
        }),
        "Disable analytical data"
      )
    ),
    React.createElement(
      "button",
      { className: "preferences_modal_close_button", onClick: props.onClose },
      "Close"
    )
  );
}
var n = t(e);
/*! js-cookie v3.0.1 | MIT */ function r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var o = (function e(t, n) {
  function o(e, o, i) {
    if ("undefined" != typeof document) {
      "number" == typeof (i = r({}, n, i)).expires &&
        (i.expires = new Date(Date.now() + 864e5 * i.expires)),
        i.expires && (i.expires = i.expires.toUTCString()),
        (e = encodeURIComponent(e)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var a = "";
      for (var c in i)
        i[c] &&
          ((a += "; " + c), !0 !== i[c] && (a += "=" + i[c].split(";")[0]));
      return (document.cookie = e + "=" + t.write(o, e) + a);
    }
  }
  return Object.create(
    {
      set: o,
      get: function (e) {
        if ("undefined" != typeof document && (!arguments.length || e)) {
          for (
            var n = document.cookie ? document.cookie.split("; ") : [],
              r = {},
              o = 0;
            o < n.length;
            o++
          ) {
            var i = n[o].split("="),
              a = i.slice(1).join("=");
            try {
              var c = decodeURIComponent(i[0]);
              if (((r[c] = t.read(a, c)), e === c)) break;
            } catch (e) {}
          }
          return e ? r[e] : r;
        }
      },
      remove: function (e, t) {
        o(e, "", r({}, t, { expires: -1 }));
      },
      withAttributes: function (t) {
        return e(this.converter, r({}, this.attributes, t));
      },
      withConverter: function (t) {
        return e(r({}, this.converter, t), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(t) },
    }
  );
})(
  {
    read: function (e) {
      return (
        '"' === e[0] && (e = e.slice(1, -1)),
        e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
      );
    },
    write: function (e) {
      return encodeURIComponent(e).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      );
    },
  },
  { path: "/" }
);
!(function (e, t) {
  void 0 === t && (t = {});
  var n = t.insertAt;
  if (e && "undefined" != typeof document) {
    var r = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("style");
    (o.type = "text/css"),
      "top" === n && r.firstChild
        ? r.insertBefore(o, r.firstChild)
        : r.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e));
  }
})(
  ".cookie_widget_container{\r\n    position: fixed;\r\n    bottom: 20px;\r\n    min-width: 300px;\r\n    width: 350px;\r\n    max-width: 400px;\r\n    background-color: #fff;\r\n    z-index: 9999;\r\n    border: 1px solid #f5f5f5;\r\n    box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 24px;\r\n    border-radius: 8px;\r\n    font-family: Helvetica;\r\n}\r\n\r\n.cookie_widget_container.is-right{\r\n    right: 20px !important;\r\n    -webkit-animation-name: fadeInRight;\r\n    animation-name: fadeInRight;\r\n    -webkit-animation-duration: 0.2s;\r\n    animation-duration: 0.2s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.cookie_widget_container.is-left{\r\n    left: 20px;\r\n    -webkit-animation-name: fadeInLeft;\r\n    animation-name: fadeInLeft;\r\n    -webkit-animation-duration: 0.2s;\r\n    animation-duration: 0.2s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.cookie_widget_shape_1{\r\n    height: 50px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    border-bottom-left-radius: 8px;\r\n    border-top-right-radius: 8px;\r\n    background: #bb2030;\r\n    z-index: 2;\r\n    opacity: 0.8;\r\n}\r\n\r\n.cookie_widget_shape_2{\r\n    height: 50px;\r\n    width: 170px;\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 0;\r\n    border-bottom-left-radius: 8px;\r\n    border-top-left-radius: 8px;\r\n    z-index: 1;\r\n    background: rgba(213, 213, 213, 0.28);\r\n}\r\n\r\n.cookie_widget_heading{\r\n    padding: 20px 20px 0 20px;\r\n}\r\n\r\n.cookie_widget_content{\r\n    padding: 10px 20px;\r\n}\r\n\r\n.cookie_widget_title{\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #000;\r\n    margin: 0;\r\n}\r\n\r\n.cookie_widget_subtitle{\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    color: #000;\r\n    margin: 0 !important;\r\n}\r\n\r\n.cookie_widget_text{\r\n    color: #999ca2;\r\n    font-size: 14px;\r\n}\r\n\r\n.cookie_widget_privacy_policy{\r\n    color: #bb2030;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n    font-size: 13px;\r\n}\r\n\r\n.cookie_widget_footer{\r\n    width: 100%;\r\n    border-top: 1px solid #f5f5f5;\r\n    height: 40px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.cookie_widget_footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.cookie_widget_button_reject, .cookie_widget_button_accept{\r\n    background: transparent;\r\n    width: 50%;\r\n    height: 40px;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: all 0.1s ease;\r\n    margin: 0;\r\n}\r\n\r\n.cookie_widget_button_reject{\r\n    border-right: 1px solid #f5f5f5;\r\n    border-bottom-left-radius: 8px;\r\n}\r\n\r\n.cookie_widget_button_accept {\r\n    color: #bb2030;\r\n    font-weight: bold;\r\n    border-bottom-right-radius: 8px;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .cookie_widget_container{\r\n        width: 100%;\r\n        max-width: 100%;\r\n        left: 0 !important;\r\n        right: 0 !important;\r\n        bottom: 0 !important;\r\n        border-radius: 0;\r\n    }\r\n}\r\n\r\n@keyframes fadeInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-20px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n\r\n@keyframes fadeInRight {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(20px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0);\r\n    }\r\n}\r\n"
);
exports.CookieWidget = function (t) {
  var r,
    i,
    a,
    c,
    d,
    l,
    s,
    p,
    u = n.default.useState(!1),
    f = u[0],
    m = u[1],
    g = function (e) {
      console.log(window.scrollY), f && window.scrollY > 150 && b();
    };

  // Add a new state for managing the preferences modal display
  var preferencesModalVisibleState = n.default.useState(false),
    preferencesModalVisible = preferencesModalVisibleState[0],
    setPreferencesModalVisible = preferencesModalVisibleState[1];

  // Add a new function to handle the toggle change
  var handleToggleChange = function (e) {
    // Save the new preference in a cookie or any other storage
    console.log("Toggle changed:", e.target.checked);
  };

  e.useEffect(function () {
    return (
      void 0 === h() &&
        (m(!0),
        t.hideOnScrollDown &&
          (console.log(window.scrollY),
          window.addEventListener("scroll", g, { passive: !0 }))),
      function () {
        window.removeEventListener("scroll", g);
      }
    );
  }, []);
  var _ = function (e) {
      var n = t.cookieSecurity;
      void 0 === n && (n = !location || "https:" === location.protocol),
        o.set("cookie_gpdr_consent", e, {
          expires: 365,
          sameSite: "lax",
          secure: n,
        });
    },
    h = function () {
      return void 0 === (e = o.get("cookie_gpdr_consent"))
        ? o.get("cookie_gpdr_consent")
        : e;
      var e;
    },
    b = function () {
      _("accepted"), t.onAccept(), m(!1);
    };
  return f
    ? n.default.createElement(
        "div",
        {
          className:
            "cookie_widget_container " +
            ("right" === t.location ? "is-right" : "is-left"),
        },
        n.default.createElement("div", {
          className: "cookie_widget_shape_1",
          style: { background: t.color },
        }),
        n.default.createElement("div", { className: "cookie_widget_shape_2" }),
        n.default.createElement(
          "div",
          { className: "cookie_widget_heading" },
          n.default.createElement(
            "p",
            { className: "cookie_widget_title" },
            null !== (r = t.title) && void 0 !== r ? r : "This website"
          ),
          n.default.createElement(
            "p",
            { className: "cookie_widget_subtitle" },
            null !== (i = t.subtitle) && void 0 !== i ? i : "use Cookies"
          )
        ),
        n.default.createElement(
          "div",
          { className: "cookie_widget_content" },
          n.default.createElement(
            "p",
            { className: "cookie_widget_text" },
            null !== (a = t.text) && void 0 !== a
              ? a + "asdasd "
              : "We use cookies and similar methods to recognize visitors and remember their preferences. We also use them to measure ad campaign effectiveness, target ads and analyze site traffic. To learn more about these methods, including how to disable them, view our Cookie Policy."
          ),
          t.policyLink &&
            n.default.createElement(
              "a",
              {
                className: "cookie_widget_privacy_policy",
                href: t.policyLink,
                target: "_blank",
                style: { color: t.color },
              },
              null !== (c = t.policyLinkText) && void 0 !== c
                ? c
                : "Read the privacy policy"
            ),
          t.preferencesLink &&
            n.default.createElement(
              "a",
              {
                className: "cookie_widget_edit_preferences",
                href: "#",
                onClick: function (e) {
                  e.preventDefault();
                  setPreferencesModalVisible(true);
                },
                style: { color: t.color },
              },
              "Edit your preferences"
            )
        ),
        n.default.createElement(
          "div",
          { className: "cookie_widget_footer" },
          //   n.default.createElement(
          //     "button",
          //     {
          //       className: "cookie_widget_button_reject",
          //       "aria-label":
          //         null !== (d = t.rejectButtonText) && void 0 !== d
          //           ? d
          //           : "Reject All",
          //       onClick: function () {
          //         _("declined"), t.onReject(), m(!1);
          //       },
          //     },
          //     null !== (l = t.rejectButtonText) && void 0 !== l ? l : "Reject All"
          //   ),
          n.default.createElement(
            "div",
            { className: "cookie_widget_content" }
            // ...
          ),
          // ...
          // Add the PreferencesModal component
          n.default.createElement(PreferencesModal, {
            visible: preferencesModalVisible,
            onClose: function () {
              setPreferencesModalVisible(false);
            },
            onToggleChange: handleToggleChange,
          }),

          n.default.createElement(
            "button",
            {
              className: "cookie_widget_button_accept",
              "aria-label":
                null !== (s = t.acceptButtonText) && void 0 !== s
                  ? s
                  : "Accept All",
              style: { color: t.color },
              onClick: b,
            },
            null !== (p = t.acceptButtonText) && void 0 !== p ? p : "Accept All"
          )
        )
      )
    : null;
};
//# sourceMappingURL=index.js.map
