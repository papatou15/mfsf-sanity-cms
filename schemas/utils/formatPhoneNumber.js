export default function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\\D/g, '');
    var formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

    if (formatted) {
      return formatted;
    }
    return null;
  }