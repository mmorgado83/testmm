  enum FormFactor {
    desktop = 'desktop',
    mobile = 'mobile'
  }
  
  export const mobileFlags = () => {
    return {
      formFactor: FormFactor.mobile,
      screenEmulation: {
        mobile: true,
        width: 375,
        height: 844,
        deviceScaleFactor: 2,
        disabled: false 
      },
      maxWaitForLoad: 20000,
      throttling: {
        rttMs: 150,
        throughputKbps: 1600,
        cpuSlowdownMultiplier: 4,
      }     
    };
  };
  
  export const desktopFlags = () => {
    return {
      formFactor: FormFactor.desktop,
      screenEmulation: {
        mobile: false,
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
        disabled: false,
      },
      maxWaitForLoad: 20000,
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1,
      }
    };
  };
  