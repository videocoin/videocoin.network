type DeviceType = 'mobile' | 'tablet' | 'laptop';

const size: Record<DeviceType, string> = {
  mobile: '767px',
  tablet: '1024px',
  laptop: '1365px',
};

export const device: Record<DeviceType, string> = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};
