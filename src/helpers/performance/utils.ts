export function delayInSec(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time * 1000);
    });
  }
  
export function formatUrlForFilename(url: string): string {
    return url
      .replace(/^(https?:\/\/)(www\.)?/, '')
      .replace(/[^\w\d]/g, '_')
      .replace(/_+/g, '_')
      .slice(0, 100);
  }