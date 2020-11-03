type DeviceType = 'mobile' | 'tablet' | 'smTablet' | 'laptop';

const size: Record<DeviceType, string> = {
  mobile: '767px',
  smTablet: '1023px',
  tablet: '1024px',
  laptop: '1365px',
};

export const device: Record<DeviceType, string> = {
  mobile: `(max-width: ${size.mobile})`,
  smTablet: `(max-width: ${size.smTablet})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};
