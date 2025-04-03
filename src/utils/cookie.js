export const setCookie = (value) => {
    const d = new Date();
    d.setTime(d.getTime() + (360*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = 'userToken' + "=" + value + ";" + expires + ";path=/";
}

export const  getCookie = () => {
    let name = "userToken=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }