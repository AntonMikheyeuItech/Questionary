/* eslint-disable no-useless-escape */
export const getCookie = (...names) => {
    return names.reduce((acc, name) => {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
        
        acc[name] = matches ? decodeURIComponent(matches[1]) : undefined;

        return acc;
    }, {});
};

export const setCookie = (name, value, options = {}) => {
    options = {
      path: '/',
      ...options
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  };

  export const deleteCookie = name => {
    setCookie(name, "", {
      'max-age': -1
    });
  }
